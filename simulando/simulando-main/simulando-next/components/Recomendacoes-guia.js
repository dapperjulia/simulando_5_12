import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from '../styles/historico.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import style from '../styles/recomendacoes.module.css';
import Portugues from './recomendacoesMateria/portugues';
import Matematica from './recomendacoesMateria/matematica';
import Historia from './recomendacoesMateria/historia';
import Geografia from './recomendacoesMateria/geografia';


function JustifiedExample() {
  return (
    <Container className={styles.container}>
      <Row>
        <Col className='md-6'>
          <h1 className={style.titulorecomendacoes}>Recomendações</h1>
        </Col>
      </Row>

      <Tabs className={`${styles.navlink} mb-3`}
        defaultActiveKey="profile"
        id="justify-tab-example"
        justify
      >
        <Tab eventKey="home" title="Língua Portuguesa">
          <Portugues/>
        </Tab>
        <Tab eventKey="profile" title="Matemática">
          <Matematica/>
        </Tab>
        <Tab eventKey="longer-tab" title="História">
          <Historia/>
        </Tab>
        <Tab eventKey="contact" title="Geografia">
          <Geografia/>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default JustifiedExample;