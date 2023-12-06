import React from 'react';
import style from '../styles/historico.module.css';
import { Col, Button } from 'react-bootstrap';


export default function AcessoNegado() {
//  /*#__PURE__*/React.createElement("div", {
//     className: "container"
//   }, /*#__PURE__*/React.createElement("div", {
//     className: "row"
//   }, /*#__PURE__*/React.createElement("div", {
//     className: "col-12"
//   }, /*#__PURE__*/React.createElement("h1", null, "Acesso negado"))));
  
 return (
    <>
    <div className="container">
      <div className="row">
         <div className="col-12">
            <h1>Acesso negado</h1>
            <Col className={style.colBotao}>
          <Button className={`${style.botao} float-right`} href='/login'>Fazer Login</Button>
          </Col>
         </div>
      </div>
    </div>
    </>

)

 }