import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './styles';

const Footer = () => (
  <Container>
    <ul className="menu">
      <NavLink activeClassName="active" to="/home">
        <li>home</li>
      </NavLink>
      <NavLink activeClassName="active" to="/sobre">
        <li>sobre</li>
      </NavLink>
      <NavLink activeClassName="active" to="/top-universidades">
        <li>top universidades</li>
      </NavLink>
      <NavLink activeClassName="active" to="/login">
        <li>login</li>
      </NavLink>
    </ul>
    <ul className="copyright">
      <li>© Copyright {new Date().getFullYear()}</li>
      <li>NotOnlyAPaper</li>
      <li>Todos direitos reservados</li>
    </ul>
  </Container>
);

export default Footer;
