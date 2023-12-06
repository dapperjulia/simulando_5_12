import Cabecalho from "../components/cabecalho";
import SobreNositens from "../components/sobreNositens";
import Head from 'next/head'

export default function SobreNos() {
    return (
        <>
        <Head>
            <title>Simulando!</title>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
        </Head>
        <Cabecalho/>
        <SobreNositens/>
        </>
    )
}