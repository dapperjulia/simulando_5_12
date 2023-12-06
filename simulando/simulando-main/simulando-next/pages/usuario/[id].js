import OffcanvasExample from '../../components/cabecalho.js';
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import axios from "axios"
import Head from 'next/head';
import styles from '../../styles/usuario.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function usuario() {

    const router = useRouter()

    const [usuario, setUsuario] = useState({})

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const obtemUsuario = () => {
        axios.get('http://127.0.0.1:5000/usuario/' + router.query.id).then((response) => {
            setUsuario(response.data)
            console.log(response.data)
        })
    }

    const atualizaUsuario = () => {
        axios.put('http://127.0.0.1:5000/usuario/' + router.query.id, {
            "nome": nome,
            "sobrenome": sobrenome,
            "email": email,
            "senha": senha
        }).then(() => {
            alert('Cadastro atualizado com sucesso!')
            obtemUsuario()
        }).catch((error) => {
            console.log(error)
            alert('Erro ao atualizar')
        })
    }

    const excluirUsuario = () => {
        axios.delete('http://127.0.0.1:5000/usuario/' + router.query.id).then(() => {
            alert('Cadastro excluído com sucesso!')
            window.location.href = '/'
        })
    }

    useEffect(() => {
        if (!router.isReady) return;
        obtemUsuario()
    }, [router.isReady])

    return (
        <>
            <Head>
                <title>Simulando!</title>
                <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
            </Head>
            <OffcanvasExample />
            <div className={styles.body}>
                <h1>Usuário</h1>
                <p>Nome: {usuario.nome} {usuario.sobrenome}</p>
                <p>Email: {usuario.email}</p>

                <h2>Atualizar cadastro</h2>
                <div className={styles.form}>
                    <Form.Group className="mb-3" controlId="formBasicNome">
                        <Form.Control type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} className={styles.input} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSobrenome">
                        <Form.Control type="text" placeholder="Sobrenome" onChange={(e) => setSobrenome(e.target.value)} className={styles.input}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className={styles.input}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSenha">
                        <Form.Control type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} className={styles.input}/>
                    </Form.Group>

                    <Button onClick={atualizaUsuario} variant="primary">
                        Atualizar
                    </Button>
                </div>

                <h2>Excluir cadastro</h2>
                <Button onClick={excluirUsuario} variant="primary">
                    Deletar conta
                </Button>
            </div>
        </>
    )
}