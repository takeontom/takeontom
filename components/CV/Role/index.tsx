import { IRole } from "@/types";
import styles from "./Role.module.scss";

interface RoleProps {
  role: IRole;
}

export default function Role({ role }: RoleProps) {
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
