const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const experience = [
    {
      company: 'Take on Tom',
      position: 'Freelance developer & consultant',
      timeperiod: 'Oct 2018 - Nov 2019',
      highlight: true,
      description: [
        [
          `Using data science techniques, analysed sales and marketing
          performance of local businesses, found issues and ran projects to
          improve them.`,
          ['Data Sciencee', 'Python', 'Pandas', `Wagtail`, `Django`]
        ],
        [
          `Lead developer for ideaflip.com, a Django based brainstorming app
          for web and tablets.`,
          [`Django`, `MongoDB`, `Node.js`]
        ]
      ]
    },
    {
      company: 'Metacell',
      position: 'Technical Lead (contract)',
      timeperiod: 'Feb 2018 - Aug 2018',
      highlight: true,
      description: [
        [
          `Led an agile team of developers and data scientists in building a
          'big data' ETL platform for Pfizer, one of the world's top 3
          pharmaceutical companies.`,
          ['Agile', 'Architect', 'Big Data'],
        ],
        [
          `Mission critical, high value data processing with no room for error:
          So trained, guided and enforced Test Driven Development practices
          throughout the team.`,
          ['TDD', 'Training'],
        ],
        [
          `Developed high quality & flexible Django based framework to provide
          Metacell with a long term, maintainable & commerically viable
          product.`,
          ['Django', 'Python', 'Oracle', 'Postgres', 'LDAP', 'Box.com'],
        ],
        [
          'Designed and implementated cutting-edge React based frontend.',
          ['UX', 'Design', 'React', 'CSS/LESS', 'HTML5'],
        ],
      ],
    },
    {
      company: 'tails.com',
      position: 'Full Stack Web Developer (contract)',
      timeperiod: 'Nov 2017 - Feb 2018',
      highlight: true,
      description: [
        [
          `Full technical SEO sweep, applying modern techniques such as lazy
          loading images & asynchronous CSS loading. 85% speed improvement on
          key landing pages.`,
          ['SEO', 'Lighthouse', 'Google PageSpeed', 'YSlow'],
        ],
        [
          `Integrated Prismic CMS into key areas of website, with automatic
          setup of A/B testing using Sixpack.`,
          ['Flask', 'Prismic', 'Sixpack'],
        ],
        [
          `Improved On-Site Conversion Rate and Average Revenue Per Order by
          adding ecommerce features and optimising signup process.`,
          ['Flask', 'HTML', 'CSS/LESS', 'JavaScript'],
        ],
      ],
    },
    {
      company: 'The Developer Society (formerly Blanc)',
      position: 'Senior Web Developer (contract)',
      timeperiod: 'Sep 2016 - Jun 2017',
      highlight: true,
      description: [
        [
          `Developed "Act", Oxfam's international hub for raising
          awareness and promoting action around the world.`,
          ['Django', 'HTML5', 'CSS/LESS', 'JavaScript', 'JQuery'],
        ],

        [
          `As Lead Developer, created the online presence and booking
            portal for The Compassion Experience.`,
          [
            'Django', 'TDD', 'HTML5', 'CSS/LESS', 'JavaScript', 'JQuery',
            'Twilio',
          ],
        ],

        [
          `Also worked on projects for The Church of England, Civicus and Lumos
            (JK Rowling's Childrens Charity).`,
          ['Django', 'SalesForce API', 'Training'],
        ],
      ],
    },
    {
      company: 'FizzyNova',
      position: 'Lead Developer / Technical Director',
      timeperiod: 'Nov 2013 - Sep 2016',
      highlight: false,
      description: [
        `Co-created FizzyNova, a digital agency to help SMEs be more successful
          online.`,

        [
          `Designed and built many high quality websites using Django-CMS &
            Drupal.`,
          [
            'Django-CMS', 'Drupal ☹', 'WordPress', 'HTML5', 'CSS/LESS',
            'JQuery', 'AWS',
          ],
        ],
      ],
    },
    {
      company: 'Corporate Rewards',
      position: 'Product Manager',
      timeperiod: 'Apr 2013 - Nov 2013',
      highlight: false,
      description: [
        [
          `Managed and coordinated the development of performance reward
            websites for major names such as Microsoft, HP & Samsung.`,
          ['Management', 'Architect'],
        ],

        [
          `Sourced a new development team and drastically modernised the
            technology behind the company's services.`,
          ['Negotiation', 'Dev sourcing', 'Product Design'],
        ],
      ],
    },
    {
      company: 'Protec Innovations',
      position: 'Lead Developer ➜ Product Manager',
      timeperiod: 'Jul 2010 - Feb 2013',
      highlight: false,
      description: [
        [
          `Recruited and managed a 6 person development team building the
            ambitious Phase4 project which radically improved the aftersales
            customer service industry.`,
          ['Management', 'Hiring', 'Scrum Master', 'PHP5', 'AWS'],
        ],
      ],
    },

    {
      company: 'mirada PLC',
      position: 'Junior ➜ Senior ➜ Lead Web Developer',
      timeperiod: 'Feb 2007 - Jun 2010',
      highlight: false,
    },

    {
      company: 'Hele’s School',
      position: 'ICT Technician',
      timeperiod: 'Apr 2005 - Dec 2006',
      highlight: false,
    },

    {
      company: 'Plymouth District Magistrates’ Court',
      position: 'Database Developer',
      timeperiod: 'Dec 2003 - March 2005',
      highlight: false,
    },

    {
      company: 'Abtech Services',
      position: 'Technical Admin',
      timeperiod: 'Jun 1997 - Dec 2003',
      highlight: false,
    },
  ];

  res.render('resume', { experience });
});

module.exports = router;
