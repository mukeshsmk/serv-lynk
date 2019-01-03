/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import firebase from 'react-native-firebase';
import { NativeModules } from "react-native";
// import firebaseApp from './Constants/firebase-config';
import type { Notification,NotificationOpen } from 'react-native-firebase';

//pages
import Provideservices from "./screens/provideServices";
import OfferedListingPage from "./screens/offeredlisting";
import ProfilePage from "./screens/profile";
import Marketplaces from "./screens/marketPlaces";
import MarketPlaceTab from './screens/marketplacetab'

//navigation
import StackNavigation from "./navigation/Appnavigation_partial";
import DrawerNavigation from "./navigation/AppNavigation";
import { SwitchNavigation } from './navigation/AppNavigationSwitch';

//comonents
import Loading from './components/loading';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      initialRoute : false,
      loading: true,
      isAuthenticationReady: false,
      isAuthenticated: false,
    };
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
  }
  onAuthStateChanged = (user) => {
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
    this.setState({loading: false});
  }
  componentDidMount() {
    this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification: Notification) => {
        // Process your notification as required
        // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
        console.log("1",notification)
      });
    this.notificationListener = firebase.notifications().onNotification((notification: Notification) => {
        // Process your notification as required
        console.log('2',notification)
    });
    const notificationOpen: NotificationOpen = firebase.notifications().getInitialNotification();
    if (notificationOpen) {
        // App was opened by a notification
        // Get the action triggered by the notification being opened
        const action = notificationOpen.action;
        // Get information about the notification that was opened
        const notification: Notification = notificationOpen.notification;
        console.log('3',notificationOpen)
    }
  }
  componentWillUnmount() {
    this.notificationDisplayedListener();
    this.notificationListener();
  }

  render() {
    if ( (this.state.loading || !this.state.isAuthenticationReady)) {
      return (
        <Loading />
      )
    }else{

    const RootNavigator = SwitchNavigation(this.state.isAuthenticated);
    return <RootNavigator />
    }
  }
}
