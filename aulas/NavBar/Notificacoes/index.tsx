import React, { useState } from "react";
import useNotificacao from '../../hooks/UseNotificacao'
import { FaBell } from "react-icons/fa";
import { ContagemNotificacao, ContainerNotificacao, NotificacoesAtivas } from "./estilo";

interface Props {
}

const Notificacoes: React.FC<Props> = () => {

  const [notificacoes] = useNotificacao()
  const [activeNoticacoes, setActiveNoticacoes] = useState<boolean>(false);

  return (
    <ContainerNotificacao onClick={() => setActiveNoticacoes(!activeNoticacoes)}>
      {
        notificacoes?.length > 0 ? 
        <ContagemNotificacao>
          {notificacoes?.length}
        </ContagemNotificacao> : ""
      }
      <FaBell />
    </ContainerNotificacao>
  )
}
export default Notificacoes;