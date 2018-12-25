import React, { Component } from "react";
import { 	View,	Text,	StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import { Container,Body } from "native-base";
import LinearGradient from 'react-native-linear-gradient';
import HeaderComponent from '../components/Header'

class Provideservices extends Component {
  render() {
    return (
      <View>
         <LinearGradient colors={['#015cda','#0c1523']} style={styles.Gradient}>
          <HeaderComponent />
          
            <KeyboardAvoidingView >
              <ScrollView>
                <Text>Provide services</Text>
              </ScrollView>
            </KeyboardAvoidingView>
            </LinearGradient>
      </View>
    );
  }
}
export default Provideservices;

const styles = StyleSheet.create({
  Gradient: {
    width:'100%',
    height:'100%',
  }
});