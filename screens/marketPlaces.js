import React, { Component } from "react";
import { 	View,	Text,	StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import { Container,Body } from "native-base";
import { Dimensions } from 'react-native';
import { TabView , SceneMap } from 'react-native-tab-view';
import HeaderComponent from '../components/Header';
import MarketPlaceTab from './marketplacetab';

const FirstRoute = () => (
  <View style={ styles.container }>
    <MarketPlaceTab />
  </View>
);
const SecondRoute = () => (
  <View style={ styles.container }>
     <MarketPlaceTab />
  </View>
);

class Marketplaces extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Offered' },
      { key: 'second', title: 'Request' },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <Container>
          <HeaderComponent title={ 'Market Places' } navigation={ this.props.navigation }/>
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              first: FirstRoute,
              second: SecondRoute,
            })}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get('window').width }}
          />
        </Container>
      </View>
    );
  }
}
export default Marketplaces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
});