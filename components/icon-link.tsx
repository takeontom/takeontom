import styles from "./icon-link.module.scss";

interface IconLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  newTab?: boolean;
}

export default function IconLink(link: IconLinkProps) {
  if (link.newTab) {
    return (
      <a
        className={styles.iconLink}
        href={link.href}
        target="_blank"
        rel="noreferrer"
      >
        <span className={styles.linkIcon}>{link.icon}</span>
        {link.children}
      </a>
    );
  }
  return (
    <a className={styles.iconLink} href={link.href}>
      <span className={styles.linkIcon}>{link.icon}</span>
      {link.children}
    </a>
  );
}
