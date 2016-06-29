var menubar = require('menubar');
var mb = menubar({'show-dock-icon': true });

mb.on('ready', function ready () {
  console.log('app is ready')
});
