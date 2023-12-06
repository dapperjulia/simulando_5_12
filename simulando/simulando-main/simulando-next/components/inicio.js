import Image from 'next/image'
import Button from 'react-bootstrap/Button'
import style from '../styles/Inicio.module.css'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

export default function inicio() {
  return (
    <>
      <div className="container">
        <Row className="mt-5"> 
          <div className="col-sm">     
            <Image src="/logo-simulando.png" width={561} height={111} />
          </div> 
        </Row>
        <div className="mt-2 col-sm">
          <div className={style.subtituloCol}>
            <h1 className={style.subtitulo}>O apoio que seus estudos precisava!</h1>
          </div>
        </div>
        <div className={`${style.paragrafo} row`}>
        <div className='col-sm'>
              <h3>O Simulando é um site que pretende facilitar e democratizar o acesso a simulados para o ingresso no Instituto Federal de Educação, Ciência e Tecnologia Sul-rio-grandense (IFSUL). Disponibilizando caminhos para conteúdos confiáveis e um retorno sobre o desempenho do aluno conforme as quatro matérias exigidas no exame: Língua Portuguesa, Matemática, Geografia e História.</h3>
        </div>
        </div>
      </div>
      <Row>
        <Col></Col>
        <Col className={style.colBotao}>
          <Button className={`${style.botao} float-right`} href='/quiz'>Iniciar Quiz!</Button>
          </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>

      </Row>
    </>
  )
}
