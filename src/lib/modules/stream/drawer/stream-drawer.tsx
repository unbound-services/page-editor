import React, { useState } from "preact/compat";
import Drawer from "../../common/drawer/common-drawer";

export const StreamDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
      Select something
    </Drawer>
  );
};
