// import Pergunta_quiz from "../components/quiz-pergunta"
import { Container, Row, Col, } from "react-bootstrap";
import OffcanvasExample from "../components/cabecalho.js";
import style from '../styles/quiz.module.css';
import { useState, useEffect } from "react";
import axios from "axios";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Head from 'next/head';
import parse from 'html-react-parser';

export default function Quiz() {

    const [perguntas, setPerguntas] = useState({})
    //perguntas[0] = {enunciado: "Carregando...", alternativa_a: "Carregando...", alternativa_b: "Carregando...", alternativa_c: "Carregando...", alternativa_d: "Carregando...", correta: "Carregando...", materia: "Carregando..."}
    const [perguntaAtual, setPerguntaAtual] = useState(0)
    const [showPontuacao, setShowPontuacao] = useState(false)
    const [pontuacao, setPontuacao] = useState(0)
    const [matematica, setMatematica] = useState(0)
    const [portugues, setPortugues] = useState(0)
    const [historia, setHistoria] = useState(0)
    const [geografia, setGeografia] = useState(0)

    useEffect(() => {
        obtemPerguntas()
    }, [])

    const obtemPerguntas = () => {
        axios.get('http://127.0.0.1:5000/questoes').then((response) => {
            setPerguntas(response.data)
            console.log(response.data)
        })
    }

    const proximaPergunta = (e) => {
        e.preventDefault()

        let resposta = e.target.alternativa.value

        if (resposta == perguntas[perguntaAtual].correta) {
            setPontuacao(pontuacao + 1)

            let materia = perguntas[perguntaAtual].materia

            if (materia == "Matemática") {
                setMatematica(matematica + 1)
            }

            if (materia == "Português e Literatura") {
                setPortugues(portugues + 1)
            }

            if (materia == "História") {
                setHistoria(historia + 1)
            }

            if (materia == "Geografia") {
                setGeografia(geografia + 1)
            }
        }

        const nextQuestion = perguntaAtual + 1;
        if (nextQuestion < perguntas.length) {
            setPerguntaAtual(nextQuestion);
        } else {
            setShowPontuacao(true);
        }
    }

    if (perguntas[perguntaAtual] !== undefined) {
    return (
        <>
            <Head>
                <title>Simulando!</title>
                <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
            </Head>

            <OffcanvasExample />
            <Container>
                <Row>
                    <Col>
                        {showPontuacao ? (
                            <div className={style.mostrarResultado}>
                                <h3 className={style.resultado}>Sua pontuação total é {pontuacao} de {perguntas.length}</h3>
                                <div className={style.materias}>
                                    <p className={style.p}>Matemática = {matematica}</p>
                                    <p className={style.p}>Português = {portugues}</p>
                                    <p className={style.p}>História = {historia}</p>
                                    <p className={style.p}>Geografia = {geografia}</p>
                                </div>
                                <Link href="/"><Button>Encerrar</Button></Link>
                            </div>
                        ) : (
                            <Container className={`${style.container}`}>
                                <Row className={style.row}>
                                    <Col>
                                        <h3 className={style.pergunta}>Questão {perguntaAtual + 1}/{perguntas.length}</h3>
                                        <p className={style.p}>{parse(perguntas[perguntaAtual].enunciado)}</p>
                                    </Col>
                                </Row>
                                <Row className={style.row}>
                                    <Col>
                                        <form onSubmit={proximaPergunta}>
                                            <div className="form-check">
                                                <input type="radio" value="a" className="form-check-input" id="alternativaA" name="alternativa" required/>
                                                <label className="form-check-label" htmlFor="alternativaA">{perguntas[perguntaAtual].alternativa_a}</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="radio" value="b" className="form-check-input" id="alternativaB" name="alternativa"/>
                                                <label className="form-check-label" htmlFor="alternativaB">{perguntas[perguntaAtual].alternativa_b}</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="radio" value="c" className="form-check-input" id="alternativaC" name="alternativa" />
                                                <label className="form-check-label" htmlFor="alternativaC">{perguntas[perguntaAtual].alternativa_c}</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="radio" value="d" className="form-check-input" id="alternativaD" name="alternativa" />
                                                <label className="form-check-label" htmlFor="alternativaD">{perguntas[perguntaAtual].alternativa_d}</label>
                                            </div>

                                            <Col className="mb-3"></Col>
                                            <Col className="mb-6">
                                                <button type="submit" className={style.botao}>Enviar Resposta</button>
                                            </Col>
                                            <Col className="mb-3"></Col>
                                        </form>
                                    </Col>
                                </Row>
                            </Container>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    )}
}