/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import RegisterPage from './screens/register';
import LoginPage from './screens/login';
import ForgetPasswordPage from './screens/forgetpassword';

AppRegistry.registerComponent(appName, () => ForgetPasswordPage);
