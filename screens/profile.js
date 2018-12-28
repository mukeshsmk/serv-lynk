import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  Avatar,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Alert
} from "react-native";
import { Icon } from "react-native-elements";
import HeaderComponent from "../components/Header";
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'
import MyoffersPage from "./myOffers";
import { Directions } from "react-native-gesture-handler";

export default class ProfilePage extends Component {
  tabs = [
    {
      key: 'games',
      icon: 'movie',
      label: 'Request',
      barColor: '#0145a6',
    },
    {
      key: 'movies-tv',
      icon: 'movie',
      label: 'Movies & TV',
      barColor: '#0145a6',
    },
    {
      key: 'music',
      icon: 'music-note',
      label: 'Music',
      barColor: '#0145a6',
    },
    {
      key: 'music',
      icon: 'music-note',
      label: 'Music',
      barColor: '#0145a6',
    }
  ]


  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  )

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )


  render() {
    return (
      <View>
        <LinearGradient
          colors={["#0c131e", "#0258d1"]}
          style={styles.container}
        >
          <HeaderComponent
            title={"Profile"}
            navigation={this.props.navigation}
          />

          <View style={styles.card}>
            <TouchableHighlight
              style={styles.profileImgContainer}
            >
              <Image
                source={{
                  uri:
                    "https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png"
                }}
                style={styles.profileImg}
              />
            </TouchableHighlight>
            <View style={styles.profileDetails}>
              <Text style={styles.profileName}>Emma Williams</Text>
              <Text style={styles.profileCity}>Florida , USA</Text>
            </View>
          </View>

          <View style={styles.accountDetails}>
            <View style={styles.accountInfo}>
              <TouchableOpacity style={styles.touch}>
                <Text style={styles.accountText}> Account Information </Text>
                <Icon name='arrow-forward' iconStyle={styles.AccountIcon} /> 
              </TouchableOpacity>
            </View>
            <View style={styles.accountInfo}>
              <TouchableOpacity style={styles.touch}>
                <Text style={styles.accountText}>Change Password</Text>
                <Icon name='arrow-forward' iconStyle={styles.AccountIcon} />
                
              </TouchableOpacity>
            </View>
          </View>

 <      View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {/* Your screen contents depending on current tab. */}
        </View>
        <BottomNavigation
          onTabPress={newTab => this.setState({ activeTab: newTab.key })}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>


        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  card: {
    alignItems: "center",
    justifyContent: "center"
  },
  profileImgContainer: {
    height: 150,
    width: 150,
    borderRadius: 100,
    marginTop: 20,
    marginBottom: 10
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 100
  },
  profileName: {
    fontSize: 22,
    color: "#fff"
  },
  profileCity: {
    fontSize: 12,
    color: "#fff",
    marginLeft: "10%"
  },
  accountDetails: {
    marginTop: 50,
    marginBottom: 50
  },
  accountInfo: {
    backgroundColor: "#02204ad1",
    color: "#fff",
    marginBottom: 2,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15
  },
  accountText: {
    color: "#fff",
    fontSize:16
  },
  touch: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  AccountIcon:{
    color: '#fff',
    fontSize: 26,
    marginRight:25,
  }
});
