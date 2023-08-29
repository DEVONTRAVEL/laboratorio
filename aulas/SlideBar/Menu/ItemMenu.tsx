import { IMenu } from "interfaces/Menu";
import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { ContextMenu } from "./ContextMenu";
import SubItemMenu from "./SubItemMenu";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { Arrow, ItemCollapse, MenuSpan, SubMenu } from "./estilo";

interface Props {
  item: IMenu;
  ativo?: boolean;
  indice: number;
  alterMiniNavbar(): void;
  activeMiniNavbar: boolean;
}

const ItemMenu: React.FC<Props> = ({
  item,
  ativo,
  indice,
  alterMiniNavbar,
  activeMiniNavbar,
}) => {
  const { alterarStateMenu, verificarUrlAtual } = useContext(ContextMenu);

  verificarUrlAtual(indice, item.url);

  if (item.link === true) {
    return (
      <a href={`${item.url}`} target="_blank" rel="noopener noreferrer">
        {item.icone}
        <span className="nav-label">{item.nome} novo</span>{" "}
      </a>
    );
  }

  if (item.subMenu?.length === 0 && item.url !== "") {
    return (
      <Link
        to={`${item.url}`}
        style={{ textDecoration: "none" }}
        onClick={
          activeMiniNavbar
            ? () => {
                alterMiniNavbar();
                alterarStateMenu(indice);
              }
            : () => alterarStateMenu(indice)
        }
      >
        {item.icone}
        <MenuSpan className="nav-label">{item.nome}</MenuSpan>{" "}
      </Link>
    );
  }

  if (item.subMenu?.length !== 0) {
    return (
      <>
        <ItemCollapse
          aria-expanded={ativo}
          onClick={
            activeMiniNavbar
              ? () => {
                  alterMiniNavbar();
                  alterarStateMenu(indice);
                }
              : () => alterarStateMenu(indice)
          }
        >
          {item.icone}
          <MenuSpan className="nav-label">{item?.nome}</MenuSpan>
          <Arrow>{ativo ? <FiChevronDown /> : <FiChevronRight />}</Arrow>
        </ItemCollapse>
        <SubMenu
          className={`nav nav-second-level collapse ${ativo ? "in" : ""}`}
          aria-expanded={ativo}
        >
          {item.subMenu?.map((item, i) => (
            <Fragment key={i}>
              <SubItemMenu key={i} nome={item?.nome} url={item?.url} />
              {verificarUrlAtual(indice, item?.url)}
            </Fragment>
          ))}
        </SubMenu>
      </>
    );
  }

  return <></>;
};

export default ItemMenu;
