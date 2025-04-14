/**
 * @author Jesus Villa
 */

import React, {useEffect} from 'react';
import AppNavigator from './navigation/root';
import apiClient from './api/APIClient';
import {constants} from '@app/constants';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import { Home } from './screens/Home';

const App = () => {

  return (
    <Home/>
  );
};

export default App;
