import { EmailIconLink, LinkedInIconLink, GitHubIconLink } from "../IconLink";
import styles from "./ContactLinks.module.scss";

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
