import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      
      <header className={styles.header}>
        <h2 className={styles.h2}>Welcome to My Website</h2>
        <p className={styles.semiTitle}>
          Feel free to look around, and Explore the different options.
        </p>
      </header>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/duogami" className={styles.navLink}>
              🦢✂️ DuoGami Page 📐🪭
            </Link>
          </li>
          <li>
            <Link href="/tic-tac-toe" className={styles.navLink}>
              ❌ Tic Tac Toe ⭕
            </Link>
          </li>
          <li>
            <Link href="/art" className={styles.navLink}>
              🎨 Art Gallery 🖼️
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src="/huji.svg"
          alt="HUJI Logo"
          width="80"
          height="80"
          priority
        />
        <Image
          className={styles.logo}
          src="/bezalel.svg"
          alt="Bezalel Logo"
          width="80"
          height="80"
          priority
        />
      </div>
      
    </main>
  );
}