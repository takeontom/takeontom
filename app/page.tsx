import EmailIconLink from "../components/email-icon-link";
import GitHubIconLink from "../components/github-icon-link";
import LinkedInIconLink from "../components/linkedin-icon-link";
import PortfolioItem from "../components/portfolio-item";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const fullPortfolio = [
    {
      name: "Pfizer",
      logo: "pfizer.png",
      display: true,
      desc: `Led an agile team of developers and data scientists in building a
        cutting edge big-data ETL platform for one of the world's top 3
        pharmaceutical companies.`,
    },
    {
      name: "Oxfam",
      logo: "oxfam.png",
      display: true,
      desc: `Developed "Act" - Oxfam's international hub for raising awareness
        and promoting action for problems around the world.`,
    },
    {
      name: "The Developer Society",
      logo: "the-developer-society.png",
      display: true,
      desc: `Consultant to the lovely people at Dev to introduce Test Driven
        Development and team focussed development processes... and ate too many
        doughnuts. 🍩`,
    },
    {
      name: "Pepsi",
      logo: "pepsi.png",
      display: true,
      desc: `Lead Developer on an advanced and highly regarded reporting tool
        for Pepsi's ground breaking "Max-It for a Million" marketing
        campaign.`,
    },
    {
      name: "Brother",
      logo: "brother.png",
      display: true,
      desc: `As Product Manager, designed, coordinated and oversaw development
        of Brother UK's staff training and development portal.`,
    },
    {
      name: "The Compassion Experience UK",
      logo: "compassion-experience.png",
      display: true,
      desc: `As Lead Developer, created the online presence and booking portal
        for this powerful educational experience.`,
    },
    {
      name: "The Church of England",
      logo: "church-of-england.png",
      display: true,
      desc: `Created the official mobile first e-learning site to help
        encourage better safeguarding practices within the Church of England.`,
    },
    {
      name: "Corporate Rewards",
      logo: "corporate-rewards.png",
      display: true,
      urls: ["https://www.corporaterewards.co.uk/"],
      desc: `As Product Manager, oversaw and coordinated the development of
        performance reward websites for major names such as Microsoft, HP &
        Samsung.
        Sourced a new development team and drastically modernised the
        technology behind the company's services.`,
    },
    {
      name: "Civicus Monitor",
      logo: "civicus.png",
      display: true,
      desc: `Developed high profile website to track and increase awareness of
        civic freedom and repression around the world.`,
      urls: ["https://monitor.civicus.org/"],
    },
    {
      name: "tails.com",
      logo: "tails.png",
      display: true,
      desc: `As full-stack developer, optimised the signup funnel for this
        leading pet nutrition company. Worked with the management team to
        showcase and implement development best practices throughout the
        team.`,
    },
    {
      name: "Lumos",
      logo: "lumos.png",
      display: true,
      desc: `Implemented payment and SalesForce integrations for JK Rowling's
        children charity, Lumos.`,
    },
    {
      name: "ITV",
      logo: "itv.png",
      display: true,
      desc: `Created internal admin system and public facing Web integrations
        for flagship live TV show.`,
    },
    {
      name: "The Children's Society",
      logo: "childrens-society.png",
      display: true,
      desc: `Invited to provide training to regional reps on network marketing
        and ways of communicating effectively with small businesses.`,
    },
    {
      name: "Dateline",
      logo: "dateline.png",
      display: true,
      urls: ["http://dateline.co.uk/"],
      desc: `Lead Developer for the successful and complete redevelopment of
        Dateline, the UK's leading online dating service.`,
    },
    {
      name: "Protec Innovations",
      logo: "protec-innovations.png",
      display: true,
      desc: `As Product Manager, I recruited and managed a 6 person development
        team building the ambitious Phase4 project which radically improves the
        aftersales customer service industry.`,
    },
    {
      name: "HM Courts & Tribunals Service",
      logo: "hm-courts-tribunals-service.jpg",
      display: true,
      desc: `As Lead Developer, designed, developed & managed core database
        for the court's liquor licensing modernisation process.`,
    },
    {
      name: "Connect Cashless Parking",
      logo: "connect-cashless-parking.png",
      display: true,
      desc: `Developed the customer facing website and comprehensive reporting
        system for this national SMS based car parking solution.`,
    },
  ];

  const portfolio = fullPortfolio.filter(
    (item) => item.desc && item.logo && item.display
  );

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Tom Smith</h1>
        <p className={styles.subTitle}>Senior Full Stack Developer</p>
        <address className={styles.contactLinks}>
          <EmailIconLink href="mailto:hey@takeontom.com">Email</EmailIconLink>
          <LinkedInIconLink href="https://uk.linkedin.com/in/takeontom">
            LinkedIn
          </LinkedInIconLink>
          <GitHubIconLink href="https://github.com/takeontom/">
            GitHub
          </GitHubIconLink>
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

        <div className={styles.portfolioItems}>
          {portfolio.map((item) => (
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
                  content audited an exemplar GDS service, been a{" "}
                  <em>fearsome</em>
                  cake judge at baking competitions and was a semi-pro gamer...
                  unfortunately, before that sort of thing was cool.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section>
        <p>
          If you have need of a UK based, high quality and experienced full
          stack developer, then just get in touch:
        </p>

        <address className={styles.contactLinks}>
          <EmailIconLink href="mailto:hey@takeontom.com">Email</EmailIconLink>
          <LinkedInIconLink href="https://uk.linkedin.com/in/takeontom">
            LinkedIn
          </LinkedInIconLink>
          <GitHubIconLink href="https://github.com/takeontom/">
            GitHub
          </GitHubIconLink>
        </address>
      </section>
    </main>
  );
}
