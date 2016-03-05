import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

let primary = '#004e66';
let secondary = '#ff5f2e';

let theme = getMuiTheme({
  palette: {
    accent1Color:           secondary,
    accent2Color:           '#f5f5f5',
    accent3Color:           '#9e9e9e',
    alternateTextColor:     '#ffffff',
    borderColor:            '#e0e0e0',
    canvasColor:            '#ffffff',
    clockCircleColor:       'rgba(0, 0, 0, 0.07)',
    disabledColor:          'rgba(0, 0, 0, 0.3)',
    pickerHeaderColor:      '#00bcd4',
    primary1Color:          primary,
    primary2Color:          '#0097a7',
    primary3Color:          '#bdbdbd',
    shadowColor:            'rgba(0, 0, 0, 1)',
    textColor:              'rgba(0, 0, 0, 0.87)'
  }
});

export default theme;


// yellow: #FFBC42
// dark pink: #D81159
// plum: #8F2D56
// green: #218380
