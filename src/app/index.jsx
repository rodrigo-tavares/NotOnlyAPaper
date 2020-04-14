import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Header from './components/header';
import { createGlobalStyle } from 'styled-components';
import Style from './styles';
import Main from './container/main';
import FindUniversity from './container/find-university';
import Footer from './components/footer';
import ResultUniversity from './container/result-university';

const GlobalStyle = createGlobalStyle`
  ${Style}
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/sobre">
            <div>Sobre</div>
          </Route>
          <Route path="/login">
            <div>Login</div>
          </Route>
          <Route path="/">
            <Main />
            <FindUniversity />
            <ResultUniversity />
          </Route>
        </Switch>
        <Footer />
        <GlobalStyle />
      </Router>
    );
  }
}

export default hot(App);
