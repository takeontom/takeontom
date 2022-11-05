import styles from "./portfolio-item.module.scss";

interface PortfolioItemProps {
  name: string;
  logo: string;
  children: React.ReactNode;
}

export default function PortfolioItem(portfolio: PortfolioItemProps) {
  return (
    <div className={styles.portfolioItem}>
      <div className={styles.logo}></div>
      <div className={styles.info}>
        <h3 className={styles.name}>{portfolio.name}</h3>
        {portfolio.children}
      </div>
    </div>
  );
}
