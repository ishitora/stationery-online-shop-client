import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#A68C69', dark: '#765f3e', light: '#d8bc97' },
    background: { main: '#EEEEEE' },
    error: { main: '#FF0000' },
  },
  breakpoints: {
    values: {
      sm: 576,
      xl: 1200,
    },
  },
  typography: {
    fontFamily: ['Lato', 'Noto Sans TC', 'sans-serif'].join(','),
  },
});

export default theme;
