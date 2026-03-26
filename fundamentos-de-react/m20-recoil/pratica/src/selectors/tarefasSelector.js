import { selector } from "recoil";
import { tarefasState, filtroState } from "../atoms/tarefasAtoms.js";

/* Filtro de Tarefas (todas, concluídas e pendentes) */
export const tarefasFiltradasState = selector({
    key: "tarefasFiltradasState",
    get: ({ get }) => {
        const tarefas = get(tarefasState);
        const filtro = get(filtroState);

        if (filtro === "concluidas") {
            return tarefas.filter(t => t.concluida);
        }

        if (filtro === "pendentes") {
            return tarefas.filter(t => !t.concluida);
        }

        return tarefas;
    }
});
