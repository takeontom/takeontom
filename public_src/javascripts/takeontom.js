var WebFont = require('webfontloader');

const loadingScreen = document.getElementById('loading-screen');


function startLoadingScreen() {
  loadingScreen.classList = ['on'];
  setTimeout(removeLoadingScreen, 5000);
}

function completeLoadingScreen() {
  loadingScreen.classList = ['off'];
  setTimeout(removeLoadingScreen, 1000);
}

function removeLoadingScreen() {
  loadingScreen.remove();
}

WebFont.load({
  custom: {
    families: ['fontello', 'Source Sans Pro', 'Open Sans'],
    testStrings: {
      'fontello': '\uE800\uE801\uE802\uF300',
    },
  },
  loading: startLoadingScreen,
  active: completeLoadingScreen,
  fontinactive: (fontFamily) =>
    console.log(`${fontFamily} failed to load in time`),
  inactive: () => {
    console.log('Some fonts failed to load in time.');
    loadingScreen.classList = ['off'];
    setTimeout(removeLoadingScreen, 1000);
  },
  timeout: 30000,
});
