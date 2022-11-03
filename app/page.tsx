import PortfolioItem from "../components/portfolio-item";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Tom Smith</h1>
        <p className={styles.subTitle}>Senior Full Stack Developer</p>
        <address className={styles.contactLinks}>
          <a href="mailto:hey@takeontom.com">Email</a>
          <a
            href="https://uk.linkedin.com/in/takeontom"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/takeontom/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </address>
      </header>

      <section>
        <h2>Full stack, quality focussed &amp; experienced.</h2>

        <div>
          <ul>
            <li>Python3, Django, Wagtail, DjangoCMS, Flask</li>
            <li>JavaScript, React, VueJS, HTML5, CSS, LESS, SASS</li>
            <li>Node.js, Express</li>
          </ul>
        </div>

        <div>
          <p>
            I&apos;m a UK based developer who&apos;s been making commercially
            successful projects for nearly 20 years.
          </p>
          <p>
            I&apos;m reliable, flexible and a fast learner, who can jump into
            projects at any stage and slot seamlessly into a team.
          </p>
          <p>
            Why not <a href="mailto:hey@takeontom.com">get in touch</a> and see
            if I can help with your project?
          </p>
        </div>
      </section>

      <section>
        <h2>Some of my work</h2>

        <PortfolioItem name="Hello">
          <p>Hi there</p>
        </PortfolioItem>

        <article className="portfolio-item">
          <div className="logo">
            <noscript>
              <img src="/images/portfolio/pfizer.png" alt="Logo for 'Pfizer'" />
            </noscript>
            <img
              data-src="/images/portfolio/pfizer.png"
              alt="Logo for 'Pfizer'"
              src="/images/portfolio/pfizer.png"
              data-loaded="true"
            />
          </div>
          <div className="info">
            <h2>Pfizer</h2>
            <p>
              Led an agile team of developers and data scientists in building a
              cutting edge big-data ETL platform for one of the world&apos;s top
              3 pharmaceutical companies.
            </p>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="logo">
            <noscript>
              <img src="/images/portfolio/oxfam.png" alt="Logo for 'Oxfam'" />
            </noscript>
            <img
              data-src="/images/portfolio/oxfam.png"
              alt="Logo for 'Oxfam'"
              src="/images/portfolio/oxfam.png"
              data-loaded="true"
            />
          </div>
          <div className="info">
            <h2>Oxfam</h2>
            <p>
              Developed "Act" - Oxfam's international hub for raising awareness
              and promoting action for problems around the world.
            </p>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="logo">
            <noscript>
              <img
                src="/images/portfolio/the-developer-society.png"
                alt="Logo for 'The Developer Society'"
              />
            </noscript>
            <img
              data-src="/images/portfolio/the-developer-society.png"
              alt="Logo for 'The Developer Society'"
              src="/images/portfolio/the-developer-society.png"
              data-loaded="true"
            />
          </div>
          <div className="info">
            <h2>The Developer Society</h2>
            <p>
              Consultant to the lovely people at Dev to introduce Test Driven
              Development and team focussed development processes... and ate too
              many doughnuts. 🍩
            </p>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="logo">
            <noscript>
              <img src="/images/portfolio/pepsi.png" alt="Logo for 'Pepsi'" />
            </noscript>
            <img
              data-src="/images/portfolio/pepsi.png"
              alt="Logo for 'Pepsi'"
              src="/images/portfolio/pepsi.png"
              data-loaded="true"
            />
          </div>
          <div className="info">
            <h2>Pepsi</h2>
            <p>
              Lead Developer on an advanced and highly regarded reporting tool
              for Pepsi's ground breaking "Max-It for a Million" marketing
              campaign.
            </p>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="logo">
            <noscript>
              <img
                src="/images/portfolio/brother.png"
                alt="Logo for 'Brother'"
              />
            </noscript>
            <img
              data-src="/images/portfolio/brother.png"
              alt="Logo for 'Brother'"
              src="/images/portfolio/brother.png"
              data-loaded="true"
            />
          </div>
          <div className="info">
            <h2>Brother</h2>
            <p>
              As Product Manager, designed, coordinated and oversaw development
              of Brother UK's staff training and development portal.
            </p>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="logo">
            <noscript>
              <img
                src="/images/portfolio/compassion-experience.png"
                alt="Logo for 'The Compassion Experience UK'"
              />
            </noscript>
            <img
              data-src="/images/portfolio/compassion-experience.png"
              alt="Logo for 'The Compassion Experience UK'"
              src="/images/portfolio/compassion-experience.png"
              data-loaded="true"
            />
          </div>
          <div className="info">
            <h2>The Compassion Experience UK</h2>
            <p>
              As Lead Developer, created the online presence and booking portal
              for this powerful educational experience.
            </p>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="logo">
            <noscript>
              <img
                src="/images/portfolio/church-of-england.png"
                alt="Logo for 'The Church of England'"
              />
            </noscript>
            <img
              data-src="/images/portfolio/church-of-england.png"
              alt="Logo for 'The Church of England'"
              src="/images/portfolio/church-of-england.png"
              data-loaded="true"
            />
          </div>
          <div className="info">
            <h2>The Church of England</h2>
            <p>
              Created the official mobile first e-learning site to help
              encourage better safeguarding practices within the Church of
              England.
            </p>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="logo">
            <noscript>
              <img
                src="/images/portfolio/corporate-rewards.png"
                alt="Logo for 'Corporate Rewards'"
              />
            </noscript>
            <img
              data-src="/images/portfolio/corporate-rewards.png"
              alt="Logo for 'Corporate Rewards'"
              src="/images/portfolio/corporate-rewards.png"
              data-loaded="true"
            />
          </div>
          <div className="info">
            <h2>Corporate Rewards</h2>
            <p>
              As Product Manager, oversaw and coordinated the development of
              performance reward websites for major names such as Microsoft, HP
              &amp; Samsung.
            </p>
            <p>
              {" "}
              Sourced a new development team and drastically modernised the
              technology behind the company's services.
            </p>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="logo">
            <noscript>
              <img
                src="/images/portfolio/civicus.png"
                alt="Logo for 'Civicus Monitor'"
              />
            </noscript>
            <img
              data-src="/images/portfolio/civicus.png"
              alt="Logo for 'Civicus Monitor'"
              src="/images/portfolio/civicus.png"
              data-loaded="true"
            />
          </div>
          <div className="info">
            <h2>Civicus Monitor</h2>
            <p>
              Developed high profile website to track and increase awareness of
              civic freedom and repression around the world.
            </p>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="logo">
            <noscript>
              <img
                src="/images/portfolio/tails.png"
                alt="Logo for 'tails.com'"
              />
            </noscript>
            <img
              data-src="/images/portfolio/tails.png"
              alt="Logo for 'tails.com'"
              src="/images/portfolio/tails.png"
              data-loaded="true"
            />
          </div>
          <div className="info">
            <h2>tails.com</h2>
            <p>
              As full-stack developer, optimised the signup funnel for this
              leading pet nutrition company. Worked with the management team to
              showcase and implement development best practices throughout the
              team.
            </p>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="logo">
            <noscript>
              <img src="/images/portfolio/lumos.png" alt="Logo for 'Lumos'" />
            </noscript>
            <img
              data-src="/images/portfolio/lumos.png"
              alt="Logo for 'Lumos'"
              src="/images/portfolio/lumos.png"
              data-loaded="true"
            />
          </div>
          <div className="info">
            <h2>Lumos</h2>
            <p>
              Implemented payment and SalesForce integrations for JK Rowling's
              children charity, Lumos.
            </p>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="logo">
            <noscript>
              <img src="/images/portfolio/itv.png" alt="Logo for 'ITV'" />
            </noscript>
            <img
              data-src="/images/portfolio/itv.png"
              alt="Logo for 'ITV'"
              src="/images/portfolio/itv.png"
              data-loaded="true"
            />
          </div>
          <div className="info">
            <h2>ITV</h2>
            <p>
              Created internal admin system and public facing Web integrations
              for flagship live TV show.
            </p>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="logo">
            <noscript>
              <img
                src="/images/portfolio/childrens-society.png"
                alt="Logo for 'The Children's Society'"
              />
            </noscript>
            <img
              data-src="/images/portfolio/childrens-society.png"
              alt="Logo for 'The Children's Society'"
              src="/images/portfolio/childrens-society.png"
              data-loaded="true"
            />
          </div>
          <div className="info">
            <h2>The Children's Society</h2>
            <p>
              Invited to provide training to regional reps on network marketing
              and ways of communicating effectively with small businesses.
            </p>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="logo">
            <noscript>
              <img
                src="/images/portfolio/dateline.png"
                alt="Logo for 'Dateline'"
              />
            </noscript>
            <img
              data-src="/images/portfolio/dateline.png"
              alt="Logo for 'Dateline'"
              src="/images/portfolio/dateline.png"
              data-loaded="true"
            />
          </div>
          <div className="info">
            <h2>Dateline</h2>
            <p>
              Lead Developer for the successful and complete redevelopment of
              Dateline, the UK's leading online dating service.
            </p>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="logo">
            <noscript>
              <img
                src="/images/portfolio/protec-innovations.png"
                alt="Logo for 'Protec Innovations'"
              />
            </noscript>
            <img
              data-src="/images/portfolio/protec-innovations.png"
              alt="Logo for 'Protec Innovations'"
              src="/images/portfolio/protec-innovations.png"
              data-loaded="true"
            />
          </div>
          <div className="info">
            <h2>Protec Innovations</h2>
            <p>
              As Product Manager, I recruited and managed a 6 person development
              team building the ambitious Phase4 project which radically
              improves the aftersales customer service industry.
            </p>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="logo">
            <noscript>
              <img
                src="/images/portfolio/hm-courts-tribunals-service.jpg"
                alt="Logo for 'HM Courts &amp; Tribunals Service'"
              />
            </noscript>
            <img
              data-src="/images/portfolio/hm-courts-tribunals-service.jpg"
              alt="Logo for 'HM Courts &amp; Tribunals Service'"
              src="/images/portfolio/hm-courts-tribunals-service.jpg"
              data-loaded="true"
            />
          </div>
          <div className="info">
            <h2>HM Courts &amp; Tribunals Service</h2>
            <p>
              As Lead Developer, designed, developed &amp; managed core database
              for the court's liquor licensing modernisation process.
            </p>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="logo">
            <noscript>
              <img
                src="/images/portfolio/connect-cashless-parking.png"
                alt="Logo for 'Connect Cashless Parking'"
              />
            </noscript>
            <img
              data-src="/images/portfolio/connect-cashless-parking.png"
              alt="Logo for 'Connect Cashless Parking'"
              src="/images/portfolio/connect-cashless-parking.png"
              data-loaded="true"
            />
          </div>
          <div className="info">
            <h2>Connect Cashless Parking</h2>
            <p>
              Developed the customer facing website and comprehensive reporting
              system for this national SMS based car parking solution.
            </p>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="info">
            <h2>... plus a whole load more</h2>
            <div className="item desc">
              <p>
                In addition to working on dozens of other successful projects,
                I've advised major charities and trade groups on digital
                strategy, appeared on BBC radio a few times, rebranded a PLC,
                content audited an exemplar GDS service, been a{" "}
                <em>fearsome</em>
                cake judge at baking competitions and was a semi-pro gamer...
                unfortunately, before that sort of thing was cool.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section>
        <p>
          If you have need of a UK based, high quality and experienced full
          stack developer, then just get in touch:
        </p>

        <address className={styles.contactLinks}>
          <a href="mailto:hey@takeontom.com">Email</a>
          <a
            href="https://uk.linkedin.com/in/takeontom"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/takeontom/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </address>
      </section>
    </main>
  );
}
