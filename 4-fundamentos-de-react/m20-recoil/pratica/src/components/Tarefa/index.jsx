import { memo} from "react";
import { Item, Input, TextoItem, BotaoRemover } from "./styles.jsx"

function Tarefa( {texto, onDelete, id, concluida, onToggle}) {
    
    return(
        <>
            <Item>
                <Input type="checkbox"
                    checked={concluida}
                    onChange={() => onToggle(id, concluida)}
                />
                <TextoItem $concluida={concluida}>
                    {texto}
                </TextoItem> 
                <BotaoRemover onClick={() => onDelete(id)}>Remover</BotaoRemover>
            </Item>
        </>
    )
};

export default memo(Tarefa);