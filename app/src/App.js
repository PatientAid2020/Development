import React from 'react';
import { Main, } from '@aragon/ui';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Content = styled.div`
  width: 80vw;
  max-width: 700px;
`;

function App() {
  return (
    <Main>
      <BrowserRouter>
        <Navbar 
          primary="PatientAid"
          secondary={
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          }
        />
        <Flexbox>
          <Content>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/contact">
                <Contact/>
              </Route>
            </Switch>
          </Content>
        </Flexbox>
      </BrowserRouter>
    </Main>
  );
}

export default App;
