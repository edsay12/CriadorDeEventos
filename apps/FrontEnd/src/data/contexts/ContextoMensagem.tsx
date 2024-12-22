'use client'
import { createContext, useCallback } from "react";
import { toast } from "react-toastify";

export interface ContextoMensagemProps {
  adicionarMensagemSuccess: (mensagem: string) => void;
  adicionarMensagemError: (mensagem: string) => void;
}

const ContextoMensagem = createContext<ContextoMensagemProps>(
  {} as ContextoMensagemProps
);

export function ContextMessageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const adicionarMensagemSuccess = useCallback(
    function adicionarMensagemSuccess(mensagem: string) {
      toast.success(mensagem);
    },
    [toast]
  );

  const adicionarMensagemError = useCallback(
    function adicionarMensagemError(mensagem: string) {
      toast.error(mensagem);
    },
    [toast]
  );

  return (
    <ContextoMensagem.Provider
      value={{ adicionarMensagemError, adicionarMensagemSuccess }}
    >
      {children}
    </ContextoMensagem.Provider>
  );
}

export default ContextoMensagem;
