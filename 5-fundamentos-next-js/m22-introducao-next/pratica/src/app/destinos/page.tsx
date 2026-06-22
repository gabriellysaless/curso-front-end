import { destinos } from "@/data/destinos";
import styles from "./destinos.module.css";
import Grid from "@/components/Grid";

const Destinos = () => {
    return (
        <div>
            <h1 className={styles.title}>Destinos</h1>
            <Grid destinos={destinos}/>
        </div>
    )
}

export default Destinos