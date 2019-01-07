import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import {
  Header,
  Title,
  Left,
  Right,
  Button,
  Body
} from "native-base";

class HeaderComponent extends Component {
  
  render() {
    if (this.props.back) {
      button = <Button
      transparent
      onPress={() => this.props.navigation.pop()}
    >
      <Icon name="ios-arrow-back" type='ionicon' iconStyle={styles.backIcon} />
    </Button>;
    } else {
      button = <Button
      transparent
      onPress={() => this.props.navigation.openDrawer()}
    >
      <Icon name="sort" iconStyle={styles.menuIcon} />
    </Button>;
    }
    return (
      <Header style={styles.drawerHeader}>
        <Left style={{ flexShrink: 1 }} >
          {button}
        </Left>
        <Body
          style={{
            flexGrow: 3,
            justifyContent: "center"
          }}
        >
          <Title style={styles.title}>{this.props.title}</Title>
        </Body>
        <Right style={{ flexShrink: 1 }}>
          <Icon name="tune" iconStyle={styles.menuIcon} />
        </Right>
      </Header>
    );
  }
}
export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  drawerHeader: {
    backgroundColor: "#015cdb"
  },
  menuIcon: {
    color: "#fff",
    fontSize: 26,
    marginRight: 5,
    transform: [{ rotateY: "180deg" }]
  },
  backIcon:{
    color: "#fff",
    fontSize: 26,
    marginRight: 5,
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    color: "white"
  }
});
