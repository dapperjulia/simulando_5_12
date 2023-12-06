import GuiaHistorico from "../components/historico-guia";
import styles from '../styles/recomendacoes.module.css'
import OffcanvasExample from '../components/cabecalho.js';
import { Container } from "react-bootstrap";
import style from '../styles/historico.module.css';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import  Head  from "next/head";
import Login from "../components/login.js";
import { useSession, getSession } from "next-auth/react"
import AcessoNegado from "../components/Acesso-negado.js";


export default function Historico(){

    const { data: session, status } = useSession()

    if (status === "unauthenticated") {
      return (
        <AcessoNegado></AcessoNegado>
      )
    }

    return(
        <>
        <Login></Login>
    <Head>
        <title>Simulando!</title>
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
    </Head>
    <OffcanvasExample></OffcanvasExample>
    <Container className={style.container}>
        <Row className={style.row}>
            <Col>
                <h1 className={styles.titulorecomendacoes}>Histórico</h1>
            </Col>
        </Row>
    
        <Row className={style.row}>
            <Col>
                <GuiaHistorico></GuiaHistorico>
            </Col>
        </Row>
    </Container>
    </>
    )
}