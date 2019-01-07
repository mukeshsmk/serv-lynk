import React, { Component } from "react";
import { View,StyleSheet } from "react-native";
import { Container } from "native-base";
import { Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { createStackNavigator, createAppContainer } from "react-navigation";

import OfferedListingPage  from "./offeredlisting";
import HeaderComponent from "../components/Header";
import MarketPlaceTab from "./marketplacetab";


// const FirstRoute = () => (
//   <View style={styles.container}>
//     <MarketPlaceTab />
//   </View>
// );
// const SecondRoute = () => (
//   <View style={styles.container}>
//     <MarketPlaceTab />
//   </View>
// );

class Marketplaces extends Component {
  constructor(props){
  super(props);
  this.state = {
    index: 0,
    routes: [
      { key: "first", title: "Offered" },
      { key: "second", title: "Request" }
    ]
  };
}

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
              first: () => ( 
                <View style={styles.container}>
                  <MarketPlaceTab navigation={this.props.navigation}/>
                </View>
              ),
              second: () => ( 
                <View style={styles.container}>
                  <MarketPlaceTab navigation={this.props.navigation}/>
                </View>
              )
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

//marketplaces stack
const MarketplacesNavigation = createStackNavigator(
  {
    Marketplaces: { screen: Marketplaces },
    OfferedListingPage: { screen: OfferedListingPage },
  },{
    animationEnabled: 'True',
    initialRouteName: 'Marketplaces',
    headerMode:"none"
  }
);

export default createAppContainer(MarketplacesNavigation);

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
