import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      '&#home': {
        paddingTop: '0', //用id覆蓋樣式 使首頁不會有上邊距
      },
    },
  };
});
export default useStyles;
