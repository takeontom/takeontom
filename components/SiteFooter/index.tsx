import Link from "next/link";
import styles from "./SiteFooter.module.scss";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <p>© 2013-2022 Take on Tom Ltd</p>
      <p>
        <Link href="/privacy">Privacy policy</Link>
      </p>
    </footer>
  );
}
