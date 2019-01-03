import React from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Alert,
  Image,
  StyleSheet
} from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems
} from "react-navigation";
import firebase from "react-native-firebase";
import { Card, Left, Body, Right, Container, Header } from "native-base";

import Marketplaces from "../screens/marketPlaces";
import Provideservices from "../screens/provideServices";
import Mygigs from "../screens/myGigs";
import Requestservices from "../screens/requestServices";
import Myrequests from "../screens/myRequest";
import Chat from "../screens/chat";
import Openjobs from "../screens/openJobs";
import Myoffers from "../screens/myOffers";
import LinearGradient from "react-native-linear-gradient";

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1 }}>
    <LinearGradient
      colors={["#666667", "#000000"]}
      style={styles.linearGradient}
    >
      <Header style={styles.proDetails}>
        <Left>
          <Image style={styles.proPic} source={require("../images/logo.jpg")} />
        </Left>
        <Body style={{ textAlign: "left" }}>
          <Text style={styles.name}>Emma Williams</Text>
          <Text style={styles.city}>California, USA</Text>
        </Body>
      </Header>
      <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
        <DrawerItems
          {...props}
          itemStyle={styles.navItems}
          labelStyle={styles.navItemText}
        />
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              "Log out",
              "Do you want to logout?",
              [
                {
                  text: "Cancel",
                  onPress: () => {
                    return null;
                  }
                },
                {
                  text: "Confirm",
                  onPress: () => {
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
          <View style={styles.navItems}>
            <Text style={[styles.navItemText, { margin: 16 }]}>Logout</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  </View>
);

const DrawerNavigation = createDrawerNavigator(
  {
    Marketplaces: {
      screen: Marketplaces
    },
    "Provide Services": {
      screen: Provideservices
    },
    "My Gigs": {
      screen: Mygigs
    },
    "Request Services": {
      screen: Requestservices
    },
    "My Requests": {
      screen: Myrequests
    },
    Chat: {
      screen: Chat
    },
    "Open Jobs": {
      screen: Openjobs
    },
    "My Offers": {
      screen: Myoffers
    }
  },
  {
    initialRouteName: "Marketplaces",
    drawerPosition: "left",
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    drawerWidth: 300
  }
);

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    color: "white",
    textAlign: "left"
  },
  city: {
    fontSize: 12,
    color: "white"
  },
  proDetails: {
    marginTop: 0,
    height: 130,
    backgroundColor: "#01419C",
    color: "white"
  },
  proPic: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginLeft: "5%",
    marginTop: "2%"
  },
  navItems: {
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#fdfdfd"
  },
  navItemText: {
    color: "white",
    fontSize: 15,
    fontWeight: "300"
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 5
  }
});

export default createAppContainer(DrawerNavigation);
