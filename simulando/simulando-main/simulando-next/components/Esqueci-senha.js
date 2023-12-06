import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function PasswordRecovery() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState(1);

  const handleShow = () => {
    setShowModal(true);
    setStep(1);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleNext = () => {
    if (step === 1) {
        if (validateEmail(email)) {
            setStep(2);
          } else {
            alert("Email inválido. Por favor, insira um email válido.");
          }}
    else {
        if (validateRecoveryCode(code)) {
            // Código de recuperação válido, você pode prosseguir com a recuperação da senha
            // Aqui você pode adicionar a lógica para enviar o código para o servidor e processar a recuperação da senha
            alert("Código de recuperação válido. Processando a recuperação da senha...");
            handleClose();
          } else {
            alert("Código de recuperação inválido. Por favor, insira um código válido.");
            }
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const validateRecoveryCode = (code) => {
    // Implemente sua lógica de validação do código de recuperação aqui
    // Por exemplo, verificar se o código tem o formato esperado ou corresponde a um código gerado previamente
    // Esta função deve retornar true se o código for válido e false caso contrário
    return code === "codigo_valido"; // Exemplo de validação simples
  };

  return (
    <>
      <Button variant="Link" onClick={handleShow}>
        Esqueci minha senha
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recuperar Senha</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {step === 1 ? (
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Informe seu email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Form>
          ) : (
            <Form>
              <Form.Group controlId="formBasicCode">
                <Form.Label>Código de Recuperação</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Código de recuperação"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleNext}>
            {step === 1 ? "Próximo" : "Enviar Código"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PasswordRecovery;
