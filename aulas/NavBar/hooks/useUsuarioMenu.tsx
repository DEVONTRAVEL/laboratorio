import { useState } from "react";

export function useUsuarioMenu() {
  const [aberto, setAberto] = useState<boolean>(false)

  return {
    aberto,
    setAberto
  }
}