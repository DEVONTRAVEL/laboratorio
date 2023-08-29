import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export interface ContextMenuProps {
  stateMenu: any;
  alterarStateMenu: (indice: number) => void;
  verificarUrlAtual: (indice: number, url?: string) => void;
}

interface StateMenuProps {
  indice: number;
  ativo: boolean;
}

export const ContextMenu = createContext<ContextMenuProps>({
  stateMenu: {},
  alterarStateMenu: (indice: number) => {},
  verificarUrlAtual: (indice: number, url?: string) => {},
});

const ContextMenuProvider: React.FC = ({ children }) => {
  const { pathname } = useLocation();
  const [stateMenu, setStateMenu] = useState<StateMenuProps>({
    indice: -1,
    ativo: true,
  });

  const alterarStateMenu = (indice: number) => {
    const ativo = stateMenu.indice === indice ? !stateMenu.ativo : true;
    setStateMenu({ ativo, indice });
  };

  const verificarUrlAtual = (indice: number, url?: string) => {
    if (pathname === url && stateMenu.indice === -1) {
      setTimeout(() => {
        alterarStateMenu(indice);
      }, 1000);
    }
  };

  return (
    <ContextMenu.Provider
      value={{ stateMenu, alterarStateMenu, verificarUrlAtual }}
    >
      {children}
    </ContextMenu.Provider>
  );
};
export default ContextMenuProvider;
