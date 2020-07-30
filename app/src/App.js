import React from 'react';
import { Main, useTheme } from '@aragon/ui';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import APIUtils from './api/APIUtils';

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Content = styled.main`
  width: 80vw;
  max-width: 700px;
  min-width: 300px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

function App() {
  const theme = useTheme();
  const [providerId, setId] = React.useState(0);
  const [providerData, setData] = React.useState({});

  React.useEffect(() => {
    //either hardcode per healthcare provider or get from db based on url/port? not too sure here
    const PROVIDER_ID = 1;
    setId(PROVIDER_ID);
    setData(APIUtils.getProviderInfo(PROVIDER_ID));
  }, []);

  return (
    <Main>
      <BrowserRouter>
        <Navbar 
          primary={"PatientAid: " + providerData['name']}
          secondary={
            <ul>
              <li><StyledNavLink activeStyle={{color: theme.accent, borderBottom: "1px solid"}} exact to="/">Home</StyledNavLink></li>
              <li><StyledNavLink activeStyle={{color: theme.accent, borderBottom: "1px solid"}} to="/about">About</StyledNavLink></li>
              <li><StyledNavLink activeStyle={{color: theme.accent, borderBottom: "1px solid"}} to="/contact">Contact</StyledNavLink></li>
            </ul>
          }
        />
        <Flexbox>
          <Content>
            <Switch>
              <Route exact path="/">
                <Home providerId={providerId}/>
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
