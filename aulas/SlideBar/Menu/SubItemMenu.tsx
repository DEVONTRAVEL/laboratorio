import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  nome?: string;
  url?: string;
}

const SubItemMenu: React.FC<Props> = ({ nome, url }) => {
  const { pathname } = useLocation();

  return (
    <li className={`${pathname === url ? "active shadow" : ""}`}>
      <Link to={`${url}`}>{nome}</Link>
    </li>
  );
};

export default SubItemMenu;
