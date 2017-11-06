const express = require('express');

const router = express.Router();

/* GET home page. */
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
      name: 'Macmillan Cancer Support',
      logo: 'macmillan.png',
    },
    {
      name: 'Land Rights Now',
      logo: 'land-rights-now.png',
    },
    {
      name: "The Children's Society",
      logo: 'childrens-society.png',
      display: true,
      desc: `Invited to provide training to regional reps on network marketing
        and ways of communicating effectively with small businesses.`,
    },
    {
      name: 'Skills Funding Agency',
      logo: 'sfa.jpg',
      display: false,
      urls: ['https://findapprenticeshiptraining.sfa.bis.gov.uk/'],
      desc: `Delivered an in-depth content audit and review of the
        Apprenticeship Service (a GDS Exemplar service), in preparation for
        public beta.`,
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
      name: 'mirada PLC',
      logo: 'mirada.png',
      display: false,
      urls: ['https://www.mirada.tv/'],
      desc: `Senior web developer for this multinational PLC, overseeing the
        rebrand of Yoomedia PLC into mirada PLC following its merge with Fresh
        IT.`,
    },
    {
      name: 'TechPro',
      logo: 'techpro.png',
    },
    {
      name: 'FizzyNova',
      logo: 'fizzynova.png',
      display: false,
      desc: `Technical Director and Co-Founder of this well known West Midlands
        based digital agency.`,
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
      desc: `As Product Manager, I recruited and managed a 6 person development
        team building the ambitious Phase4 project which radically improves the
        aftersales customer service industry.`,
    },
    {
      name: 'D&J Henry',
      logo: 'dj-henry.png',
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
        system for this natinoal SMS based car parking solution.`,
    },
    {
      name: 'Rubix Consulting',
      logo: 'rubix-consulting.png',
    },
    {
      name: 'Citizens Advice Bureau',
      logo: 'cab.png',
      display: false,
      desc: `Consultant on the complete redevelopment of the Stratford Upon
        Avon Citizen Advice Bureau's website.`,
    },
    {
      name: 'CMA Video',
      logo: 'cma-video.png',
    },
    {
      name: 'FORCE',
      logo: 'force.png',
      display: false,
      desc: `Digital media advisor to this influential West Midlands based
        trade group, providing workshops and mentoring on digital strategy.`,
    },
  ];

  const portfolio = fullPortfolio.filter(item =>
    item.desc && item.logo && item.display);


  res.render('index', { title: 'Hello.', portfolio });
});

module.exports = router;
