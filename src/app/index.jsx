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
import Login from './container/login';
import NotFound from './container/not-found';

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
        <Switch>
          <Route path="/sobre">
            <Header />
            <NotFound />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Main />
            <FindUniversity />
            <ResultUniversity />
            <Footer />
          </Route>
        </Switch>
        <GlobalStyle />
      </Router>
    );
  }
}

export default hot(App);
