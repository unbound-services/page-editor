import { useState, useEffect } from "react";

export const useContextMenu = () => {
  const [contextMenuOpen, setContextMenuOpen] = useState(false);
  const [contextMenuPOS, setContextMenuPOS] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleClick = () => setContextMenuOpen(false);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return {
    contextMenuOpen,
    setContextMenuOpen,
    contextMenuPOS,
    setContextMenuPOS,
  };
};
