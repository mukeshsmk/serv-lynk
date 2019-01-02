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
import MarketPlaceTab from "./marketplacetab";

const FirstRoute = () => (
  <View style={styles.container}>
    <MarketPlaceTab />
  </View>
);
const SecondRoute = () => (
  <View style={styles.container}>
    <MarketPlaceTab />
  </View>
);

class Marketplaces extends Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Offered" },
      { key: "second", title: "Request" }
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
            ? { backgroundColor: "#ed7f09", color: "black" }
            : { backgroundColor: "#fd8b12", color: "black" }
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
            title={"Marketplaces"}
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
export default Marketplaces;

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
