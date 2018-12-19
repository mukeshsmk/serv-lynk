import React, { Component } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Icon } from 'react-native-elements';
import { Container, Header, Title, Left, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

class Home extends Component {
  
  static navigationOptions = {
    drawerLabel: 'Home',

  };
  
  render() {
    return (
      <View>
      <Container>
      <Header style={styles.drawerHeader}>
      <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Title>Home</Title>
      </Header>  
    </Container>
    
     
    </View>
     
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});