import JustifiedExample from '../components/Recomendacoes-guia.js'
import styles from '../styles/recomendacoes.module.css'
import OffcanvasExample from '../components/cabecalho.js'
import { Container } from 'react-bootstrap'
import Head from 'next/head'

export default function Recomendacoes(){
    return(
        <>
        <Head>
            <title>Simulando!</title>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
        </Head>
        <Container></Container>
        <div>
            <OffcanvasExample></OffcanvasExample>
        </div>

            <div className="row">               
                <div className="col-md-12">
                    <JustifiedExample></JustifiedExample>
                </div>
            </div>
        </>
    )
}