export interface IRole {
  name: string;
  start: string;
  end: string;
  contract?: boolean;
  positions: string[];
  skills?: string[];
  points?: string[];
  highlight?: boolean;
}

export const Skills: string[][] = [
  ["Python3", "Django", "Flask", "Rest Framework", "Wagtail", "DjangoCMS"],
  ["JavaScript ES6", "Vue", "React", "JQuery"],
  ["Node.js", "Express"],
  ["HTML5", "CSS", "SASS", "LESS"],
  ["Docker", "AWS"],
  ["Basic security clearance (Disclosure Scotland)"],
];

const Roles: IRole[] = [
  {
    name: "The Key",
    start: "Dec 2020",
    end: "Dec 2022",
    positions: [
      "Senior developer",
      "Development manager",
      "Director of Engineering",
    ],
    highlight: true,
    skills: ["Python", "Django", "Vue", "Management", "Hiring", "Strategy"],
    points: [
      `Led team of 15 devs, designers and QAs in delivering software crucial to over
      50% of schools in the country.`,
      `Transitioned product development lifecycle from SCRUM to ShapeUp, mentored and
      actively upskilled development team, oversaw complete infrastructure change from
      monoliths to microservices.`,
      `Hands on bringing best practice development approaches to products and team.`,
    ],
  },
  {
    name: "Ideaflip",
    start: "May 2019",
    end: "Nov 2020",
    contract: true,
    positions: ["Senior developer"],
    highlight: true,
    skills: ["Python", "Django", "Vue", "Rest Framework"],
    points: [
      `Rapid analysis & development cycle for an ambitious cooperative whiteboard
      product to capitalise on sales peak due to Covid lockdown.`,
    ],
  },
  {
    name: "Kaleider",
    start: "Mar 2020",
    end: "Oct 2020",
    contract: true,
    positions: ["Lead developer"],
    highlight: true,
    skills: ["Django", "Vue", "Rest Framework", "Ecommerce", "Stripe"],
    points: [
      `Led development effort on 'A Portrait Without Borders', an
        interactive art exhibit, letting members of the public have their
        portrait drawn by AI powered robots.`,
      "Bespoke online shop and backend workflow using Django and Stripe.",
    ],
  },

  {
    name: "Take on Tom",
    positions: ["Data scientist & consultant"],
    start: "Oct 2018",
    end: "Nov 2019",
    highlight: true,
    skills: ["Data Science", "Python", "Pandas", "Wagtail", "Django"],
    points: [
      `Used data science techniques to analyse and improve the sales and marketing
        performance of SMEs.`,
    ],
  },
  {
    name: "Metacell",
    positions: ["Technical Lead"],
    start: "Feb 2018",
    end: "Aug 2018",
    contract: true,
    highlight: true,
    skills: [
      "Django",
      "Python",
      "Oracle",
      "Postgres",
      "React",
      "Agile",
      "Architect",
      "Big Data",
    ],
    points: [
      `Led an agile team of developers and data scientists in building a
        'big data' ETL platform for Pfizer, one of the world's top 3
        pharmaceutical companies.`,
      `Developed high quality & flexible Django based framework with 100% test coverage
        to provide Metacell with a long term, maintainable & commerically viable
        product with a cutting-edge React based frontend.`,
    ],
  },
  {
    name: "tails.com",
    positions: ["Full Stack Web Developer"],
    start: "Nov 2017",
    end: "Feb 2018",
    contract: true,
    highlight: true,
    skills: ["Flask", "HTML", "CSS/LESS", "JavaScript", "SEO", "Lighthouse"],
    points: [
      `Full technical SEO sweep, applying modern techniques such as lazy
        loading images & asynchronous CSS loading. 85% speed improvement on
        key landing pages.`,
      `Improved On-Site Conversion Rate and Average Revenue Per Order by
        adding ecommerce features and optimising signup process.`,
    ],
  },
  {
    name: "DEV / Blanc",
    positions: ["Senior Web Developer"],
    start: "Sep 2016",
    end: "Jun 2017",
    contract: true,
    highlight: true,
    skills: [
      "Django",
      "HTML5",
      "CSS/LESS",
      "JQuery",
      "SalesForce API",
      "TDD",
      "Twilio",
    ],
    points: [
      `Developed "Act", Oxfam's international hub for raising
        awareness and promoting action around the world.`,
      `Senior developer on projects for The Church of England, Civicus and
        Lumos (JK Rowling's Childrens Charity).`,
    ],
  },
  {
    name: "FizzyNova",
    positions: ["Lead Developer / Technical Director"],
    start: "Nov 2013",
    end: "Sep 2016",
    highlight: false,
    skills: [
      "Django-CMS",
      "Drupal ☹",
      "WordPress",
      "HTML5",
      "CSS/LESS",
      "JQuery",
      "AWS",
    ],
    points: [
      `Co-created FizzyNova, a digital agency to help SMEs be more successful
        online.`,
      `Designed and built many high quality websites using Django-CMS &
          Drupal.`,
    ],
  },
  {
    name: "Corporate Rewards",
    positions: ["Product Manager"],
    start: "Apr 2013",
    end: "Nov 2013",
    highlight: false,
    skills: [
      "Management",
      "Architect",
      "Negotiation",
      "Dev sourcing",
      "Product Design",
    ],
    points: [
      `Managed and coordinated the development of performance reward
          websites for major names such as Microsoft, HP & Samsung.`,
      `Sourced a new development team and drastically modernised the
          technology behind the company's services.`,
    ],
  },
  {
    name: "Protec Innovations",
    positions: ["Lead Developer", "Product Manager"],
    start: "Jul 2010",
    end: "Feb 2013",
    highlight: false,
    skills: ["Management", "Hiring", "Scrum Master", "PHP5", "AWS"],
    points: [
      `Recruited and managed a 6 person development team building the
          ambitious Phase4 project which radically improved the aftersales
          customer service industry.`,
    ],
  },

  {
    name: "mirada PLC",
    positions: ["Junior", "Senior", "Lead Web Developer"],
    start: "Feb 2007",
    end: "Jun 2010",
    highlight: false,
  },

  {
    name: "Hele's School",
    positions: ["ICT Technician"],
    start: "Apr 2005",
    end: "Dec 2006",
    highlight: false,
  },

  {
    name: "Plymouth District Magistrates' Court",
    positions: ["Database Developer"],
    start: "Dec 2003",
    end: "Mar 2005",
    highlight: false,
  },

  {
    name: "Abtech Services",
    positions: ["Technical Admin"],
    start: "Jun 1997",
    end: "Dec 2003",
    highlight: false,
  },
];

export default Roles;
