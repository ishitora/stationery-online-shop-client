import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#f44336', dark: '#ba000d', light: '#ff7961' },
    secondary: { main: '#2b4470', dark: '#001e44', light: '#6db1ff' },
    background: { main: '#FFF' },
    error: { main: '#FF0000' },
    logoColor: { main: '#c4af9a', dark: '#93806c', light: '#f7e1cb' },
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 960,
    lg: 1200,
    xl: 1920,
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
});

export default theme;
