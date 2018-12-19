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
import StackNavigation from './navigation/Appnavigation_partial'
import DrawerNavigation from './navigation/AppNavigation'
 
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

