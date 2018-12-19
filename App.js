/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';


import Loading from './components/loading'
import firebaseConfig from './Constants/firebase-config';
import StackNavigation from './navigation/Appnavigation_partial';
import drawerNavigation from './navigation/AppNavigation';
import HeaderComponent from './components/headerComponent';


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

