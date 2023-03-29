import styles from "./IconLink.module.scss";
import GitHubIcon from "/public/images/icons/github.svg";
import EnvelopeIcon from "/public/images/icons/envelope.svg";
import LinkedInIcon from "/public/images/icons/linkedin2.svg";

interface IconLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  newTab?: boolean;
}

interface LinkProps {
  href: string;
  children: React.ReactNode;
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

export function GitHubIconLink(link: LinkProps) {
  return (
    <IconLink icon={<GitHubIcon />} href={link.href} newTab={true}>
      {link.children}
    </IconLink>
  );
}

export function EmailIconLink(link: LinkProps) {
  return (
    <IconLink icon={<EnvelopeIcon />} href={link.href}>
      {link.children}
    </IconLink>
  );
}

export function LinkedInIconLink(link: LinkProps) {
  return (
    <IconLink icon={<LinkedInIcon />} href={link.href} newTab={true}>
      {link.children}
    </IconLink>
  );
}
