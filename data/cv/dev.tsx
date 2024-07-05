import { ICV } from "@/types";
import shortid from "shortid";

const DevCV: ICV = {
  name: "Tom Smith",
  targetPosition: "Senior Full Stack Developer",
  summary:
    "Experienced, impactful and highly skilled. Delivering top notch projects for over 20 years.",
  about: (
    <>
      <p>
        In addition to delivering dozens of successful projects, I&apos;ve
        designed &amp; 3D printed hydroponics systems 🌱, advised major
        charities &amp; trade groups on digital strategy, mentored young
        developers in partnership with universities, appeared on BBC radio a few
        times and was a <em>fearsome</em> cake judge!
      </p>
      <p>I&apos;m a keen swimmer, nature photographer and snorkeler. 🤿</p>
    </>
  ),
  socials: {
    tel: { international: "+447507707740", human: "07507 707 740" },
    email: "hiya@takeontom.com",
    linkedin: "takeontom",
    github: "takeontom",
    website: "takeontom.com",
  },
  skills: [
    ["Python3", "Django", "Flask", "Rest Framework", "Wagtail"],
    ["Typescript", "React", "Vue"],
    ["Next.js", "Node.js", "Express"],
    ["HTML5", "SCSS"],
    ["Docker", "AWS", "GCP", "Postgres"],
    ["Basic security clearance (Disclosure Scotland)"],
  ],
  roles: [
    {
      name: "Good Tech Tom",
      start: "Sep 2023",
      end: "Jul 2024",
      positions: ["Technical Lead"],
      highlight: true,
      skills: [
        "Python",
        "Django",
        "Typescript",
        "GPT",
        "Sales & Marketing",
        "SEO",
        "Tech for Good",
      ],
      points: [
        <p key={shortid.generate()}>
          Bringing impactful, ethical and meaningful change for good through a
          smart and focussed use of tech.
        </p>,
        <p key={shortid.generate()}>
          Introduced ethical AI to SMEs to boost and optimise their marketing
          and sales activity.
        </p>,
        <p key={shortid.generate()}>
          Created ethically minded, browser based RPG game &amp; engine in pure
          Typescript.
        </p>,
      ],
    },
    {
      name: "The Key",
      start: "Dec 2020",
      end: "Dec 2022",
      positions: [
        "Director of Engineering",
        "Development Manager",
        "Senior Developer",
      ],
      highlight: true,
      skills: [
        "Python",
        "Django",
        "Vue",
        "Mentoring",
        "Best practices",
        "Management",
        "Hiring",
        "ISO27001",
      ],
      points: [
        <p key={shortid.generate()}>
          Led team of 14 devs, designers and QAs in delivering software crucial
          to over 50% of schools in the country.
        </p>,
        <p key={shortid.generate()}>
          Hands on, leading from the front with best practice Python, Django &
          Vue development, transforming troubled, large, legacy, monolith
          codebases into cutting edge SPA services.
        </p>,
        <p key={shortid.generate()}>
          Senior member of the Security Team, driving ISO27001 compliance
          throughout the company.
        </p>,
      ],
    },
    {
      name: "Kaleider / Ideaflip",
      start: "May 2019",
      end: "Nov 2020",
      contract: true,
      positions: ["Lead Developer", "Senior Developer"],
      highlight: true,
      skills: [
        "Python",
        "Django",
        "Vue",
        "Rest Framework",
        "Ecommerce",
        "Stripe",
      ],
      points: [
        <p key={shortid.generate()}>
          Led development effort on &apos;A Portrait Without Borders&apos;, an
          interactive art exhibit, letting members of the public have their
          portrait drawn by AI powered robots.
        </p>,
        <p key={shortid.generate()}>
          Rapid analysis & development cycle for an ambitious cooperative
          whiteboard product to capitalise on sales peak due to Covid lockdown.
        </p>,
        <p key={shortid.generate()}>
          Bespoke online shop and backend workflow using Django and Stripe.
        </p>,
      ],
    },

    {
      name: "Take on Tom Ltd",
      positions: ["Technical Lead"],
      start: "Oct 2018",
      end: "Nov 2019",
      highlight: true,
      skills: ["Data Science", "Python", "Pandas", "Wagtail", "Django"],
      points: [
        <p key={shortid.generate()}>
          Used data science techniques to analyse and improve the sales and
          marketing performance of SMEs.
        </p>,
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
        <p key={shortid.generate()}>
          Led an agile team of developers and data scientists in building a
          &apos;big data&apos; ETL platform for Pfizer, one of the world&apos;s
          top 3 pharmaceutical companies.
        </p>,
        <p key={shortid.generate()}>
          Developed high quality & flexible Django based framework with 100%
          test coverage to provide Metacell with a long term, maintainable &
          commerically viable product with a cutting-edge React based frontend.
        </p>,
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
      // points: [
      //   <p key={shortid.generate()}>
      //     Full technical SEO sweep, applying modern techniques such as lazy
      //     loading images & asynchronous CSS loading. 85% speed improvement on
      //     key landing pages.
      //   </p>,
      //   <p key={shortid.generate()}>
      //     Improved On-Site Conversion Rate and Average Revenue Per Order by
      //     adding ecommerce features and optimising signup process.
      //   </p>,
      // ],
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
        <p key={shortid.generate()}>
          Developed &quot;Act&quot;, Oxfam&apos;s international hub for raising
          awareness and promoting action around the world.
        </p>,
        <p key={shortid.generate()}>
          Senior developer on projects for The Church of England, Civicus and
          Lumos (JK Rowling&apos;s Childrens Charity).
        </p>,
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
        <p key={shortid.generate()}>
          Co-created FizzyNova, a digital agency to help SMEs be more successful
          online.
        </p>,
        <p key={shortid.generate()}>
          Designed and built many high quality websites using Django-CMS &
          Drupal.
        </p>,
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
        <p key={shortid.generate()}>
          Managed and coordinated the development of performance reward websites
          for major names such as Microsoft, HP & Samsung.
        </p>,
        <p key={shortid.generate()}>
          Sourced a new development team and drastically modernised the
          technology behind the company&apos;s services.
        </p>,
      ],
    },
    {
      name: "Protec Innovations",
      positions: ["Product Manager", "Lead Developer"],
      start: "Jul 2010",
      end: "Feb 2013",
      highlight: false,
      skills: ["Management", "Hiring", "Scrum Master", "PHP5", "AWS"],
      points: [
        <p key={shortid.generate()}>
          Recruited and managed a 6 person development team building the
          ambitious Phase4 project which radically improved the aftersales
          customer service industry.
        </p>,
      ],
    },

    {
      name: "mirada PLC",
      positions: ["Lead Web Developer", "Senior", "Junior"],
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
  ],
};

export default DevCV;
