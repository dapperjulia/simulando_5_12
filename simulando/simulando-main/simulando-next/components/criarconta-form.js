import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';

export default function CriarcontaForm() {

  return (
<>
  <Container>
      <Row>
        <Col className='col-6'>
          <Image src='/logo-simulando.png' width={480.5} height={85.5}/>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicNome">
              <Form.Control type="text" placeholder="Nome" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSobrenome">
              <Form.Control type="text" placeholder="Sobrenome" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Senha" />
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
</>
  );
}
