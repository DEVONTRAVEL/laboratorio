import styled from "styled-components";

interface PropsNotificacoesAtivas {
  aberto?: boolean
}

export const ContainerNotificacao = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 19px;
  margin-left: -20px;
`

export const ContagemNotificacao = styled.div`
  position: relative;
  top: 12px;
  left: 6px;
  background-color: ${({theme}) => theme.colors.secondary.main};
  border-radius: 70px;
  width: 22px;
  height: 22px;
  text-align: center;
`

export const NotificacoesAtivas = styled.div<PropsNotificacoesAtivas>`
  background-color: grey;
  position: absolute;
  display: ${({aberto}) => aberto ? 'block' : "none"};
`