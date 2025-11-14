import Head from "next/head";
import styles from "./page.module.css";
import React from "react";
import Image from "next/image";

// רכיב Hero - תוקן מבנית
function Hero() {
  const BoatRow = () => (
    <div className={styles.boatRow}>
      <Image src="/boat.svg" alt="Origami boat 1" width={120} height={60} />
      <Image src="/boat.svg" alt="Origami boat 2" width={120} height={60} />
      <Image src="/boat.svg" alt="Origami boat 3" width={120} height={60} />
    </div>
  );
  return (
    <section className={styles.hero} aria-label="Hero">
      <BoatRow />
      <div className={styles.heroContent}>
        <h1 className={styles.h1}>DoaGami</h1>
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

// רכיב "אפליקציות בשוק"
function MarketApps() {
  const items = [
    "מיושנות",
    "מבוססות על מדריכים",
    "טקסטואליים/תרשימים בלבד",
    "לא אינטואיטיביות",
    "אינן מנצלות את היכולות של בינה מלאכותית",
    "לא קיים אלמנט קהילתי",
  ];

  return (
    <section id="market" className={styles.sectionContainer} dir="rtl">
      <h2 className={styles.sectionTitleLine}>ה א פ ל י ק צ י ו ת<br/>ב ש ו ק</h2>
      <ul className={styles.bulletList}>
        {items.map((item, index) => (
          <li key={index} className={styles.bulletItem}>
            <span>{item}</span>
            <span className={styles.bulletDot}></span>
          </li>
        ))}
      </ul>
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

// רכיב MoreInfo
function MoreInfo() {
  return (
    <section id="moreInfo" className={styles.sectionContainer} dir="rtl">
      <h2 className={styles.sectionTitleBox}>מידע נוסף</h2>
      
      <h3 className={`${styles.sectionTitleLine} ${styles.marginTopLg}`}>
        מ ה א נ ח נ ו<br/>ב ו נ י ם ؟
      </h3>
      <p className={styles.textBlock}>
        אפליקציה שבאה ללמד אנשים לעשות
        <br />
        אוריגאמי בכל רמה בין אם הם מתחילים או
        <br />
        עם רקע. היא מציעה שיעורים שבכל אחד
        <br />
        ניתן לבנות צורה אחרת באמצעות סרטון
        <br />
        הדרכה וליווי של בינה מלאכותית מותאמת
        <br />
        למשתמש לפי ההיסטוריית שימוש שלו
        <br />
        באפליקציה.
        <br />
        הצורות יתחלקו לקטגוריות ולדרג קושי כדי
        <br />
        שכל משתמש יוכל לבחור בעצמו אם הוא
        <br />
        רוצה להתקדם ליצירות יותר מורכבות או
        <br />
        להמשיך להתאמן על יצירות באותו הקושי
        <br />
        כדי להתאמן.
      </p>

      <h3 className={`${styles.sectionTitleLine} ${styles.marginTopLg}`}>
        מ ה א נ ח נ ו<br/>ל א ב ו נ י ם ؟
      </h3>
      <p className={styles.textBlock}>
        מספר הקטגוריות והפריטים בכל קטגוריה
        <br />
        הוא סופי - המשתמש לא יכול להזין שם של
        <br />
        יצירה אותה הוא רוצה ליצור והכרח
        <br />
        למצוא אותה במאגר.
        <br />
        אפליקציה שקיפולי האוריגמי בה נעשים
        <br />
        באמצעות מסך המגע ולא באמצעות דף
        <br />
        שהמשתמש מביא איתו.
      </p>
    </section>
  );
}

// רכיב ContentStrategy
function ContentStrategy() {
  return (
    <section id="content" className={styles.sectionContainer} dir="rtl">
      <h2 className={styles.sectionTitleLine}>ת ו כ ן ו מ י ד ע</h2>
      <p className={`${styles.textBlock} ${styles.textAlignRight} ${styles.maxWidthLg}`}>
        תחילה, צוות המוצר יאסוף מספר רב של
        תכני אוריגאמי ויסווג אותם לקטגוריות.
        כאשר בכל קטגוריה יש מספר אפשרויות
        לאוריגאמי לפי רמות קושי. למשל
        קטגוריית בעלי חיים אשר תכיל - חתול,
        כלב, דולפין, ארמדילו, גמל שלמה, מרבה
        רגליים. התוכן יתעדכן אחת לשבוע - צוות
        המוצר יסיר תוכן שאינו רלוונטי ויוסיף
        תכנים חדשים בהתאם לביקוש אצל
        כל קטגוריה.
        <br />
        מאגר האפשרויות גדל עם הזמן, מתווספות
        עוד ועוד אפשרויות למשתמש אותן הוא
        יוכל לבחור לתרגל/ליצור. כלומר עבור כל
        קטגוריה המאגר גדל. התוכן נוצר על ידי
        צוות המוצר האחראי על מציאת הרעיונות
        לאפשרויות אוריגאמי חדשות והנגשתו
        באפליקציה. על צוות המוצר לאבחן תוך
        כדי השימוש אילו יצירות המשתמש
        מרוצה יותר ואילו פחות ובהתאם לכך
        להתאים את התוכן במוצר.
        <br />
        המידע היחידי אשר יהיה זקוק לאבטחה
        הינו אמצעי וביצוע התשלום עבור
        משתמשים אשר רכשו חבילת תוכן גדולה
        יותר (מודל פרימיום). כמו כן, המוצר
        ישמור על פרטיות המשתמש באשר ליצירות
        אותן הוא ביצע.
        <br />
        לא נדרש שילוב של תוכן ממקורות אחרים,
        לכל יצירה שצוות המוצר ירצה להוסיף
        למאגר הוא יצטרך לדעת את ההנחיות
        המתאימות ליצירה ולהמיר אותן
        לאפליקקציה - כלומר להוסיף את סדר
        הפעולות המתאים + אנימציה/סרטון
        רלוונטי/ת המסביר/ה כיצד לבצע כל קיפול.
      </p>
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

// רכיב DesignLanguage
function DesignLanguage() {
  return (
    <section id="design" className={styles.sectionContainer} dir="rtl">
      <h2 className={styles.sectionTitleBox}>שפה עיצובית</h2>
      <p className={styles.textBlock}>
        האפליקציה שואפת להפוך
        <br />
        את אמנות האוריגמי לחוויה
        <br />
        עכשווית, נגישה ומרגשת.
        <br />
        העיצוב הגרפי הוא כלי
        <br />
        מרכזי בהעברת הערכים
        <br />
        האלה: שילוב בין מסורת
        <br />
        ודייקן לבין חדשנות, רוגע
        <br />
        והתפתחות אישית.
        <br />
        בעזרת שפה חזותית נקייה,
        <br />
        צבעוניות רגועה ואלמנטים
        <br />
        יפניים, אנו יוצרים חיבור
        <br />
        בין עולם האוריגמי הקלאסי
        <br />
        לבין סביבה דיגיטלית
        <br />
        עכשווית שמעודדת סבלנות,
        <br />
        קהילה ויצירה.
      </p>
    </section>
  );
}

// רכיב References
function References() {
  const references = [
    { title: "יפן", items: "פשטות, איזון, וחיבור לטבע." },
    { title: "מינימליזם", items: "שימוש בחלל ריק, קווים עדינים וצבעוניות מאופקת המדגישה את התוכן ולא משתלטת עליו." },
    { title: "תרבות הפנאי ומלאכות ישנות", items: "עבודות יד, המעבירות את רעיון היצירה האישית והמדיטטיבית." },
    { title: "פיתוח עצמי וקידום אישי", items: "הדגשת התהליך ולא רק התוצאה, כל קיפול הוא צעד בלמידה ובהתפתחות." },
  ];

  return (
    <section id="references" className={styles.sectionContainer} dir="rtl">
      <h2 className={styles.sectionTitleLine}>ר פ ר נ ס י ם</h2>
      <div className={styles.twoColumnGrid}>
        {references.map((ref, index) => (
          <React.Fragment key={index}>
            <div className={styles.gridItemRight}>
              <strong>{ref.title}</strong>
            </div>
            <div className={styles.gridItemLeft}>
              {ref.items}
            </div>
          </React.Fragment>
        ))}
      </div>
      <p className={styles.summaryBlock}>
        יצאנו לחקר מתוך חשיבה על עולמות של
        <br />
        תרבות הפנאי, הזרם של מלאכות ישנות
        <br />
        לתרבות, לקחנו השראה מתוך התרבות
        <br />
        היפנית ומעיצוב מינימליסטי מתוך מחשבה
        <br />
        על חידוש מסורת ישנה וליצור שפה
        <br />
        עיצובית שהיא מודרנית. אנחנו תופסים
        <br />
        מהמשתמשים אנשים חושבים ועצמאיים
        <br />
        שאוהבים את הנוסטלגיה ובאותה נשימה
        <br />
        נלהבים מהחדשנות ונתנו את האופציה
        <br />
        של שימוש עזר בAI.
      </p>
    </section>
  );
}

// רכיב DesignComponents
function DesignComponents() {
  const components = [
    { title: "עיצוב מינימליסטי", items: "הכחול בא להעביר תחושת חדשנות, מתוך המלאכה אנחנו יוצרים משהו טרנדי. ליצור מרחב של שקט והתפתחות בתוך סט אפ שנותן תחושת שייכות וחדשנות, קווים פשוטים ונקיים." },
    { title: "איורים", items: "איורי אוריגמי פשוטים." },
    { title: "לוגו", items: "טיפוגרפי, שם המוצר." },
  ];

  return (
    <section id="components" className={styles.sectionContainer} dir="rtl">
      <h2 className={styles.sectionTitleLine}>ר כ י ב י ם</h2>
      <div className={styles.twoColumnGrid}>
        {components.map((comp, index) => (
          <React.Fragment key={index}>
            <div className={styles.gridItemRight}>
              <strong>{comp.title}</strong>
            </div>
            <div className={styles.gridItemLeft}>
              {comp.items}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

// רכיב Technology
function Technology() {
  return (
    <section id="tech" className={styles.sectionContainer} dir="rtl">
      <h2 className={styles.sectionTitleBox}>טכנולוגיה</h2>
      <p className={styles.textBlock}>
        הדאטה שאיתו נעבוד יהיה
        <br />
        רשימת לומדים
        <br />
        (משתמשים), דגמי אוריגמי
        <br />
        ושלבים ללמידה ותרגול
        <br />
        ומיומנות קיפול. בנוסף
        <br />
        נשתמש במיומנויות קיפול
        <br />
        ותרגילים כדי לעקוב אחרי
        <br />
        ההתקדמות של
        <br />
        כל משתמש.
      </p>
    </section>
  );
}

// רכיב Personalization
function Personalization() {
  return (
    <section id="personalization" className={styles.sectionContainer} dir="rtl">
      <h2 className={styles.sectionTitleBox}>מערכת התאמה אישית</h2>
      <p className={`${styles.textBlock} ${styles.textAlignRight} ${styles.maxWidthLg}`}>
        נצטרך לממש אלגוריתם
        מורכב שתפקידו לבנות
        מסלול למידה אופטימלי
        לכל משתמש. האלגוריתם
        יזהה את המיומנויות שבהן
        המשתמש חלש, או
        מיומנויות שבהן
        ירידה בשליטה על בסיס
        ציון ותאריך הלימוד
        האחרון, וישבץ באופן דינמי
        דגמי אוריגמי, או משפטי
        תרגול ממוקדים (למשל:
        תרגל את קיפול העמק)
        שמטרתם לחזק בדיוק את
        אותן המיומנויות החלשות,
        תוך הבטחה שהמשתמש
        עומד בדרישות הקדם של
        מיומנויות חדשות
        שנלמדות.
      </p>
    </section>
  );
}

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
        <Image src="/crane.png" alt="Origami crane" width={300} height={200} style={{width: '100%', height: 'auto'}} />
      </div>
    </section>
  );
}

// רכיב The_Team
function The_Team() {
  const designTeam = [
    { name: "אניה רובינשטיין", role: "כתיבה" },
    { name: "שחר בן שמואל", role: "חווית UX" },
    { name: "רומי באוך", role: "טיפוגרפיה" },
    { name: "אביה דרווין", role: "סידור וניהול הפרויקט" },
  ];
  const devTeam = [
    { name: "יונתן גן", role: "פרונט" },
    { name: "נדב נבון", role: "בק אנד" },
    { name: "יובל רוזנטל", role: "פול סטאק" },
  ];
  const consultants = [
    { name: "אילן גריבי", role: "אמן אוריגמי ומעצב, מייסד-שותף ומנכ\"ל ארגון \"אוריגמישראל\"" },
    { name: "פרופ' אביב גודז'ין", role: "ראיה ממוחשבת" },
  ];

  return (
    <section id="team" className={styles.sectionContainer} dir="rtl">
      <h2 className={styles.sectionTitleBox}>צוות המוצר</h2>
      
      <h3 className={styles.sectionSubTitleLine}>
        צוות העיצוב
      </h3>
      <div className={styles.twoColumnGrid}>
        {designTeam.map((member, index) => (
          <React.Fragment key={index}>
            <div className={styles.gridItemRight}>{member.name}</div>
            <div className={styles.gridItemLeft}>{member.role}</div>
          </React.Fragment>
        ))}
      </div>

      <h3 className={styles.sectionSubTitleLine}>
        צוות התכנות
      </h3>
      <div className={styles.twoColumnGrid}>
        {devTeam.map((member, index) => (
          <React.Fragment key={index}>
            <div className={styles.gridItemRight}>{member.name}</div>
            <div className={styles.gridItemLeft}>{member.role}</div>
          </React.Fragment>
        ))}
      </div>

      <h3 className={styles.sectionSubTitleLine}>
        יעוצים<br/>חיצוניים
      </h3>
      <div className={styles.twoColumnGrid}>
        {consultants.map((member, index) => (
          <React.Fragment key={index}>
            <div className={styles.gridItemRight}>{member.name}</div>
            <div className={styles.gridItemLeft}>{member.role}</div>
          </React.Fragment>
        ))}
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
        <The_Team />
        <About />
        <CoreValues />
        <Categories />
        <Background />
        <MarketApps />
        <TargetAudience />
        <MoreInfo />
        <ContentStrategy />
        <DesignLanguage />
        <References />
        <DesignComponents />
        <Technology />
        <Personalization />
        <Challenges />
        <Footer />
      </main>
    </>
  );
}