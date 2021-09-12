import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import CategoryMenuPhone from '../CategoryMenuPhone/CategoryMenuPhone';
import WindowTitle from '../../components/WindowTitle/WindowTitle';

import useStyles from './style';

function DrawerComponent(props) {
  const classes = useStyles();
  const { open, setOpen } = props;
  return (
    <Drawer
      variant='persistent'
      anchor='left'
      open={open}
      className={classes.root}>
      <WindowTitle
        onClick={() => {
          setOpen(false);
        }}
      />
      <CategoryMenuPhone />
    </Drawer>
  );
}

export default DrawerComponent;
