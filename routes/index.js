var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  full_portfolio = [
    {
      name: 'ITV',
      logo: 'itv.png',
      display: true,
      desc: `Web integrations for Melinda Messenger's Bingo Night Live
        programme.`,
    },
    {
      name: 'Oxfam',
      logo: 'oxfam.png',
      display: true,
      desc: `Developed Oxfam's "Act" platform, their international hub for
        raising awareness and promoting action.`,
    },
    {
      name: 'Compassion Experience',
      logo: 'compassion-experience.png',
      display: true,
      desc: `Lead developer creating the online presence and online booking
        portal for this powerful educational experience.`,
    },
    {
      name: 'Church of England',
      logo: 'cofe.png',
      display: true,
      desc: `Created mobile first website e-learning site to help encourage
        better safe guarding practices within the Church of England.`,
    },

    {
      name: 'Pepsi',
      logo: 'pepsi.png',
      display: true,
      desc: `Created advanced and highly regarded reporting tool for Pepsi's
        ground breaking "Max-It for a Million" marketing campaign.

        It provided the crucial data on product purchases, engagement levels
        and buying behaviour.`
    },
    {
      name: 'Brother',
      logo: 'brother.png',
      display: true,
      desc: `As Product Manager, designed, coordinated and oversaw development
        of Brother UK's staff training and development portal.`
    },
    {
      name: 'Lumos',
      logo: 'lumos.png',
      display: true,
      desc: `Payment and SalesForce integrations for JK Rowling's children
      charity, Lumos.`
    },
    {
      name: 'Civicus Monitor',
      logo: 'civicus.png',
      display: true,
      desc: `Website to track and increase awareness of civic freedom and
        repression around the world. Makes you wish you live in Sweden.`,
      urls: ['https://monitor.civicus.org/'],
    },
    {
      name: 'Macmillan Cancer Support',
      logo: 'macmillan.png',
    },
    {
      name: 'Land Rights Now',
      logo: 'land-rights-now.png',
    },
    {
      name: 'Childrens Society',
      logo: 'childrens-society.png',
      display: true,
      desc: `Invited to provide training and advise to regional reps on network
        marketing and share my knowledge on communicating to small businesses.`
    },
    {
      name: 'Skills Funding Agency',
      logo: 'sfa.jpg',
      display: true,
      urls: ['https://findapprenticeshiptraining.sfa.bis.gov.uk/'],
      desc: `Delivered an in-depth content audit and review on the SFA's
        Apprenticeship service in preparation for it's public beta phase.

        The service is a GDS Exemplar Service core to the government's
        commitment to get an extra 3 million apprentices employed by 2020.`,
    },
    {
      name: 'Dateline',
      logo: 'dateline.png',
      display: true,
      urls: ['http://dateline.co.uk/'],
      desc: `Lead developer on the successful complete redevelopment of
        Dateline, the UK's leading online dating service.`,
    },
    {
      name: 'mirada',
      logo: 'mirada.png',
      display: true,
      urls: ['https://www.mirada.tv/'],
      desc: `Senior web developer for this multinational PLC. Oversaw the
        rebrand of Youmedia into mirada following its merge with Fresh IT.`
    },
    {
      name: 'Corporate Rewards',
      logo: 'corporate-rewards.png',
      display: true,
      urls: ['https://www.corporaterewards.co.uk/'],
      desc: `Oversaw the development of performance reward websites for big
        names such as Microsoft, HP & Samsung.

        Sourced a new development team and drastically modernised the
        technology behind the company's service.`
    },
    {
      name: 'TechPro',
      logo: 'techpro.png',
    },
    {
      name: 'FizzyNova',
      logo: 'fizzynova.png',
    },
    {
      name: 'Phil Day Sports',
      logo: 'phil-day-sports.png',
    },
    {
      name: 'Nuneaton & Bedworth Leisure Society',
      logo: 'nblt.png',
    },
    {
      name: 'Business Biscotti',
      logo: 'business-biscotti.png',
    },
    {
      name: 'BBC',
      logo: 'bbc.png',
    },
    {
      name: 'Phase4',
    },
    {
      name: 'Protec Innovations',
      logo: 'protec-innovations.png',
      display: true,
      desc: `As Product Manage I grew and managed 6 person development team to
        build the ambitious Phase4 project which radically improves the
        aftersales customer service industry.`,
    },
    {
      name: 'D&J Henry',
      logo: 'dj-henry.png',
    },
    {
      name: 'The Developer Society',
      logo: 'dev2.png',
      display: true,
      desc: `Worked with the lovely people at Dev to introduced Test Driven
        Development, team focussed development processes, trained the project
        management team on development flows and ate too many doughnuts. 🍩`,
    },
    {
      name: 'HM Courts & Tribunals Service',
      logo: 'magistrates-court.jpg',
      display: true,
      desc: `Designed, developed & managed core database for the court's
        liquor licensing modernisation process.`,
    },
    {
      name: 'Connect Cashless Parking',
      logo: 'connect-cashless-parking.png',
      display: true,
      desc: `Customer facing website and comprehensive management reporting
        framework`,
    },
    {
      name: 'Rubix Consulting',
      logo: 'rubix-consulting.png',
    },
    {
      name: 'Citizens Advice Bureau',
      logo: 'cab.png',
      display: true,
      desc: ``,
    },
    {
      name: 'CMA Video',
      logo: 'cma-video.png',
    },
    {
      name: 'FORCE',
      logo: 'force.png',
      display: true,
      desc: `Digital media advisor to this well known construction trade forum,
        advising on social media and digital strategy.`,
    },
  ]

  const portfolio = full_portfolio.filter(item =>
    item.desc && item.logo && item.display);


  res.render('index', { title: 'Hello.', portfolio });
});

module.exports = router;
