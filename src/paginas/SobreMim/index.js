import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_min_foto.jpeg"
import styles from "./SobreMim.module.css";

export default function Sobre() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim">
            <h3 className={styles.subtitulo}>
                Um pouco sobre mim.
            </h3>
            <img src={fotoSobreMim} alt="foto" className={styles.fotoSobreMim} />

            <p className={styles.paragrafo}>
                Oi, meu nome é Filipe! Eu sou desenvolvedor Fullstack e fico feliz por te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com desenvolvimento começou por volta de 11 a 12 anos quando pela primeira vez escrevi algumas linhas de HTML, mas não fazia ideia de que muitos anos depois estudaria desenvolvimento de software.
            </p>
            <p className={styles.paragrafo}>
                Em 2013, fiz um concurso para a carreira militar onde ingressei na EEAr e me formei sargento especialista em Informações Aeronáuticas. Fui designado para servir em Manaus - AM onde fiquei por 6 anos.
            </p>
            <p className={styles.paragrafo}>
                Nesse período, motivado a prestar outros concursos, iniciei minha primeira graduação em Ciências Contábeis, porém, por falta de identificação com a profissão, não concluí o curso.
            </p>
            <p className={styles.paragrafo}>
                Atualmente curso Análise e desenvolvimento de Sistemas na Gran Faculdade, e estou concluindo cursos de programação na Alura para complementar minhas experiências e adquirir mais conhecimentos no universo de tecnologia. Estou cursando o 4º semestre e me formo no fim do primeiro semestre de 2025.
            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados. Desenvolvi alguns projetos nas linguagens Python, Java, Javascript HTML e CSS. Meu foco atual está em Java com o framework Spring boot, porém, para ser um dev Fullstack, estou aprimorando meus conhecimentos em React.
            </p>
            <p className={styles.paragrafo}>
                Possuo conhecimentos em: Python, Django; HTML, CSS, Javascript, React e NodeJs (Express, Sequelize); Java e Spring boot (Spring security, Spring Web, Spring Data JPA); MySQL, SQL(DML, DDL, DQL, DTL, DCL). 
            </p>
        </PostModelo>
    );
}