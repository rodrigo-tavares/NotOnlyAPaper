import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navigation, Container, Logo } from './styles';
import useWindowScrollPosition from '@rehooks/window-scroll-position';

const Header = () => {
  const [change, setChange] = React.useState(false);
  const changePosition = 120;

  let position = useWindowScrollPosition();

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  return (
    <Navigation hasScroll={change}>
      <Container>
        <Link to="/">
          <Logo />
        </Link>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        <ul className="menu">
          <NavLink activeClassName="active" to="/sobre">
            <li>sobre</li>
          </NavLink>
          <NavLink activeClassName="active" to="/top-universidades">
            <li>top universidades</li>
          </NavLink>
          <NavLink activeClassName="active" to="/contribua">
            <li>contribua</li>
          </NavLink>
          <NavLink activeClassName="active" to="/login">
            <li className="login-button">login</li>
          </NavLink>
        </ul>
      </Container>
    </Navigation>
  );
};

export default Header;
