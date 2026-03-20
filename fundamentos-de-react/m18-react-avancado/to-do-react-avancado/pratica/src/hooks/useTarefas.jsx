import { useContext } from "react";
import { TarefasContext } from "../contexts/TarefasContext";

export function useTarefas() {
    return useContext(TarefasContext);
}