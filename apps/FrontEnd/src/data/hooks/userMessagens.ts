import { useContext } from "react";
import ContextoMensagem from "../contexts/ContextoMensagem";

const useMessage = () => useContext(ContextoMensagem);

export default useMessage;
