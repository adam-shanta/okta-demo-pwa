import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Pace from "./shared/components/Pace";

import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import Login from './auth/Login';
import { oktaAuthConfig, oktaSignInConfig } from './config';
import Protected from './auth/Protected';

const oktaAuth = new OktaAuth(oktaAuthConfig);

const LoggedOutComponent = lazy(() => import("./logged_out/components/Main"));

const AppWithRouterAccess = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
    >
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            <Pace color={theme.palette.primary.light} />
            <Suspense fallback={<Fragment />}>
                <Switch>
                    <Route path='/' exact component={LoggedOutComponent} />
                    <Route path='/blog' exact component={LoggedOutComponent} />
                    <SecureRoute path='/protected' component={Protected} />
                    <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
                    <Route path='/login/callback' component={LoginCallback} />
                </Switch>
            </Suspense>
        </MuiThemeProvider>
    </Security>
  );
};
export default AppWithRouterAccess;