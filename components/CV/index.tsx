import { ICV, IRole, ISkills, ISocials } from "@/types";
import QRCode from "react-qr-code";
import {
  PhoneIconLink,
  EmailIconLink,
  LinkedInIconLink,
  GitHubIconLink,
  LinkIconLink,
} from "../IconLink";
import CheckmarkIcon from "@/public/images/icons/checkmark.svg";

import styles from "./CV.module.scss";

interface CVProps {
  cv: ICV;
}

export default function CV({ cv }: CVProps) {
  return (
    <main className={styles.DevPage}>
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
          <ContactLinks socials={cv.socials} />
        </SideBarSection>
        <SideBarSection heading="Skills">
          <SkillsList skills={cv.skills} />
        </SideBarSection>
        <SideBarSection heading="More about me">{cv.about}</SideBarSection>

        <SideBarSection>
          <p>
            View this CV{" "}
            <a href="https://takeontom.com/cv/dev">on my website</a>:
          </p>
          <div className={styles.QRCodeContainer}>
            <QRCode value="https://takeontom.com/cv/dev" />
          </div>
        </SideBarSection>
      </aside>
    </main>
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

function ContactLinks({ socials }: { socials: ISocials }) {
  return (
    <ul className={styles.ContactLinks}>
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

function SkillsList({ skills }: { skills: ISkills }) {
  return (
    <ul className={styles.SkillsList}>
      {skills.map((skillsSet, key) => {
        return (
          <li key={key} className={styles.Skills}>
            <span className={styles.SkillIcon}>
              <CheckmarkIcon />
            </span>
            <span className={styles.SkillsText}>
              {skillsSet.map((s, i) => {
                return (
                  <span className={styles.Skill} key={i}>
                    {s}
                    {i < skillsSet.length - 1 ? ", " : ""}
                  </span>
                );
              })}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function Role({ role }: { role: IRole }) {
  return (
    <article className={styles.Role}>
      <header className={styles.RoleHeader}>
        <div className={styles.RolePositionsContainer}>
          <h2 className={styles.RolePositions}>
            {role.positions.map((p, key) => (
              <span className={styles.RolePosition} key={key}>
                {p}
              </span>
            ))}
          </h2>
          {role.skills && (
            <p className={styles.RoleSkills}>
              {role.skills?.map((s, sk) => (
                <span key={sk} className={styles.RoleSkill}>
                  {s}
                </span>
              ))}
            </p>
          )}
        </div>
        <div className={styles.RoleMeta}>
          <p className={styles.RoleName}>{role.name}</p>
          <p className={styles.RoleDates}>
            {role.contract && <>(contract)</>} {role.start} - {role.end}
          </p>
        </div>
      </header>

      <main className={styles.RoleMain}>
        {role.points?.map((point, key) => {
          return (
            <div key={key} className={styles.RolePoint}>
              {point}
            </div>
          );
        })}
      </main>
    </article>
  );
}

function SummaryRole({ role }: { role: IRole }) {
  return (
    <li className={styles.SummaryRole}>
      <span className={styles.RolePositions}>
        {role.positions.map((p, k) => (
          <span key={k} className={styles.RolePosition}>
            {p}
          </span>
        ))}
      </span>
      <span className={styles.RoleName}>{role.name}</span>
      <span className={styles.RoleDates}>
        {role.start} - {role.end}
      </span>
    </li>
  );
}
