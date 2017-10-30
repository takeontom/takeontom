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

exports.loadingScreen = loadingScreen;
