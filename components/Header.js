import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import {
  Container,
  Header,
  Title,
  Left,
  Right,
  Button,
  Body,
  Content,
  Card,
  CardItem
} from "native-base";

class HeaderComponent extends Component {
  render() {
    return (
      <Header style={styles.drawerHeader}>
        <Left style={{ flexShrink: 1 }}>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon name="sort" iconStyle={styles.menuIcon} />
          </Button>
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
  title: {
    fontSize: 14,
    textAlign: "center",
    color: "white"
  }
});
