import Head from 'next/head'
import Cabecalho from '../components/cabecalho'
import Inicio from '../components/inicio'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
        <title>Simulando!</title>
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
    </Head>
    <Cabecalho/>
    <Inicio/>
    </>
  )
}
