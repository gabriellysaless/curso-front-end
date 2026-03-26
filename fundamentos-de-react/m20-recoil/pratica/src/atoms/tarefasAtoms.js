import { atom } from "recoil";

/* const [tarefas, setTarefas] = useState([]); */
export const tarefasState = atom({ 
    key: "tarefasState",
    default: []
});

/*     const [filtro, setFiltro] = useState("todas"); */
export const filtroState = atom({
    key: "filtroState",
    default: "todas"
});
