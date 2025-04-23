import React from "react";
import { ContextMenuPortal } from "./context-menu-portal";

import "./context-menu.scss";

export const ContextMenu = ({ contextMenuOpen, contextMenuPOS, setContextMenuOpen, setContextMenuPOS }) => {

  return (
    <ContextMenuPortal
      x={contextMenuPOS.x}
      y={contextMenuPOS.y}
      visible={contextMenuOpen}
      portal
    >
      <div className="context-menu-item-wrapper">
        <div className="context-menu-item">Top level
          <div className="context-submenu">
              <div
                className="context-submenu-item"
              >
                2nd Lvl
              </div>
              <div
                className="context-submenu-item"
              >
                2nd Lvl
              </div>
          </div>
        </div>
      </div>
    </ContextMenuPortal>
  );
}

