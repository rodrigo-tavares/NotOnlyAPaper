import styled from 'styled-components';
import LogoPng from './../../../assets/images/Logo.png';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 48em) {
    width: 1100px;
    padding: 15px 0px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Navigation = styled.div`
  position: fixed;
  width: 100%;
  z-index: 3;
  transition: all 400ms ease;
  ${({ hasScroll }) =>
    hasScroll
      ? `
    background: #fff;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  `
      : `background: transparent;`};
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
  }

  li a {
    display: block;
    padding: 20px 20px;
    border-right: 1px solid #f4f4f4;
    text-decoration: none;
  }

  li a:hover,
  .menu-btn:hover {
    background-color: #f4f4f4;
  }

  .logo {
    display: block;
    float: left;
    font-size: 2em;
    padding: 10px 20px;
    text-decoration: none;
  }

  .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }

  /* menu icon */

  .menu-icon {
    cursor: pointer;
    display: block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }

  .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  .menu-icon .navicon:before,
  .menu-icon .navicon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .menu-icon .navicon:before {
    top: 5px;
  }

  .menu-icon .navicon:after {
    top: -5px;
  }

  /* menu btn */

  .menu-btn {
    display: none;
  }

  .menu-btn:checked ~ .menu {
    max-height: 240px;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  /* 48em = 768px */

  @media (min-width: 48em) {
    li {
      float: left;
      text-transform: capitalize;
      margin-left: 3rem;
      margin-top: 20px;
      font-size: 16px;
      color: #333333;

      &.login-button {
        font-weight: bold;
        border-radius: 5px;
        border: 1px solid #d6d6d6;
        padding: 10px 20px;
        margin-top: 10px;
        transition: all 400ms;
        &:hover {
          color: #ffffff;
          background: #333333;
          border: 1px solid #333;
        }
      }
    }

    li a {
      padding: 20px 30px;
    }

    .menu {
      clear: none;
      float: right;
      max-height: none;
    }

    .menu-icon {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  background: url(${LogoPng}) no-repeat;
  width: 283px;
  height: 52px;
  margin-top: 0px;
  float: left;
  background-size: 87%;
  opacity: 0.85;
`;
