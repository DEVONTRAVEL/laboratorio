import React from "react";

import NavHeader from "./NavHeader";
import Menu from "./Menu/index";
import ContextMenuProvider from "./Menu/ContextMenu";

interface Props {
  alterMiniNavbar(): void;
  activeMiniNavbar: boolean;
}

function SlideBar({ alterMiniNavbar, activeMiniNavbar }: Props) {
  return (
    <nav className="navbar-default navbar-static-side" role="navigation">
      <div className="sidebar-collapse">
        <ul className="nav metismenu" id="side-menu">
          <NavHeader />
          <ContextMenuProvider>
            <Menu
              alterMiniNavbar={alterMiniNavbar}
              activeMiniNavbar={activeMiniNavbar}
            />
          </ContextMenuProvider>
        </ul>
      </div>
    </nav>
  );
}

export default SlideBar;
