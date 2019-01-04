import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Swipeable from "react-native-swipeable";
import { Icon } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";
import HeaderComponent from "../components/Header";

class MyGigsPage extends Component {
  state = {
    currentlyOpenSwipeable: null
  };

  handleScroll = () => {
    const { currentlyOpenSwipeable } = this.state;

    if (currentlyOpenSwipeable) {
      currentlyOpenSwipeable.recenter();
    }
  };

  render() {
    const { currentlyOpenSwipeable } = this.state;
    const itemProps = {
      onOpen: (event, gestureState, swipeable) => {
        if (currentlyOpenSwipeable && currentlyOpenSwipeable !== swipeable) {
          currentlyOpenSwipeable.recenter();
        }

        this.setState({ currentlyOpenSwipeable: swipeable });
      },
      onClose: () => this.setState({ currentlyOpenSwipeable: null })
    };

    return (
      <ScrollView onScroll={this.handleScroll} style={styles.container}>
        <HeaderComponent title={ 'My Gigs' } navigation={ this.props.navigation }/>
        <Example1 {...itemProps} />
      </ScrollView>
    );
  }
}

function Example1({ onOpen, onClose }) {
  return (
    <Swipeable
      leftButtons={[
        <TouchableOpacity
          style={styles.leftSwipeItem}
        >
          <View style={styles.edit}>
            <Icon name="edit" color="#fff" size={40} />
          </View>
        </TouchableOpacity>
      ]}
      rightButtons={[
        <TouchableOpacity
          style={styles.rightSwipeItem}
        >
          <View style={styles.delete}>
            <Icon name="delete" color="#fff" size={40} />
          </View>
        </TouchableOpacity>
      ]}
      onLeftButtonsOpenRelease={onOpen}
      onLeftButtonsCloseRelease={onClose}
      onRightButtonsOpenRelease={onOpen}
      onRightButtonsCloseRelease={onClose}
    >
      <View style={styles.listItem}>
        <Grid style={styles.gridBorder}>
          <Col size={45}>
            <View style={styles.services}>
              <Image
                style={styles.serviceImage}
                source={require("../images/1.jpg")}
              />
            </View>
          </Col>
          <Col size={55}>
            <View style={styles.servicescontent}>
              <View>
                <Text style={styles.serviceTitle}>Errand Running</Text>
                <Text style={styles.servicesubTitle}>Miscellaneous</Text>
              </View>
            </View>
          </Col>
        </Grid>
      </View>
    </Swipeable>
  );
}

export default MyGigsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    alignItems: "center",
    justifyContent: "center",
    
  },
  leftSwipeItem: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    marginLeft:'50%',
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: "center",
    marginRight:'50%',
  },
  services: {
    margin: 15
  },
  servicescontent: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft:0,
    marginRight:0,
  },
  sevices1: {
    marginTop: 15,
    marginBottom: 15
  },

  serviceImage: {
    width: 150,
    height: 100
  },
  serviceTitle: {
    color: "#000",
    fontSize: 18,
    marginBottom: 5
  },
  servicesubTitle:{
    color: "#000",
    fontSize: 14,
  },
  delete: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#db0909",
    width: "50%",
    height: "100%",
  },
  edit: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#61a508",
    width: "50%",
    height: "100%",
  },
  gridBorder: {
    borderBottomColor: "#fbe9d4",
    borderBottomWidth: 1
  }
});
