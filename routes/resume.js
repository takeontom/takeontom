const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const experience = [
    {
      company: 'tails.com',
      position: 'Full Stack Web Developer (contract)',
      timeperiod: 'Nov 2017 - current',
      description: [
        [
          `Improved signup process for this revolutionary pet nutrition
          company.`,
          ['Flask', 'HTML5', 'CSS/LESS', 'JavaScript', 'JQuery'],
        ],
      ],
    },
    {
      company: 'The Developer Society (formally Blanc)',
      position: 'Senior Web Developer (contract)',
      timeperiod: 'Sep 2016 - Jun 2017',
      description: [
        [
          `Developed "Act", Oxfam's international hub for raising
          awareness and promoting action around the world.`,
          ['Django', 'HTML5', 'CSS/LESS', 'JavaScript', 'JQuery'],
        ],

        [
          `As Lead Developer, created the online presence and booking
            portal for the Compassion Experience.`,
          ['Django', 'TDD', 'HTML5', 'CSS/LESS', 'JavaScript', 'JQuery'],
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
      description: [
        `Co-created FizzyNova, a digital agency to help SMEs be more successful
          online.`,

        [
          `Designed and built many high quality websites using Django-CMS &
            Drupal.`,
          ['Django-CMS', 'Drupal', 'HTML5', 'CSS/LESS', 'JQuery', 'AWS'],
        ],
      ],
    },
    {
      company: 'Corporate Rewards',
      position: 'Product Manager',
      timeperiod: 'Apr 2013 - Nov 2013',
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
      position: 'Lead Developer / Product Manager',
      timeperiod: 'Jul 2010 - Feb 2013',
      description: [
        [
          `Recruited and managed a 6 person development team building the
            ambitious Phase4 project which radically improved the aftersales
            customer service industry.`,
          ['Management', 'Hiring', 'Scrum Master', 'PHP5', 'AWS'],
        ],
      ],
    },
  ];

  res.render('resume', { experience });
});

module.exports = router;
