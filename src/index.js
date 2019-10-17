import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import './index.css';
import App from 'ui';
import { UserProvider } from 'providers/user';

ReactDOM.render(
  <UserProvider value="example@example.com">
    <CssBaseline />
    <App />
  </UserProvider>,
  document.getElementById('root')
);
