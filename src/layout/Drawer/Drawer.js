import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CategoryMenuPhone from '../CategoryMenuPhone/CategoryMenuPhone';
import useStyles from './style';
function DrawerComponent(props) {
  const classes = useStyles();
  const { open, setOpen } = props;
  return (
    <Drawer variant='persistent' anchor='left' open={open} className={classes.root}>
      <button
        onClick={() => {
          setOpen(false);
        }}>
        關閉
      </button>
      <CategoryMenuPhone />
    </Drawer>
  );
}

export default DrawerComponent;
