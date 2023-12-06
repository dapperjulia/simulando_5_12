import OffcanvasExample from '../components/cabecalho.js';
import Head from 'next/head';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import axios from 'axios';

export default function criarConta() {

    const cadastrar = (e) => {
        e.preventDefault()
        let nome = e.target.nome.value
        let sobrenome = e.target.sobrenome.value
        let email = e.target.email.value
        let senha = e.target.senha.value


        axios.post("http://127.0.0.1:5000/usuario", {
            "nome": nome,
            "sobrenome": sobrenome,
            "email": email,
            "senha": senha
        }).then((response) => {
            console.log(response.data)
            alert('Cadastro realizado com sucesso!')
            window.location.href = '/login'
        }).catch((error) => {
            console.log(error)
            alert('Erro ao cadastrar')
        })

    }

    return (
        <>
            <Head>
                <title>Simulando!</title>
                <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
            </Head>
            <div>
                <OffcanvasExample />
            </div>


            <div className='container'>
                <div className='col-6'>

                </div>

                <div className='row'>
                    <div className='col-6'>
                        <Container>
                            <Row>
                                <Col className='col-6'>
                                    <Image src='/logo-simulando.png' width={480.5} height={85.5} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form onSubmit={cadastrar}>
                                        <Form.Group className="mb-3" controlId="formBasicNome">
                                            <Form.Control type="text" name="nome" placeholder="Nome" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicSobrenome">
                                            <Form.Control type="text" name="sobrenome" placeholder="Sobrenome" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" name="email" placeholder="Email" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control type="password" name="senha" placeholder="Senha" />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Criar Conta
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Já tem uma conta? <Link href="/login">Entrar</Link></p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    )
};
