import styles from './Banner.module.css';
import circuloColorido from "assets/circulo_colorido.png"
import minhaFoto from "assets/minha_foto.jpeg"

export default function Banner () {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Bem vindo! Eu sou Filipe de Bianchi Andrade, Desenvolvedor Fullstack. Aqui compartilho vários conhecimentos, espero que aprenda algo novo!
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt='logo'/>
                <img className={styles.minhaFoto} src={minhaFoto} alt='foto'/>
            </div>
        </div>
    );
}
