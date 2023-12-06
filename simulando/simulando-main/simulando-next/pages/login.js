import BasicExample from '../components/login-form'
import OffcanvasExample from '../components/cabecalho'
import { Container, Row, Col } from 'react-bootstrap'
import Head from 'next/head'
import style from '../styles/login.module.css'

export default function Login() {
    return ( 
        <>
        <Head>
            <title>Simulando!</title>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
        </Head>
        <div>
        <OffcanvasExample></OffcanvasExample>
        </div>

        <Container >
            <Row className={style.linha}></Row>
            <Row >
                <Col className='col-3'></Col>
                <Col className='col-6'>                    
                    <BasicExample></BasicExample>
                </Col>
                <Col className='col-3'></Col>
            </Row>
        </Container>
        </>
    )
}