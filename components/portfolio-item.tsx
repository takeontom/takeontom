import Image from "next/image";
import styles from "./portfolio-item.module.scss";

interface PortfolioItemProps {
  name: string;
  logo: string;
  children: React.ReactNode;
}

export default function PortfolioItem(portfolio: PortfolioItemProps) {
  return (
    <div className={styles.portfolioItem}>
      <div className={styles.logo}>
        <Image
          src={`/images/portfolio/${portfolio.logo}`}
          width="100"
          height="100"
          alt={`${portfolio.name} logo`}
          className={styles.logoImage}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{portfolio.name}</h3>
        {portfolio.children}
      </div>
    </div>
  );
}
