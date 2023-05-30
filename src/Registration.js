import React,{useState} from "react";
import {Nav, Navbar, Modal, Form} from 'react-bootstrap';

export default function Registration(props){
  const [showLogIn, setShowLogIn] = useState(false);
  const [showEntry, setShowEntry] = useState(false);
  const handleCloseLogIn = () => setShowLogIn(false);
  const handleShowLogIn = () => setShowLogIn(true);
  const handleCloseEntry = () => setShowEntry(false);
  const handleShowEntry = () => setShowEntry(true);

  return(
  <>
      <Nav>
        <button className="btn btn-outline-primary" onClick={handleShowLogIn} >Регистрация  </button>

        <button  className="btn btn-outline-primary" onClick={handleShowEntry} >Войти</button>

      </Nav>
    <Modal show={showLogIn} onHide={handleCloseLogIn}>
      <Modal.Header closeButton>
        <Modal.Title>Регистрация</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="fromBasicName">
            <Form.Label>Имя</Form.Label>
            <Form.Control type="text" placeholder="Введите имя"/>
          </Form.Group>
          <Form.Group controlId="fromBasicSurname">
            <Form.Label>Фамилия</Form.Label>
            <Form.Control type="text" placeholder="Введите фамилию"/>
          </Form.Group>
          <Form.Group controlId="fromBasicEmail">
            <Form.Label>Электронная Почта</Form.Label>
            <Form.Control type="email" placeholder="Введите email"/>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="fromBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="Введите пароль"/>
          </Form.Group>
          <Form.Group controlId="fromBasicCheckbox">
            <Form.Check type="checkbox" label="Запомнить меня"/>
          </Form.Group>
          <button  className="btn btn-outline-primary"  >Сохранить</button>
        </Form>
      </Modal.Body>

    </Modal>

    <Modal show={showEntry} onHide={handleCloseEntry}>
      <Modal.Header closeButton>
        <Modal.Title>Авторизация</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="fromBasicName">
            <Form.Label>Имя</Form.Label>
            <Form.Control type="text" placeholder="Введите имя"/>
          </Form.Group>
          <Form.Group controlId="fromBasicSurname">
            <Form.Label>Фамилия</Form.Label>
            <Form.Control type="text" placeholder="Введите фамилию"/>
          </Form.Group>
          <Form.Group controlId="fromBasicEmail">
            <Form.Label>Электронная Почта</Form.Label>
            <Form.Control type="email" placeholder="Введите email"/>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="fromBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="Введите пароль"/>
          </Form.Group>
          <Form.Group controlId="fromBasicCheckbox">
            <Form.Label>Пароль</Form.Label>
            <Form.Check type="checkbox" label="Запомнить меня"/>
          </Form.Group>
          <button  className="btn btn-outline-primary"  >Войти</button>
        </Form>
      </Modal.Body>

    </Modal>


  </>);
};

