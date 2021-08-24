import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#A68C69', dark: '#765f3e', light: '#d8bc97' },
    background: { main: '#EEEEEE' },
    error: { main: '#FF0000' },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1500,
    },
  },
  typography: {
    fontFamily: ['Noto Sans TC', 'sans-serif'].join(','),
  },
});

export default theme;
