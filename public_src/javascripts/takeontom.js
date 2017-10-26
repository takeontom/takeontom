var WebFont = require('webfontloader');

const loadingScreen = document.getElementById('loading-screen');

WebFont.load({
  custom: {
    families: ['fontello', 'Source Sans Pro', 'Open Sans'],
    testStrings: {
      'fontello': '\uE800\uE801\uE802\uF300',
    },
  },
  loading: function() {
    loadingScreen.classList = ['on'];
  },
  active: function() {
    loadingScreen.classList = ['off'];
    setTimeout(removeLoadingScreen, 1000);
  },
  timeout: 20000,
});

function removeLoadingScreen() {
  loadingScreen.remove();
}
