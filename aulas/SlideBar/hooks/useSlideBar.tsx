import { useState } from "react";

export function useSlideBar() {
  const [activeMiniNavbar, setActiveMiniNavbar] = useState(false);

  const alterMiniNavbar = () => {
    setActiveMiniNavbar(!activeMiniNavbar);
  };

  return {
    activeMiniNavbar,
    alterMiniNavbar,
  };
}
