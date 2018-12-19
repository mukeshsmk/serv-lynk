/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'firebase';

import firebaseConfig from './Constants/firebase-config';
<<<<<<< HEAD
import StackNavigation from './navigation/Appnavigation_partial';
import drawerNavigation from './navigation/AppNavigation';
import HeaderComponent from './components/headerComponent';


=======
import StackNavigation from './navigation/Appnavigation_partial'
import DrawerNavigation from './navigation/AppNavigation'
 
>>>>>>> 9024bb15ee582c6e24a917a1674bde15b95316e3
type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    
      firebase.initializeApp(firebaseConfig);
  
  }
  
  render() {
    return (
        <StackNavigation />
    );
  }
}

