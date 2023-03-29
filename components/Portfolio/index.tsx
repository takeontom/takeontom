import styles from "./Portfolio.module.scss";

import PortfolioItem from "../PortfolioItem";
import fullPortfolio from "../../data/portfolio";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Portfolio() {
  return (
    <div className={styles.portfolioItems}>
      {fullPortfolio
        .filter((item) => item.desc && item.logo && item.display)
        .map((item) => (
          <PortfolioItem key={item.name} name={item.name} logo={item.logo}>
            {item.desc && <ReactMarkdown>{item.desc}</ReactMarkdown>}
          </PortfolioItem>
        ))}

      <article className="portfolio-item">
        <div className="info">
          <h2>... plus a whole load more</h2>
          <div className="item desc">
            <p>
              In addition to working on dozens of other successful projects,
              I&apos;ve{" "}
              <strong>advised major charities and trade groups</strong> on
              digital strategy, <strong>appeared on BBC radio</strong> a few
              times, <strong>rebranded a PLC</strong>, content{" "}
              <strong>audited an exemplar GDS service</strong>, been a{" "}
              <strong>fearsome cake judge</strong> at baking competitions and
              was a <strong>semi-pro gamer</strong>... unfortunately, before
              that sort of thing was cool.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
