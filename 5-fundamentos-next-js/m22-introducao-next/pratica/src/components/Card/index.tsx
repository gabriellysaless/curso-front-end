import styles from "./Card.module.css";

const Card = () => {
    return (
        <div className={styles.card}>
            <h2>Nome</h2>
            <p>País</p>
            <p>Imagem</p>
            <p>Botão para especificação</p>
        </div>
    )
}

export default Card;