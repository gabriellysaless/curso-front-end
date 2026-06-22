import { Destino } from "@/data/destinos";
import Card from "../Card";
import styles from "./Grid.module.css";

type Props = {
    destinos: Destino[]
}

const Grid = ({destinos}: Props) => {
    return (
        <div className={styles.grid}>
            {destinos.map((destino) => <Card key={destino.id} destino={destino}/>)}
        </div>
    )
}

export default Grid;
