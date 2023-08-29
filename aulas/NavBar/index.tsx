import { faChevronDown, faChevronUp, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {getNome } from "_services/auth";
import { Arrow, ButtonSideBar, Container, NavItem, UsuarioFoto} from "./estilo";
import { useUsuarioMenu } from "./hooks/useUsuarioMenu";
import Notificacoes from "./Notificacoes";
import { UsuarioMenu } from "./UsuarioMenu";

interface Props {
  alterMiniNavbar(): void;
  activeMiniNavbar: boolean
}

const Navbar: React.FC<Props> = ({ alterMiniNavbar, activeMiniNavbar }) => {

  const { aberto, setAberto } = useUsuarioMenu()

  return (
    <Container>
      <Row className="border-bottom">
        <nav className="navbar navbar-static-top" role="navigation">
          <div className="navbar-header">
            <ButtonSideBar
              onClick={alterMiniNavbar}
            >
              {activeMiniNavbar ? <FaAngleRight /> : <FaAngleLeft /> }
            </ButtonSideBar>
          </div>
          <ul className="nav navbar-top-links navbar-right d-flex justify-content-between">
            <NavItem>
              <Notificacoes />
            </NavItem>
            <NavItem>
              <UsuarioFoto>
                <FontAwesomeIcon icon={faUserCircle}/> 
              </UsuarioFoto>
            </NavItem>
            <NavItem  onClick={() => setAberto(!aberto)}>
              {getNome()}
              {aberto ? <Arrow icon={faChevronUp}/> : <Arrow icon={faChevronDown}/>}
            </NavItem>
          </ul>
          <UsuarioMenu aberto={aberto}/>
        </nav>
      </Row>
    </Container>
  );
};
export default Navbar;
