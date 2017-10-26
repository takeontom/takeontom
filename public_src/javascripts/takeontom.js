var WebFont = require('webfontloader');

const loadingScreen = document.getElementById('loading-screen');

WebFont.load({
  custom: {
    families: ['fontello', 'Source Sans Pro', 'Open Sans'],
    testStrings: {
      'fontello': '\uE800\uE801\uE802\uF300',
    },
  },
  loading: () => loadingScreen.classList = ['on'],
  active: () => {
    loadingScreen.classList = ['off'];
    setTimeout(removeLoadingScreen, 1000);
  },
  fontinactive: (fontFamily) =>
    console.log(`${fontFamily} failed to load in time`),
  inactive: () => {
    console.log('Some fonts failed to load in time.');
    loadingScreen.classList = ['off'];
    setTimeout(removeLoadingScreen, 1000);
  },
  timeout: 3000,
});

function removeLoadingScreen() {
  loadingScreen.remove();
}
