var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  portfolio = [
    {
      name: 'ITV',
      logo: 'itv.png',
      desc: `Web integrations for Melinda Messenger's Bingo Night Live
        programme.`,
    },
    {
      name: 'Oxfam',
      logo: 'oxfam.png',
      desc: `Developed Oxfam's "Act" platform, their international hub for
        raising awareness and promoting action.`,
    },
    {
      name: 'Compassion Experience',
      logo: 'compassion-experience.png',
      desc: `Lead developer creating the online presence and online booking
        portal for this powerful educational experience.`,
    },
    {
      name: 'Church of England',
      logo: 'cofe.png',
      desc: `Created mobile first website e-learning site to help encourage
        better safe guarding practices within the Church of England.`,
    },

    {
      name: 'Pepsi',
      logo: 'pepsi.png',
      desc: `Created advanced and highly regarded reporting tool for Pepsi's
        ground breaking "Max-It for a Million" marketing campaign.

        It provided the crucial data on product purchases, engagement levels
        and buying behaviour.`
    },
    {
      name: 'Brother',
      logo: 'brother.png',
      desc: `As Product Manager, designed, coordinated and oversaw development
        of Brother UK's staff training and development portal.`
    },
    {
      name: 'Lumos',
      logo: 'lumos.png',
      desc: `Payment and SalesForce integrations for JK Rowling's children
      charity, Lumos.`
    },
    {
      name: 'Civicus Monitor',
      logo: 'civicus.png',
      desc: `Website to track and increase awareness of civic freedom and
        repression around the world. Makes you wish you live in Sweden.`,
      urls: ['https://monitor.civicus.org/'],
    },
    // {
    //   name: 'Macmillan Cancer Support',
    //   logo: 'macmillan.png',
    // },
    // {
    //   name: 'Land Rights Now',
    //   logo: 'land-rights-now.png',
    //   desc: `
    //     Aenean sit amet erat quam. Donec rutrum consequat felis, id euismod libero malesuada eget. Vestibulum ac urna vulputate, condimentum ligula eget, ullamcorper turpis.

    //     Aenean sit amet erat quam. Donec rutrum consequat felis, id euismod libero malesuada eget. Vestibulum ac urna vulputate, condimentum ligula eget, ullamcorper turpis.

    //     Aenean sit amet erat quam. Donec rutrum consequat felis, id euismod libero malesuada eget. Vestibulum ac urna vulputate, condimentum ligula eget, ullamcorper turpis.
    //   `,
    // },
    {
      name: 'Childrens Society',
      logo: 'childrens-society.png',
      desc: `Invited to provide training and advise to regional reps on network
        marketing and share my knowledge on communicating to small businesses.`
    },
    {
      name: 'Skills Funding Agency',
      logo: 'sfa.jpg',
      urls: ['https://findapprenticeshiptraining.sfa.bis.gov.uk/'],
      desc: `Delivered an in-depth content audit and review on the SFA's
      Apprenticeship service in preparation for it's public beta phase.`,
    },
    {
      name: 'Dateline',
      logo: 'dateline.png',
      urls: ['http://dateline.co.uk/'],
      desc: `Lead developer on the successful complete redevelopment of
        Dateline, the UK's leading online dating service.`,
    },
    {
      name: 'mirada',
      logo: 'mirada.png',
      urls: ['https://www.mirada.tv/'],
      desc: `Senior web developer for this multinational PLC. Oversaw the
        rebrand of Youmedia into mirada following its merge with Fresh IT.`
    },
    {
      name: 'Corporate Rewards',
      logo: 'corporate-rewards.png',
      urls: ['https://www.corporaterewards.co.uk/'],
      desc: `Oversaw the development of performance reward websites for big
        names such as Microsoft, HP & Samsung.

        Sourced a new development team and drastically modernised the
        technology behind the company's service.`
    },
    // {
    //   name: 'TechPro',
    //   logo: 'techpro.png',
    // },
    // {
    //   name: 'FizzyNova',
    //   logo: 'fizzynova.png',
    // },
    // {
    //   name: 'Phil Day Sports',
    //   logo: 'phil-day-sports.png',
    // },
    // {
    //   name: 'Nuneaton & Bedworth Leisure Society',
    //   logo: 'nblt.png',
    // },
    // {
    //   name: 'Business Biscotti',
    //   logo: 'business-biscotti.png',
    // },
    // {
    //   name: 'BBC',
    //   logo: 'bbc.png',
    // },
    // {
    //   name: 'Phase4',
    // },
    {
      name: 'Protec Innovations',
      logo: 'protec-innovations.png',
      desc: `As Product Manage I grew and managed 6 person development team to
        build the ambitious Phase4 project which radically improves the
        aftersales customer service industry.`
    },
    // {
    //   name: 'D&J Henry',
    //   logo: 'dj-henry.png',
    // },
    {
      name: 'The Developer Society',
      desc: `Worked with the lovely people at Dev to introduced Test Driven
        Development, team focussed development processes, trained the project
        management team on development flows and ate too many doughnuts. 🍩`
    },
    {
      name: 'HM Courts & Tribunals Service',
      logo: 'magistrates-court.jpg',
      desc: ``
    },
    {
      name: 'Connect Cashless Parking',
      logo: 'connect-cashless-parking.png',
    },
    // {
    //   name: 'Rubix Consulting',
    //   logo: 'rubix-consulting.png',
    // },
    {
      name: 'Citizens Advice Bureau',
      logo: 'cab.png',
    },
    // {
    //   name: 'CMA Video',
    //   logo: 'cma-video.png',
    // }
    {
      name: 'FORCE',
      logo: 'force.png',
    }

  ]


  res.render('index', { title: 'Hello.', portfolio });
});

module.exports = router;
