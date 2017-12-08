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
  import {fade} from 'material-ui/utils/colorManipulator';
  import spacing from 'material-ui/styles/spacing';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
   primary1Color: 'black',
   primary2Color: cyan700,
   primary3Color: grey600,
   accent1Color: pinkA200,
   accent2Color: pinkA400,
   accent3Color: pinkA100,
   textColor: 'white',
   secondaryTextColor: fade(fullWhite, 0.7),
   alternateTextColor: 'white',
   canvasColor: '#303030',
   borderColor: fade(fullWhite, 0.3),
   disabledColor: fade(fullWhite, 0.3),
   pickerHeaderColor: fade(fullWhite, 0.12),
   clockCircleColor: fade(fullWhite, 0.12),
 },
  appBar: {
    height:70,
  },
});

ReactDom.render((
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>), document.getElementById('react-app'));
