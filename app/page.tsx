import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.bg}></div>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Tom Smith</h1>
          <p className={styles.subTitle}>Senior Full Stack Developer</p>
          <address className={styles.contactLinks}>
            <a href="mailto:hey@takeontom.com">Email</a>
            <a
              href="https://uk.linkedin.com/in/takeontom"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/takeontom/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </address>
        </header>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
