import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faKey, faPencil, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getEmail, getNome, removeToken } from "_services/auth";
import { UsuarioMenuContainer, UsuarioMenuLink } from "./estilo";

interface Props {
  aberto: boolean;
}

export function UsuarioMenu({aberto}:Props) {
  return (
    <UsuarioMenuContainer
      aberto={aberto}
    >
      <p>USUÁRIO</p>
      <FontAwesomeIcon icon={faUserCircle} />
      <p>{getNome()}</p>
      <p>LW Tecnologia</p>
      <p>{getEmail()}</p>
      <hr />
      <UsuarioMenuLink
        to="/404"
      >
        <FontAwesomeIcon icon={faPencil} />  Editar Perfil
      </UsuarioMenuLink>
      <UsuarioMenuLink
        to="/404"
      >
        <FontAwesomeIcon icon={faKey} />  Segurança
      </UsuarioMenuLink>
      <UsuarioMenuLink
        to="/"
        onClick={() => removeToken()}
      >
        <FontAwesomeIcon icon={faRightFromBracket} />  Sair
      </UsuarioMenuLink>
    </UsuarioMenuContainer>
  )
}