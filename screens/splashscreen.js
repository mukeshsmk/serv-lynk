import React, { Component } from "react";
import { 	View,	Image, 	StyleSheet } from "react-native";


class SplashScreenPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.splashcontainer}>
            <Image style={styles.splashlogo} source={require('../images/logo.jpg')} />
        </View>
      </View>
    );
  }
}
export default SplashScreenPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  splashcontainer:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    width:'100%',
  },
  splashlogo:{
    width:'90%',
    height:120 ,
    marginTop:'60%',
   
  }
});