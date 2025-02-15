import React, { useState } from "react"
import Drawer from "../../common/drawer/common-drawer";

export const StreamDrawer = ({ isOpen = false, setDrawerOpen }) => {
  return (
    <Drawer isOpen={isOpen} onClose={() => setDrawerOpen(false)}>
      Select something
    </Drawer>
  );
};
