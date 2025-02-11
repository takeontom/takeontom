import pfizerLogo from "/public/images/portfolio/pfizer.png";
import oxfamLogo from "/public/images/portfolio/oxfam.png";
import theDeveloperSocietyLogo from "/public/images/portfolio/the-developer-society.png";
import pepsiLogo from "/public/images/portfolio/pepsi.png";
import brotherLogo from "/public/images/portfolio/brother.png";
import compassionExperienceLogo from "/public/images/portfolio/compassion-experience.png";
import churchOfEnglandLogo from "/public/images/portfolio/church-of-england.png";
import corporateRewardsLogo from "/public/images/portfolio/corporate-rewards.png";
import civicusLogo from "/public/images/portfolio/civicus.png";
import tailsLogo from "/public/images/portfolio/tails.png";
import lumosLogo from "/public/images/portfolio/lumos.png";
import itvLogo from "/public/images/portfolio/itv.png";
import childrensSocietyLogo from "/public/images/portfolio/childrens-society.png";
import datelineLogo from "/public/images/portfolio/dateline.png";
import protecInnovationsLogo from "/public/images/portfolio/protec-innovations.png";
import hmCourtsTribunalsServiceLogo from "/public/images/portfolio/hm-courts-tribunals-service.png";
import connectCashlessParkingLogo from "/public/images/portfolio/connect-cashless-parking.png";
import theKeyLogo from "/public/images/portfolio/the-key.png";
import goodTechTomLogo from "/public/images/portfolio/good-tech-tom-logo.png";
import brskLogo from "/public/images/portfolio/brsk-logo.png";
import { StaticImageData } from "next/image";

interface PortfolioItem {
  name: string;
  logo: StaticImageData;
  display: boolean;
  desc?: string;
  urls?: string[];
}

const fullPortfolio: PortfolioItem[] = [
  {
    name: "Brsk",
    logo: brskLogo,
    display: true,
    desc: `Lead developer on the Fibre Network and Installation systems for
          the **UK's 3rd largest fibre broadband provider**, transitioned to a Hexagonal
          / Domain Driven Design architecture for an estimated **50% boost in dev
          efficiency**.`,
  },
  {
    name: "Good Tech Tom",
    logo: goodTechTomLogo,
    display: true,
    desc: `Leading **impactful, ethical and meaningful change** for good through
          the smart and focussed use of tech. Good Tech Tom is my way of helping the
          world become a better place.`,
  },
  {
    name: "The Key",
    logo: theKeyLogo,
    display: true,
    desc: `**Reshaped, modernised and led** the development, design and QA teams at The
          Key as we developed mission critical software **guiding over 50% of schools in
          the country**.`,
  },
  {
    name: "Pfizer",
    logo: pfizerLogo,
    display: true,
    desc: `**Led an agile team of developers and data scientists** in building a
          **cutting edge big-data ETL platform** for one of the world's top 3
          pharmaceutical companies.`,
  },
  {
    name: "Oxfam",
    logo: oxfamLogo,
    display: true,
    desc: `Developed "Act" - **Oxfam's international campaigning hub** for raising
          awareness and driving action on global events.`,
  },
  {
    name: "The Developer Society",
    logo: theDeveloperSocietyLogo,
    display: true,
    desc: `Helped the lovely people at Dev make the world better by introducing Test
          Driven Development and team focussed development processes... and ate too many
          doughnuts. 🍩`,
  },
  {
    name: "Pepsi",
    logo: pepsiLogo,
    display: true,
    desc: `**Lead Developer** on an advanced and highly regarded reporting tool
          for Pepsi's ground breaking multi-million pound "Max-It for a Million"
          marketing campaign.`,
  },
  {
    name: "Brother",
    logo: brotherLogo,
    display: true,
    desc: `As **Product Manager**, designed, coordinated and oversaw development
          of Brother UK's staff training and development portal.`,
  },
  {
    name: "The Compassion Experience UK",
    logo: compassionExperienceLogo,
    display: true,
    desc: `As **Lead Developer**, created the online presence and booking portal
          for this powerful educational experience.`,
  },
  {
    name: "The Church of England",
    logo: churchOfEnglandLogo,
    display: true,
    desc: `Created the **official mobile first e-learning site** to help
          encourage better safeguarding practices within the Church of England.`,
  },
  {
    name: "Corporate Rewards",
    logo: corporateRewardsLogo,
    display: true,
    urls: ["https://www.corporaterewards.co.uk/"],
    desc: `As **Product Manager**, oversaw and coordinated the development of
          performance reward websites for major names such as Microsoft, HP &
          Samsung.\n\n**Sourced a new development team and drastically modernised the
          technology** behind the company's services.`,
  },
  {
    name: "Civicus Monitor",
    logo: civicusLogo,
    display: true,
    desc: `Developed high profile website to track and increase awareness of
          **civic freedom and repression around the world**.`,
    urls: ["https://monitor.civicus.org/"],
  },
  {
    name: "tails.com",
    logo: tailsLogo,
    display: true,
    desc: `As **full-stack developer**, optimised the signup funnel for this
          leading pet nutrition company. Worked with the management team to
          **showcase and implement development best practices** throughout the
          team.`,
  },
  {
    name: "Lumos",
    logo: lumosLogo,
    display: true,
    desc: `Implemented payment and SalesForce integrations for **JK Rowling's
          children charity**, Lumos.`,
  },
  {
    name: "ITV",
    logo: itvLogo,
    display: true,
    desc: `Created internal admin system and public facing Web integrations
          for a **flagship live TV show**.`,
  },
  {
    name: "The Children's Society",
    logo: childrensSocietyLogo,
    display: true,
    desc: `Invited to provide training to regional reps on network marketing
          and ways of communicating effectively with small businesses.`,
  },
  {
    name: "Dateline",
    logo: datelineLogo,
    display: true,
    urls: ["http://dateline.co.uk/"],
    desc: `**Lead Developer** for the successful and complete redevelopment of
          Dateline, the UK's leading online dating service.`,
  },
  {
    name: "Protec Innovations",
    logo: protecInnovationsLogo,
    display: true,
    desc: `As **Product Manager**, I **recruited and managed a 6 person development
          team** building the ambitious Phase4 project which radically improves the
          aftersales customer service industry.`,
  },
  {
    name: "HM Courts & Tribunals Service",
    logo: hmCourtsTribunalsServiceLogo,
    display: true,
    desc: `As **Lead Developer**, designed, developed & managed core database
          for the court's liquor licensing modernisation process.`,
  },
  {
    name: "Connect Cashless Parking",
    logo: connectCashlessParkingLogo,
    display: true,
    desc: `Developed the customer facing website and comprehensive reporting
          system for this **national SMS based car parking solution**.`,
  },
];

export default fullPortfolio;
