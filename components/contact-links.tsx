import styles from "./contact-links.module.scss";
import EmailIconLink from "./email-icon-link";
import GitHubIconLink from "./github-icon-link";
import LinkedInIconLink from "./linkedin-icon-link";

export default function ContactLinks() {
  return (
    <address className={styles.contactLinks}>
      <EmailIconLink href="mailto:hey@takeontom.com">Email</EmailIconLink>
      <LinkedInIconLink href="https://uk.linkedin.com/in/takeontom">
        LinkedIn
      </LinkedInIconLink>
      <GitHubIconLink href="https://github.com/takeontom/">
        GitHub
      </GitHubIconLink>
    </address>
  );
}
