const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const fullPortfolio = [
    {
      name: 'Oxfam',
      logo: 'oxfam.png',
      display: true,
      desc: `Developed "Act" - Oxfam's international hub for raising awareness
        and promoting action for problems around the world.`,
    },
    {
      name: 'The Developer Society',
      logo: 'dev2.png',
      display: true,
      desc: `Consultant to the lovely people at Dev to introduce Test Driven
        Development and team focussed development processes... and ate too many
        doughnuts. 🍩`,
    },
    {
      name: 'Pepsi',
      logo: 'pepsi.png',
      display: true,
      desc: `Lead Developer on an advanced and highly regarded reporting tool
        for Pepsi's ground breaking "Max-It for a Million" marketing
        campaign.`,
    },
    {
      name: 'Brother',
      logo: 'brother.png',
      display: true,
      desc: `As Product Manager, designed, coordinated and oversaw development
        of Brother UK's staff training and development portal.`,
    },
    {
      name: 'The Compassion Experience UK',
      logo: 'compassion-experience.png',
      display: true,
      desc: `As Lead Developer, created the online presence and booking portal
        for this powerful educational experience.`,
    },
    {
      name: 'The Church of England',
      logo: 'cofe.png',
      display: true,
      desc: `Created the official mobile first e-learning site to help
        encourage better safeguarding practices within the Church of England.`,
    },
    {
      name: 'Corporate Rewards',
      logo: 'corporate-rewards.png',
      display: true,
      urls: ['https://www.corporaterewards.co.uk/'],
      desc: `As Product Manager, oversaw and coordinated the development of
        performance reward websites for major names such as Microsoft, HP &
        Samsung.

        Sourced a new development team and drastically modernised the
        technology behind the company's services.`,
    },
    {
      name: 'Civicus Monitor',
      logo: 'civicus.png',
      display: true,
      desc: `Developed high profile website to track and increase awareness of
        civic freedom and repression around the world.`,
      urls: ['https://monitor.civicus.org/'],
    },
    {
      name: 'Lumos',
      logo: 'lumos.png',
      display: true,
      desc: `Implemented payment and SalesForce integrations for JK Rowling's
        children charity, Lumos.`,
    },
    {
      name: 'ITV',
      logo: 'itv.png',
      display: true,
      desc: `Created internal admin system and public facing Web integrations
        for flagship live TV show.`,
    },
    {
      name: "The Children's Society",
      logo: 'childrens-society.png',
      display: true,
      desc: `Invited to provide training to regional reps on network marketing
        and ways of communicating effectively with small businesses.`,
    },
    {
      name: 'Dateline',
      logo: 'dateline.png',
      display: true,
      urls: ['http://dateline.co.uk/'],
      desc: `Lead Developer for the successful and complete redevelopment of
        Dateline, the UK's leading online dating service.`,
    },
    {
      name: 'Protec Innovations',
      logo: 'protec-innovations.png',
      display: true,
      desc: `As Product Manager, I recruited and managed a 6 person development
        team building the ambitious Phase4 project which radically improves the
        aftersales customer service industry.`,
    },
    {
      name: 'HM Courts & Tribunals Service',
      logo: 'magistrates-court.jpg',
      display: true,
      desc: `As Lead Developer, designed, developed & managed core database
        for the court's liquor licensing modernisation process.`,
    },
    {
      name: 'Connect Cashless Parking',
      logo: 'connect-cashless-parking.png',
      display: true,
      desc: `Developed the customer facing website and comprehensive reporting
        system for this national SMS based car parking solution.`,
    },
  ];

  const portfolio = fullPortfolio.filter(item =>
    item.desc && item.logo && item.display);


  res.render('index', { title: 'Hello.', portfolio });
});

router.get('/privacy', (req, res) => {
  res.render('privacy');
});

router.get('/resume', (req, res) => {
  const experience = [
    {
      company: 'The Developer Society (formally Blanc)',
      position: 'Senior Web Developer (contract)',
      timeperiod: 'Sep 2016 - Jun 2017',
      description: [
        `Developed "Act", Oxfam's international hub for raising
          awareness and promoting action around the world.`,

        `As Lead Developer, created the online presence and booking
          portal for the Compassion Experience.`,

        `Also worked on projects for The Church of England, Civicus and Lumos
          (JK Rowling's Childrens Charity).`,
      ],
    },
    {
      company: 'FizzyNova',
      position: 'Lead Developer / Technical Director',
      timeperiod: 'Nov 2013 - Sep 2016',
      description: [
        `Co-created FizzyNova, a digital agency to help SMEs be more successful
          online.`,

        `Designed and built many high quality websites using Django-CMS &
          Drupal.`,
      ],
    },
    {
      company: 'Corporate Rewards',
      position: 'Product Manager',
      timeperiod: 'Apr 2013 - Nov 2013',
      description: [
        `Managed and coordinated the development of performance reward websites
          for major names such as Microsoft, HP & Samsung.`,

        `Sourced a new development team and drastically modernised the
          technology behind the company's services.`,
      ],
    },
    {
      company: 'Protec Innovations',
      position: 'Lead Developer / Product Manager',
      timeperiod: 'Jul 2010 - Feb 2013',
      description: [
        `Recruited and managed a 6 person development team building the
          ambitious Phase4 project which radically improved the aftersales
          customer service industry.`,
      ],
    },
    {
      company: 'mirada PLC (formally Yoomedia)',
      position: 'Senior Web Developer (contract)',
      timeperiod: 'Feb 2007 - Jun 2010',
      description: [
        `Created highly regarded reporting system for Pepsi's "Max It For A
          Million" marketing campaign.`,

        `Lead Developer for the total & successful redevelopment of
          Dateline.co.uk.`,
      ],
    },
  ];

  res.render('resume', { experience });
});

module.exports = router;
