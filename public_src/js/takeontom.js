/* eslint-env browser */
/* eslint no-console: "off" */

const WebFont = require('webfontloader');

function loadingScreen() {
  const el = document.getElementById('loading-screen');

  this.init = () => {
    if (!el) {
      return false;
    }
    WebFont.load({
      custom: {
        families: ['fontello', 'Source Sans Pro', 'Open Sans'],
        testStrings: {
          fontello: '\uE800\uE801\uE802\uF300',
        },
      },
      loading: this.start,
      active: this.complete,
      fontinactive: fontFamily =>
        console.log(`${fontFamily} failed to load in time`),
      inactive: () => {
        console.log('Some fonts failed to load in time.');
        el.classList = ['off'];
        setTimeout(this.remove, 1000);
      },
      timeout: 30000,
    });
    return true;
  };

  this.start = () => {
    el.classList = ['on'];
    setTimeout(this.remove, 3500);
  };

  this.complete = () => {
    el.classList = ['off'];
    setTimeout(this.remove, 1000);
  };

  this.remove = () => {
    el.remove();
  };

  return this.init();
}

function colourFinder() {
  this.el = document.getElementById('background');
  this.currentColour = 0;
  this.colours = [
    ['#89253e', '#3a6186'],
    ['#2C3E50', '#FD746C'],
    ['#e96443', '#904e95'],
    ['#0B486B', '#F56217'],
    ['#2196f3', '#f44336'],
    ['#f44336', '#2196f3'],
    ['#CB3066', '#16BFFD'],
    ['#A43931', '#1D4350'],
    ['#db36a4', '#f7ff00'],
    ['#C02425', '#F0CB35'],
    ['#403A3E', '#BE5869'],
    ['#fc00ff', '#00dbde'],
    ['#141517', '#6A9113'],
    ['#7b4397', '#dc2430'],
    ['#f83600', '#fe8c00'],
    ['#556270', '#FF6B6B'],
    ['#780206', '#061161'],
    ['#7B920A', '#ADD100'],
    ['#000000', '#53346D'],
    ['#c21500', '#ffc500'],
    ['#FC354C', '#0ABFBC'],
    ['#480048', '#C04848'],
    ['#5f2c82', '#49a09d'],
    ['#4A569D', '#DC2424'],
    ['#232526', '#414345'],
    ['#FF512F', '#F09819'],
    ['#61045F', '#AA076B'],
    ['#e65c00', '#F9D423'],
    ['#ec008c', '#fc6767'],
    ['#1D2671', '#C33764'],
    ['#FC5C7D', '#6A82FB'],
    ['#FC466B', '#3F5EFB'],
    ['#33001b', '#ff0084'],
    ['#ee0979', '#ff6a00'],
  ];

  this.start = () => {
    window.addEventListener('keypress', this.keypress.bind(this));

    let msg = '\n';
    msg += 'Colour picker enabled\n';
    msg += '---------------------\n';
    msg += '\n';
    msg += '< : prev colour\n';
    msg += '> : next colour\n';
    msg += 'r : random colour\n';
    msg += '\n';

    return msg;
  };

  this.keypress = (e) => {
    if (e.code === 'Period') {
      this.next();
    } else if (e.code === 'Comma') {
      this.prev();
    } else if (e.code === 'KeyR') {
      this.random();
    }
  };

  this.next = () => {
    this.currentColour += 1;
    if (this.currentColour > this.colours.length - 1) {
      this.currentColour = 0;
    }
    return this.setColourFromIndex(this.currentColour);
  };

  this.prev = () => {
    this.currentColour -= 1;
    if (this.currentColour < 0) {
      this.currentColour = this.colours.length - 1;
    }
    return this.setColourFromIndex(this.currentColour);
  };

  this.random = () => {
    const c1 = this.makeRandomColour();
    const c2 = this.makeRandomColour();
    this.setColour(c1, c2);
  };

  this.makeRandomColour = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  this.setColour = (c1, c2) => {
    this.el.style.background = `linear-gradient(135deg, ${c1}, ${c2})`;
    console.log(`${c1} ${c2}`);
    return true;
  };

  this.setColourFromIndex = (colourIndex) => {
    const [c1, c2] = this.colours[colourIndex];
    return this.setColour(c1, c2);
  };

  return {
    start: this.start,
    next: this.next,
    prev: this.prev,
    rand: this.rand,
  };
}

exports.loadingScreen = loadingScreen;
exports.colourFinder = colourFinder;
