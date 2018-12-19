import React from 'react'
import { View, SafeAreaView, TouchableOpacity, Text, Alert, Image, StyleSheet } from 'react-native'
import { createDrawerNavigator, createAppContainer, DrawerItems } from "react-navigation";
import firebase from 'firebase'
import { Card, Left, Body, Right, Container, Header } from "native-base";

import Marketplaces from '../screens/marketPlaces';
import Provideservices from '../screens/provideServices';
import Mygigs from '../screens/myGigs';
import Requestservices from '../screens/requestServices';
import Myrequests from '../screens/myRequest';
import Chat from '../screens/chat';
import Openjobs from '../screens/openJobs';
import Myoffers from '../screens/myOffers';


const CustomDrawerContentComponent = (props) => (
  <View style={{flex:1}}>
    <Header style={styles.proDetails}>
      <Left>
        <Image style={styles.proPic} source={require('../images/logo.jpg')}/>
      </Left>
      <Body>
      <Text>Test</Text>
      </Body>
      <Right />
    </Header>
    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} style={styles.navItems}/>
      <TouchableOpacity onPress={()=>
        Alert.alert(
          'Log out',
          'Do you want to logout?',
          [
            {text: 'Cancel', onPress: () => {return null}},
            {text: 'Confirm', onPress: () => {
              // Asyncstorage.clear();
              firebase.auth().signOut()
              .then(function() {
                props.navigation.navigate('Login')
              })
              .catch(function(error) {
                alert("// An error happened",error)
              });
            }},
          ],
          { cancelable: false }
        )  
        }>
        <Text style={{margin: 16,fontWeight: 'bold'}}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  </View>
);

const DrawerNavigation = createDrawerNavigator({
  'Marketplaces': {
    screen: Marketplaces,
  },
  'Provide services': {
    screen: Provideservices,
  },
  'My Gigs':{
    screen: Mygigs
  },
  'Request services':{
    screen: Requestservices
  },
  'My Requests':{
    screen: Myrequests
  },
  'Chat':{
    screen: Chat
  },
  'Open Jobs':{
    screen: Openjobs
  },
  'My Offers':{
    screen: Myoffers
  }
},{
  initialRouteName: 'Marketplaces',
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  drawerWidth: 300
})

const styles = StyleSheet.create({
  proDetails:{
    marginTop: 0,
    height:130,
    
  },
  proPic: {
    height:70,
    width: 70,
    borderRadius: 35,
    marginLeft:'5%',
    marginTop:'2%'    
  },
  navItems:{
    margin: 10
  }
});

export default createAppContainer(DrawerNavigation)