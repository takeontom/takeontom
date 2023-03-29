import styles from "./Portfolio.module.scss";

import PortfolioItem from "../PortfolioItem";
import fullPortfolio from "../../data/portfolio";

export default function Portfolio() {
  return (
    <div className={styles.portfolioItems}>
      {fullPortfolio
        .filter((item) => item.desc && item.logo && item.display)
        .map((item) => (
          <PortfolioItem key={item.name} name={item.name} logo={item.logo}>
            <p>{item.desc}</p>
          </PortfolioItem>
        ))}

      <article className="portfolio-item">
        <div className="info">
          <h2>... plus a whole load more</h2>
          <div className="item desc">
            <p>
              In addition to working on dozens of other successful projects,
              I&apos;ve advised major charities and trade groups on digital
              strategy, appeared on BBC radio a few times, rebranded a PLC,
              content audited an exemplar GDS service, been a <em>fearsome</em>
              cake judge at baking competitions and was a semi-pro gamer...
              unfortunately, before that sort of thing was cool.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
