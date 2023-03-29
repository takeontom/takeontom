import Link from "next/link";
import ContactLinks from "../ContactLinks";
import styles from "./SiteHeader.module.scss";

export default function SiteHeader() {
  return (
    <header className={styles.siteHeader}>
      <hgroup>
        <h1 className={styles.pageTitle}>
          <Link href="/">Tom Smith</Link>
        </h1>
        <p className={styles.subTitle}>Technical Leader and Senior Developer</p>
      </hgroup>
      <ContactLinks />
    </header>
  );
}
