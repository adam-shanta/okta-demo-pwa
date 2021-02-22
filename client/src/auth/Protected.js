import React, { lazy } from 'react';
import '@okta/okta-sdk-nodejs';

const LoggedInComponent = lazy(() => import("../logged_in/components/Main"));

const Protected = LoggedInComponent;
export default Protected;