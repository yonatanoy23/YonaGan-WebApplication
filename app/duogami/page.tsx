import Head from "next/head";
import styles from "./page.module.css";
import React from "react";
import Image from "next/image";

function Hero() {
  const BoatRow = () => (
    <div className={styles.boatRow}>
      <Image src="/Boat.svg" alt="Origami boat 1" width={120} height={60} />
      <Image src="/Boat.svg" alt="Origami boat 2" width={120} height={60} />
      <Image src="/Boat.svg" alt="Origami boat 3" width={120} height={60} />
    </div>
  );
  return (
    <section className={styles.hero} aria-label="Hero">
      <BoatRow />
      <div className={styles.heroContent}>
        <h1 className={styles.h1}>DuoGami</h1>
        <p className={styles.h2}>Fold. Learn. Create.</p>
        <p className={styles.h2}>Step by Step</p>
      </div>
      <BoatRow />
    </section>
  );
}

// רכיב About
function About() {
  return (
    <section id="about" className={styles.sectionContainer} dir="rtl">
      <h2 className={styles.sectionTitleBox}>מי אנחנו?</h2>
      <p className={styles.textBlock}>
        DuoGami זו אפליקציה
        <br />
        חדשנית ללימוד אוריגמי
        <br />
        בכל רמה, החל ממתחילים
        <br />
        ועד מתקדמים וכל זאת ישר
        <br />
        מהטלפון!
        <br />
        המוצר שלנו הופך את
        <br />
        אמנות האוריגמי לנגישה,
        <br />
        אינטראקטיבית ומהנה, כמו
        <br />
        שדואלינגו עושה לשפות.
      </p>
    </section>
  );
}

// רכיב Background
function Background() {
  return (
    <section id="background" className={styles.sectionContainer} dir="rtl">
      <h2 className={styles.sectionTitleBox}>רקע, מניעים ומטרות</h2>
      <p className={styles.textBlock}>
        אמנות האוריגאמי מצריכה
        <br />
        דייקנות רבה. בני אדם רבים
        <br />
        אשר מעוניינים ליצור משהו
        <br />
        זקוקים להכוונה על מנת
        <br />
        שידעו כיצד ליצור יצירה
        <br />
        מסוימת אשר עולה על
        <br />
        דעתם. אנו רוצים להנגיש
        <br />
        אמנות זאת למספר רב של
        <br />
        אנשים ככל הניתן.
        <br />
        המצב בשוק כרגע לא מציע
        <br />
        מגוון רחב של אופציות עבור
        <br />
        המשתמש. רובן מציגות
        <br />
        מוצר מאוד מיושן ולא
        <br />
        אינטואיטיבי אשר לא מושך
        <br />
        משתמשים רבים. סימן
        <br />
        מרכזי לכך הוא שהן אינן
        <br />
        מנצלות את ההזדמנויות
        <br />
        שבינה מלאכותית מציעה.
      </p>
    </section>
  );
}

// רכיב TargetAudience
function TargetAudience() {
  const characteristics = [
    "גילאי 10+",
    "מחפשים פעילויות מרגיעות",
    "משתמשים באפליקציות למידה/תחביבים",
    "אוהבים להתאמן ולפתח כישורים, מחפשים תחושת הישג",
  ];

  return (
    <section id="audience" className={styles.sectionContainer} dir="rtl">
      <h2 className={styles.sectionTitleBox}>קהל היעד</h2>
      <p className={styles.textBlock}>
        האפליקציה מיועדת לילדים
        <br />
        ומבוגרים בעלי עניין
        <br />
        בלמידה יצירתית, חוויתית
        <br />
        ורגועה. הם מחפשים דרך
        <br />
        לפתח תחביב, להביע
        <br />
        יצירתיות, לפתח
        <br />
        מוטוריקה עדינה, לשפר
        <br />
        ריכוז ולהירגע.
      </p>
      
      <h2 className={`${styles.sectionTitleLine} ${styles.marginTopLg}`}>
        מאפיינים<br/>כלליים
      </h2>
      <ul className={styles.bulletList}>
        {characteristics.map((item, index) => (
          <li key={index} className={styles.bulletItem}>
            <span>{item}</span>
            <span className={styles.bulletDot}></span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// רכיב "ערכים מרכזיים"
function CoreValues() {
  const values = [
    "חווית למידה דרך אתגרים ומשחקים (Gamification)",
    "התאמה אישית לאורך הדרך לפי רמת המשתמש והתקדמותו",
    "ספריית דגמים מתעדכנת: מיצירות בסיסיות ועד יצירות מורכבות",
    "התאמת תרגילים בהתאם לרמת המשתמש באמצעות AI",
    "מבוססת על מודל \"פרימיום\"",
  ];

  return (
    <section id="values" className={styles.sectionContainer} dir="rtl">
      <h2 className={styles.sectionTitleLine}>ע ר כ י ם<br/>מ ר כ ז י י ם</h2>
      <ul className={styles.bulletList}>
        {values.map((item, index) => (
          <li key={index} className={styles.bulletItem}>
            <span>{item}</span>
            <span className={styles.bulletDot}></span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// רכיב Categories
function Categories() {
  const categories = [
    { title: "בעלי חיים", items: "ציפורים, דגים, חרקים, יונקים, זוחלים וכו'." },
    { title: "צמחים וטבע", items: "פרחים, עלים, עצים, פירות." },
    { title: "חפצים ופריטים יומיומיים", items: "קופסאות, כוכבים, סירות, בגדים, קישוטים." },
    { title: "אנשים ודמויות", items: "דמויות אדם, בובות, פרצופים מעוצבים." },
    { title: "פנטזיה ויצורים מיתולוגיים", items: "דרקונים, חד-קרן, עוף החול, מפלצות." },
  ];

  return (
    <section id="categories" className={styles.sectionContainer} dir="rtl">
      <h2 className={styles.sectionTitleLine}>קטגוריות</h2>
      <div className={styles.twoColumnGrid}>
        {categories.map((cat, index) => (
          <React.Fragment key={index}>
            <div className={styles.gridItemRight}>
              <strong>{cat.title}</strong>
            </div>
            <div className={styles.gridItemLeft}>
              {cat.items}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

// --- רכיב שהוחזר ---
// רכיב Challenges
function Challenges() {
  const items = [
    "בעיה אפשרית אחת היא הוספת תוכן תמידית על מנת לשמור את המשתמשים הנוכחים מעוניינים במוצר.",
    "חשש מרכזי הוא רווחיות המוצר. זאת בשביל לתפעל את הצוות העובד על המוצר - על מנת להתמודד עם זה נרצה שהמוצר שלנו יכיל פרסומות (בתדירות נמוכה ככל הניתן) + תכניות תשלום למשתמשים הפותחות בפניהם עוד תוכן של המוצר.",
    "סכנה אפשרית היא שהמשתמשים יאבדו עניין במוצר בין אם עקב הפרסומות ובין אם בגלל שהתוכן לא יהיה מספיק חדשני ומעניין בשלב מסוים. איבוד משתמשים יוביל לאובדן הכנסות דבר העלול להוביל לקריסת המוצר.",
  ];

  return (
    <section id="challenges" className={styles.sectionContainer} dir="rtl">
      <h2 className={styles.sectionTitleBox}>בעיות, חששות ושאלות פתוחות</h2>
      <ul className={`${styles.bulletList} ${styles.marginTopMd}`}>
        {items.map((item, index) => (
          <li key={index} className={styles.bulletItem}>
            <span>{item}</span>
            <span className={styles.bulletDot}></span>
          </li>
        ))}
      </ul>
      <div className={styles.craneImageContainer}>
        <Image src="/Crane.png" alt="Origami crane" width={300} height={200} style={{width: '100%', height: 'auto'}} />
      </div>
    </section>
  );
}


// רכיב Footer
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <nav className={styles.footerNav} aria-label="Footer">
          <p className={styles.p} style={{ marginTop: 8 }}>
            © {new Date().getFullYear()} DuoGami
          </p>
        </nav>
      </div>
    </footer>
  );
}

// הרכבת העמוד הראשי
export default function DuoGamiPage() {
  return (
    <>
      <Head>
        <title>DuoGami — Fold. Learn. Create.</title>
        <meta name="description" content="DuoGami — learn origami with step-by-step lessons and AI guidance" />
      </Head>

      <main className={styles.root}>
        <Hero />
        <About />
        <CoreValues />
        <Categories />
        <Background />
        <TargetAudience />
        <Challenges /> 
        <Footer />
      </main>
    </>
  );
}