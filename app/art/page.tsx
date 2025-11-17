import styles from "./page.module.css";
import { Suspense } from 'react'; 

export const revalidate = 3600; 

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
  [k: string]: any;
};

async function getDepartmentName(id: string): Promise<string> {
  try {
    const res = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/departments", { next: { revalidate: 86400 } });
    const data = await res.json();
    const dept = data.departments.find((d: any) => String(d.departmentId) === id);
    return dept ? dept.displayName : id;
  } catch (e) {
    return id;
  }
}

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

async function getArtData(departmentId: string, count: number): Promise<MetObject[]> {
  const base = "https://collectionapi.metmuseum.org/public/collection/v1";
  
  const searchRes = await fetch(`${base}/search?hasImages=true&departmentId=${departmentId}&q=*`, { next: { revalidate: 3600 } });
  const searchData = await searchRes.json();

  if (!searchData || !searchData.objectIDs) return [];

  const chosenIDs = sampleArray<number>(searchData.objectIDs, count);

  const promises = chosenIDs.map(async (id) => {
    try {
      const res = await fetch(`${base}/objects/${id}`, { next: { revalidate: 3600 } });
      if (!res.ok) return null;
      return await res.json();
    } catch (e) {
      return null;
    }
  });

  const results = await Promise.all(promises);
  return results.filter(Boolean) as MetObject[];
}


async function ArtworksGrid({ departmentId, count }: { departmentId: string; count: number }) {
  const items = await getArtData(departmentId, count);

  if (items.length === 0) {
    return <div className={styles.notice}>No artworks found.</div>;
  }

  return (
    <section className={styles.grid}>
      {items.map((art) => {
        const img = art.primaryImageSmall || art.primaryImage || "";
        
        return (
          <article key={art.objectID} className={styles.card}>
            {img ? (
              <a href={art.objectURL || "#"} target="_blank" rel="noreferrer" className={styles.mediaLink}>
                <div className={styles.media}>
                  <img src={img} alt={art.title} className={styles.image} loading="lazy" />
                </div>
              </a>
            ) : (
              <div className={styles.mediaPlaceholder}>No Image</div>
            )}

            <div className={styles.meta}>
              <h2 className={styles.artTitle}>{art.title}</h2>
              <p className={styles.artist}>{art.artistDisplayName || "Unknown artist"}</p>
              <ul className={styles.props}>
                <li><strong>Date:</strong> {art.objectDate}</li>
                <li><strong>Medium:</strong> {art.medium}</li>
                <li><strong>Culture:</strong> {art.culture || "—"}</li>
              </ul>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default async function ArtPage() {
  const departmentId = "4"; 
  const count = 6;
    const departmentName = await getDepartmentName(departmentId);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Met Museum Gallery</h1>
        <p className={styles.subtitle}>
          Department: <strong>{departmentName}</strong>
        </p>
      </header>
      
      <Suspense fallback={<div className={styles.notice}>Loading collection...</div>}>
        <ArtworksGrid departmentId={departmentId} count={count} />
      </Suspense>
    </main>
  );
}