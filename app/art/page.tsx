import styles from "./page.module.css";
import { Suspense } from 'react'; 

export const revalidate = 3600; 

/* -------- Types -------- */
type MetObject = {
  objectID: number;
  title: string;
  artistDisplayName: string;
  primaryImage: string;
  primaryImageSmall: string;
  objectDate: string;
  medium: string;
  dimensions: string;
  department: string;
  creditLine: string;
  repository: string;
  objectURL: string;
  culture?: string;
  accessionYear?: string;
  [k: string]: any;
};

/* -------- Utility helpers -------- */
function sampleArray<T>(arr: T[], n: number) {
  const res: T[] = [];
  const src = arr.slice();
  const len = Math.min(n, src.length);
  for (let i = 0; i < len; i++) {
    const j = Math.floor(Math.random() * src.length);
    res.push(src.splice(j, 1)[0]);
  }
  return res;
}

async function fetchJSON(url: string, timeoutMs = 9000): Promise<any | null> {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { 
      next: { revalidate: 3600 }, // <-- ADDED: Cache API calls for 1 hour
      signal: controller.signal 
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error(`[Met] HTTP ${res.status} ${res.statusText} - ${text.slice(0, 300)}`);
      return null;
    }
    return await res.json().catch((e) => {
      console.error("[Met] JSON parse error:", e);
      return null;
    });
  } catch (e: any) {
    console.error("[Met] fetch error:", e?.name ?? e);
    return null;
  } finally {
    clearTimeout(t);
  }
}

export async function getArtData(departmentId: string, count: number): Promise<MetObject[]> {
  const base = "https://collectionapi.metmuseum.org/public/collection/v1";

  const searchUrl = `${base}/search?hasImages=true&departmentId=${encodeURIComponent(departmentId)}&q=*`;
  const search = await fetchJSON(searchUrl);
  if (!search || !Array.isArray(search.objectIDs) || search.objectIDs.length === 0) {
    console.warn("[getArtData] search with hasImages failed, trying without hasImages...");
    const fallbackSearchUrl = `${base}/search?departmentId=${encodeURIComponent(departmentId)}&q=*`;
    const fallback = await fetchJSON(fallbackSearchUrl);
    if (!fallback || !Array.isArray(fallback.objectIDs) || fallback.objectIDs.length === 0) {
      console.error("[getArtData] Could not find objects for department", departmentId);
      return [];
    }
    // use fallback list
    return await fetchObjectsRandomly(fallback.objectIDs, count, base);
  }

  return await fetchObjectsRandomly(search.objectIDs as number[], count, base);
}

async function fetchObjectsRandomly(objectIDs: number[], count: number, baseApi: string): Promise<MetObject[]> {
  const chosenIDs = sampleArray<number>(objectIDs, count);
  const CONCURRENCY = 6;

  const results: MetObject[] = [];
  let i = 0;

  async function worker() {
    while (i < chosenIDs.length) {
      const idx = i++;
      const id = chosenIDs[idx];
      try {
        const url = `${baseApi}/objects/${id}`;
        const obj = await fetchJSON(url, 8000);
        if (obj) {
          results[idx] = obj as MetObject;
        } else {
          // insert a placeholder minimal object to keep indices aligned
          results[idx] = {
            objectID: id,
            title: "Unknown (failed to fetch)",
            artistDisplayName: "",
            primaryImage: "",
            primaryImageSmall: "",
            objectDate: "",
            medium: "",
            dimensions: "",
            department: "",
            creditLine: "",
            repository: "",
            objectURL: "",
          } as MetObject;
        }
      } catch (e) {
        console.error("[getArtData] worker exception for id", id, e);
        results[idx] = {
          objectID: id,
          title: "Unknown (error)",
          artistDisplayName: "",
          primaryImage: "",
          primaryImageSmall: "",
          objectDate: "",
          medium: "",
          dimensions: "",
          department: "",
          creditLine: "",
          repository: "",
          objectURL: "",
        } as MetObject;
      }
    }
  }

  const workers = Array.from({ length: Math.min(CONCURRENCY, chosenIDs.length) }, () => worker());
  await Promise.all(workers);

  return results.filter(Boolean) as MetObject[];
}

async function getDepartmentTitle(departmentId: string): Promise<string | null> {
  const base = "https://collectionapi.metmuseum.org/public/collection/v1";
  const url = `${base}/departments`;
  const res = await fetchJSON(url);
  if (!res || !Array.isArray(res.departments)) return null;
  const found = res.departments.find((d: any) => String(d.departmentId) === String(departmentId));
  return found ? found.displayName : null;
}

function ArtworksLoading() {
  return (
    <div className={styles.notice}>
      <strong>Loading artworks...</strong>
      <p>Please wait while we fetch the collection.</p>
    </div>
  );
}

async function ArtworksGrid({ departmentId, count }: { departmentId: string; count: number }) {
  const items = await getArtData(departmentId, count);

  if (items.length === 0) {
    return (
      <div className={styles.notice}>
        <strong>No artworks found for this department.</strong>
        <p>Try a different department id or reduce the count.</p>
      </div>
    );
  }

  return (
    <section className={styles.grid}>
      {items.map((art) => {
        const img = art.primaryImageSmall || art.primaryImage || "";
        const key = `met-${art.objectID}`;

        return (
          <article key={key} className={styles.card}>
            {img ? (
              <a href={art.objectURL || "#"} target="_blank" rel="noreferrer" className={styles.mediaLink}>
                <div className={styles.media}>
                  <img src={img} alt={art.title} className={styles.image} loading="lazy" />
                </div>
              </a>
            ) : (
              <div className={styles.mediaPlaceholder}>
                <div className={styles.noImage}>No image</div>
              </div>
            )}

            <div className={styles.meta}>
              <h2 className={styles.artTitle}>{art.title}</h2>
              <p className={styles.artist}>{art.artistDisplayName || "Unknown artist"}</p>

              <ul className={styles.props}>
                <li><strong>Date:</strong> {art.objectDate || "—"}</li>
                <li><strong>Medium:</strong> {art.medium || "—"}</li>
                <li><strong>Culture:</strong> {art.culture || "—"}</li>
              </ul>

              <p className={styles.credit}>{art.creditLine || ""}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}


/* -------- UPDATED Page component -------- */
export default async function ArtPage() {
  const departmentId = "4"; 
  const count = 6;
  const title = await getDepartmentTitle(departmentId);
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Met Museum — Art Gallery</h1>
        <p className={styles.subtitle}>
          Department: <span className={styles.departmentName}>{title ?? `#${departmentId}`}</span>
        </p>
      </header>
      <Suspense fallback={<ArtworksLoading />}>
        <ArtworksGrid departmentId={departmentId} count={count} />
      </Suspense>
      
    </main>
  );
}