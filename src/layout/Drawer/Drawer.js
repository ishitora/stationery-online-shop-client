import React from 'react';
import Drawer from '@material-ui/core/Drawer';
function DrawerComponent() {
  return (
    <Drawer variant='persistent' anchor='left' open={open}>
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
