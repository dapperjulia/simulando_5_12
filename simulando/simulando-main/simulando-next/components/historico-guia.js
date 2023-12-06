import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import style from '../styles/historico.module.css';
import { Nav } from 'react-bootstrap';


function GuiaHistorico() {
  
  return (
    <>
      
      <Nav className={`${style.navlink} mb-3`} variant="tabs" defaultActiveKey="/home" id="justify-tab-example"
      justify >
        
        <Nav.Item>
          <Nav.Link eventKey="graficos">Gráficos</Nav.Link>
        </Nav.Item>



        
        <Nav.Item>
          <Nav.Link eventKey="detalhes">Detalhes</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default GuiaHistorico;