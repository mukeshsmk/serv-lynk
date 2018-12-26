/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { NativeModules } from 'react-native';
//import firebaseApp from './Constants/firebase-config';
import StackNavigation from './navigation/Appnavigation_partial'
import DrawerNavigation from './navigation/AppNavigation';
import type { Notification,NotificationOpen } from 'react-native-firebase';


type Props = {};
export default class App extends Component<Props> {

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
    return (
        <StackNavigation />
    );
  }
}

