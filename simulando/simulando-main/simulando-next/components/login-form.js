import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Link from 'next/link'
import style from '../styles/Inicio.module.css'
import styles from '../styles/login.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import PasswordRecovery from './Esqueci-senha';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react"



export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Logado como {session.user.name} <br />
        <button onClick={() => signOut()}>Deslogar</button>
      </>
    )
  }
  return (
      <>
    <Container className={styles.tudo}>
    <Row>
                <Col className='col-6'>
                    <Image src='/logo-simulando.png' width={480.5} height={85.5}/>
                </Col>
            </Row>
        <Row>
          <br></br>
        </Row>
        <Col>
    <Form method="POST">     <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Control type="email" placeholder="Email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" minlength="8" placeholder="Senha" required/>
      </Form.Group>
      <Form.Group className=" mb-3"controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Me mantenha conectado" />
      </Form.Group>
      <Row>
      <Button className={`${styles.botao} float-none`} variant="primary" type="submit">
        Entrar
      </Button>
      </Row>
      <br></br>
      <Row>
        <Col className='mb-1'></Col>
        <Col className='mb-10'>
          <PasswordRecovery></PasswordRecovery>
        </Col>
        <Col className='mb-1'></Col>
      </Row>

      <Row>
      <Col>
      <Link className ={style.paragrafo} href=''>
      <p onClick={() => signIn()}>
        Entrar com Google
     
      </p>
      </Link>
      </Col>
      </Row>
   
    </Form>
    </Col>
    <Col></Col>

    </Container>
    </>
  )
}


