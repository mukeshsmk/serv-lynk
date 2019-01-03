import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Container, Body } from "native-base";
import { Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import HeaderComponent from "../components/Header";
import MyoffersSentPage from "./myOffersSent";
import MyoffersReceivePage from './myOffersReceive';

const FirstRoute = () => (
  <View style={styles.container}>
    <MyoffersSentPage />
  </View>
);
const SecondRoute = () => (
  <View style={styles.container}>
    <MyoffersReceivePage />
  </View>
);

class MyoffersPage extends Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Sent" },
      { key: "second", title: "Recieved" }
    ]
  };

  _renderTabBar = props => {
    console.log("renderTabBar", props);
    console.log("renderTab", props.navigationState.index === this.state.index);
    return (
      <TabBar
        {...props}
        useNativeDriver={true}
        style={
          props.navigationState.index === this.state.index
            ? { backgroundColor: "#fe8c12",  }
            : { backgroundColor: "#fe8c12", }
        }
        indicatorStyle={{ height: 0 }}
        labelStyle={{ color: "black", textTransform: "capitalize" }}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Container>
          <HeaderComponent
            title={"My Offers"}
            navigation={this.props.navigation}
          />
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              first: FirstRoute,
              second: SecondRoute
            })}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get("window").width }}
            renderTabBar={this._renderTabBar}
          />
        </Container>
      </View>
    );
  }
}
export default MyoffersPage;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#ed7f09"
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16
  }
});
