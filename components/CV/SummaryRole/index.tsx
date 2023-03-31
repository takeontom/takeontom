import { IRole } from "@/types";
import styles from "./SummaryRole.module.scss";

interface SummaryRoleProps {
  role: IRole;
}

export default function SummaryRole({ role }: SummaryRoleProps) {
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
