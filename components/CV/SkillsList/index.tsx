import { ISkills } from "@/types";
import styles from "./SkillsList.module.scss";
import CheckmarkIcon from "@/public/images/icons/checkmark.svg";

interface SkillsListProps {
  skills: ISkills;
}

export default function SkillsList({ skills }: SkillsListProps) {
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
                    <span className={styles.skillLabel}>{s}</span>
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
