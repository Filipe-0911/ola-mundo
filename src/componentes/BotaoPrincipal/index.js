import styles from "./BotaoPrincipal.module.css";

export default function BotaoPrincipal({ tamanho, children }) {
    return (
        <button className={`${styles.botaoPrincipal} ${styles[tamanho]}`}>
            {children}
        </button>
    );
}