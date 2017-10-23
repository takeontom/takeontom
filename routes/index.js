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
      desc: `Lead developer to create the online presence and online booking
        portal for this powerful educational experience.`,
    },
    {
      name: 'Church of England',
      logo: 'cofe.png',
      desc: ``,
    },

    {
      name: 'Pepsi',
      logo: 'pepsi.png',
    },
    {
      name: 'Brother',
      logo: 'brother.png',
    },
    {
      name: 'Lumos',
      logo: 'lumos.png',
    },
    {
      name: 'Civicus',
      logo: 'civicus.png',
    },
    {
      name: 'Macmillan Cancer Support',
      logo: 'macmillan.png',
    },
    {
      name: 'Land Rights Now',
      logo: 'land-rights-now.png',
      desc: `
        Aenean sit amet erat quam. Donec rutrum consequat felis, id euismod libero malesuada eget. Vestibulum ac urna vulputate, condimentum ligula eget, ullamcorper turpis.

        Aenean sit amet erat quam. Donec rutrum consequat felis, id euismod libero malesuada eget. Vestibulum ac urna vulputate, condimentum ligula eget, ullamcorper turpis.

        Aenean sit amet erat quam. Donec rutrum consequat felis, id euismod libero malesuada eget. Vestibulum ac urna vulputate, condimentum ligula eget, ullamcorper turpis.
      `,
    },
    {
      name: 'Childrens Society',
      logo: 'childrens-society.png',
    },
    {
      name: 'Skills Funding Agency',
      logo: 'sfa.jpg',
    },
    {
      name: 'Dateline',
      logo: 'dateline.png',
    },
    {
      name: 'mirada',
      logo: 'mirada.png',
    },
    {
      name: 'Corporate Rewards',
      logo: 'corporate-rewards.png',
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
    },
    {
      name: 'D&J Henry',
      logo: 'dj-henry.png',
    },
    {
      name: 'The Developer Society',
    },
    {
      name: 'HM Courts & Tribunals Service',
      logo: 'magistrates-court.jpg',
    },
    {
      name: 'Connect Cashless Parking',
      logo: 'connect-cashless-parking.png',
    },
    {
      name: 'Rubix Consulting',
      logo: 'rubix-consulting.png',
    },
    {
      name: 'Citizens Advice Bureau',
      logo: 'cab.png',
    },
    {
      name: 'CMA Video',
      logo: 'cma-video.png',
    }

  ]


  res.render('index', { title: 'Hello.', portfolio });
});

module.exports = router;
