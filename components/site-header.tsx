import Link from "next/link";
import ContactLinks from "./contact-links";
import styles from "./site-header.module.scss";

export default function SiteHeader() {
  return (
    <header className={styles.siteHeader}>
      <hgroup>
        <h1 className={styles.pageTitle}>
          <Link href="/">Tom Smith</Link>
        </h1>
        <p className={styles.subTitle}>Senior Full Stack Developer</p>
      </hgroup>
      <ContactLinks />
    </header>
  );
}
