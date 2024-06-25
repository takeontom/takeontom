import { ICV } from "@/types";

import styles from "./CV.module.scss";
import QRCodeLink from "./QRCodeLink";
import Role from "./Role";
import SkillsList from "./SkillsList";
import SocialLinks from "./SocialLinks";
import SummaryRole from "./SummaryRole";

interface CVProps {
  cv: ICV;
}

export default function CV({ cv }: CVProps) {
  return (
    <div className={styles.CV}>
      <div className={styles.Main}>
        <header className={styles.Header}>
          <h1 className={styles.Name}>{cv.name}</h1>
          <p className={styles.TagLine}>&nbsp;: {cv.targetPosition}</p>
        </header>

        <p className={styles.Summary}>{cv.summary}</p>
        <section className={styles.DetailedHistory}>
          {cv.roles
            .filter((role) => role.highlight)
            .map((role, key) => (
              <Role key={key} role={role} />
            ))}
          <ul className={styles.SummaryHistory}>
            {cv.roles
              .filter((role) => !role.highlight)
              .map((role, key) => (
                <SummaryRole key={key} role={role} />
              ))}
          </ul>
        </section>
      </div>

      <aside className={styles.SideBar}>
        <SideBarSection heading="Contact details">
          <SocialLinks socials={cv.socials} />
        </SideBarSection>
        <SideBarSection heading="Skills">
          <SkillsList skills={cv.skills} />
        </SideBarSection>
        <SideBarSection heading="More about me">{cv.about}</SideBarSection>

        {cv.slug && (
          <SideBarSection>
            <QRCodeLink href={`https://takeontom.com/cv/${cv.slug}`} />
          </SideBarSection>
        )}
      </aside>
    </div>
  );
}

function SideBarSection(props: {
  heading?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.SideBarSection}>
      {props.heading && <h2>{props.heading}</h2>}
      {props.children}
    </section>
  );
}
