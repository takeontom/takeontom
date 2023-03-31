import {
  PhoneIconLink,
  EmailIconLink,
  LinkedInIconLink,
  GitHubIconLink,
  LinkIconLink,
} from "@/components/IconLink";
import { ISocials } from "@/types";
import styles from "./SocialLinks.module.scss";

interface SocialLinksProps {
  socials: ISocials;
}

export default function SocialLinks({ socials }: SocialLinksProps) {
  return (
    <ul className={styles.SocialLinks}>
      {socials.tel && (
        <li className={styles.ContactItem}>
          <PhoneIconLink href={`tel:${socials.tel.international}`}>
            {socials.tel.human}
          </PhoneIconLink>{" "}
        </li>
      )}
      {socials.email && (
        <li className={styles.ContactItem}>
          <EmailIconLink href={`mailto:${socials.email}`}>
            {socials.email}
          </EmailIconLink>
        </li>
      )}
      {socials.linkedin && (
        <li className={styles.ContactItem}>
          <LinkedInIconLink
            href={`https://uk.linkedin.com/in/${socials.linkedin}`}
          >
            {socials.linkedin}
          </LinkedInIconLink>
        </li>
      )}
      {socials.github && (
        <li className={styles.ContactItem}>
          <GitHubIconLink href={`https://github.com/${socials.github}/`}>
            {socials.github}
          </GitHubIconLink>
        </li>
      )}
      {socials.website && (
        <li className={styles.ContactItem}>
          <LinkIconLink href={`https://${socials.website}`}>
            {socials.website}
          </LinkIconLink>
        </li>
      )}
    </ul>
  );
}
