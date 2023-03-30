import {
  EmailIconLink,
  GitHubIconLink,
  LinkedInIconLink,
  LinkIconLink,
  PhoneIconLink,
} from "@/components/IconLink";
import Roles, { IRole, Skills } from "@/data/cv";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import QRCode from "react-qr-code";
import styles from "./DevPage.module.scss";

export default function Page() {
  return (
    <main className={styles.DevPage}>
      <div className={styles.Main}>
        <header className={styles.Header}>
          <h1 className={styles.Name}>Tom Smith</h1>
          <p className={styles.TagLine}>&nbsp;: Senior Full Stack Developer</p>
        </header>

        <p className={styles.Summary}>
          Reliable, flexible and highly skilled. Delivering top notch projects
          for over 20 years.
        </p>
        <section className={styles.DetailedHistory}>
          {Roles.filter((role) => role.highlight).map((role, key) => (
            <Role key={key} role={role} />
          ))}
          <ul className={styles.SummaryHistory}>
            {Roles.filter((role) => !role.highlight).map((role, key) => (
              <SummaryRole key={key} role={role} />
            ))}
          </ul>
        </section>
      </div>

      <aside className={styles.SideBar}>
        <SideBarSection heading="Contact details">
          <ContactLinks />
        </SideBarSection>
        <SideBarSection heading="Skills">
          <SkillsList />
        </SideBarSection>
        <SideBarSection heading="More about me">
          <p>
            In addition to delivering dozens of successful projects, I&apos;ve
            advised major charities and trade groups on digital strategy,
            appeared on BBC radio a few times, been a <em>fearsome</em> cake
            judge at baking competitions and was a semi-pro gamer...
            unfortunately, before that sort of thing was cool.
          </p>
          <p>
            I also mentor young developers in partnership with Plymouth
            University.
          </p>
        </SideBarSection>

        <SideBarSection>
          <p>Get the latest version of my CV:</p>
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

function ContactLinks() {
  return (
    <ul className={styles.ContactLinks}>
      <li className={styles.ContactItem}>
        <PhoneIconLink href="tel:+447507707740">07507 707 740</PhoneIconLink>{" "}
      </li>
      <li className={styles.ContactItem}>
        <EmailIconLink href="mailto:hiya@takeontom.com">
          hiya@takeontom.com
        </EmailIconLink>
      </li>
      <li className={styles.ContactItem}>
        <LinkedInIconLink href="https://uk.linkedin.com/in/takeontom">
          takeontom
        </LinkedInIconLink>
      </li>
      <li className={styles.ContactItem}>
        <GitHubIconLink href="https://github.com/takeontom/">
          takeontom
        </GitHubIconLink>{" "}
      </li>
      <li className={styles.ContactItem}>
        <LinkIconLink href="https://takeontom.com">takeontom.com</LinkIconLink>
      </li>
    </ul>
  );
}

function SkillsList() {
  return (
    <ul className={styles.SkillsList}>
      {Skills.map((skills, key) => {
        return (
          <li key={key} className={styles.Skills}>
            {skills.map((s, i) => {
              return (
                <span className={styles.Skill} key={i}>
                  {s}
                  {i < skills.length - 1 ? ", " : ""}
                </span>
              );
            })}
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
              <ReactMarkdown>{point}</ReactMarkdown>
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
      {role.positions.map((p, k) => (
        <span key={k} className={styles.RolePosition}>
          {p}
        </span>
      ))}{" "}
      - {role.name} ({role.start} - {role.end})
    </li>
  );
}
