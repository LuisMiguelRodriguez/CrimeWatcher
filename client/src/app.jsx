import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';
import { redA700, cyan700, grey600,
  pinkA100, pinkA200, pinkA400,
  fullWhite } from 'material-ui/styles/colors';


import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
   primary1Color: redA700,
   primary2Color: cyan700,
   primary3Color: grey600,
   accent1Color: pinkA200,
   accent2Color: pinkA400,
   accent3Color: pinkA100,
   textColor: fullWhite
 },
  appBar: {
    height:70,
  },
});

ReactDom.render((
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>), document.getElementById('react-app'));
