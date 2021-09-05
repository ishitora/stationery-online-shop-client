import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#f44336', dark: '#ba000d', light: '#ff7961' },
    secondary: { main: '#2b4470', dark: '#001e44', light: '#6db1ff' },
    background: { main: '#FFF' },
    error: { main: '#FF0000' },
    logoColor: { main: '#A68C69', dark: '#765f3e', light: '#d8bc97' },
  },
  breakpoints: {
    values: {
      sm: 576,
      xl: 1200,
    },
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
});

export default theme;
