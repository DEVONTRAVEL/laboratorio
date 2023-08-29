import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContextPermissao } from "hooks/ContextPermissao";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { removeToken } from "_services/auth";
import { ContextMenu } from "./ContextMenu";
import { MenuSpan } from "./estilo";
import ItemMenu from "./ItemMenu";

interface Props {
  alterMiniNavbar(): void;
  activeMiniNavbar: boolean;
}

function Menu({ alterMiniNavbar, activeMiniNavbar }: Props) {
  const { itens } = useContext(ContextPermissao);
  const { stateMenu } = useContext(ContextMenu);

  return (
    <>
      {itens?.map((item, indice) => {
        return (
          <li
            key={indice}
            className={indice === stateMenu.indice ? "active" : ""}
          >
            <ItemMenu
              item={item}
              ativo={indice === stateMenu.indice ? stateMenu.ativo : false}
              indice={indice}
              alterMiniNavbar={alterMiniNavbar}
              activeMiniNavbar={activeMiniNavbar}
            />
          </li>
        );
      })}

      <li>
        <Link className="dropdown-item" to="/" onClick={() => removeToken()}>
          <FontAwesomeIcon icon={faRightFromBracket} />
          <MenuSpan className="nav-label">Sair</MenuSpan>{" "}
        </Link>
      </li>
    </>
  );
}

export default Menu;
