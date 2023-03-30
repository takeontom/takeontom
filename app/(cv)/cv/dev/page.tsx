import Roles, { IRole } from "@/data/cv";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styles from "./DevPage.module.scss";

export default function Page() {
  return (
    <main className={styles.DevPage}>
      <div className={styles.Main}>
        <header className={styles.Header}>
          <h1 className={styles.Name}>Tom Smith</h1>
          <p className={styles.TagLine}>Senior Full Stack Developer</p>
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
        <h2>Contact details</h2>
      </aside>
    </main>
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
    <li>
      {role.positions.map((p, k) => (
        <span key={k} className={styles.RolePosition}>
          {p}
        </span>
      ))}{" "}
      - {role.name} ({role.start} - {role.end})
    </li>
  );
}
