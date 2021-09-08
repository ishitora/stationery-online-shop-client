import useStyles from './style';

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      Copyright© 2021 點擊查看Github:
      <a
        href='https://github.com/ishitora/stationery-online-shop-client'
        target='_blank'
        rel='noreferrer'>
        ishitora
      </a>
    </footer>
  );
}

export default Footer;
