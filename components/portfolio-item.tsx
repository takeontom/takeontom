import Image, { StaticImageData } from "next/image";
import styles from "./portfolio-item.module.scss";

interface PortfolioItemProps {
  name: string;
  logo: StaticImageData;
  children: React.ReactNode;
}

export default function PortfolioItem(portfolio: PortfolioItemProps) {
  return (
    <div className={styles.portfolioItem}>
      <div className={styles.logo}>
        <Image src={portfolio.logo} alt="" />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{portfolio.name}</h3>
        {portfolio.children}
      </div>
    </div>
  );
}
