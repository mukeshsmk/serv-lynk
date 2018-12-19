import React, { Component } from "react";
import { 	View,	Text,	StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import { Container,Body } from "native-base";

import HeaderComponent from '../components/Header'

class Myrequests extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Container>
          <HeaderComponent title={ 'Myrequests' } navigation={ this.props.navigation }/>
          <Body>
            <KeyboardAvoidingView >
              <ScrollView>
                <Text>Myrequests</Text>
              </ScrollView>
            </KeyboardAvoidingView>
          </Body>
        </Container>
      </View>
    );
  }
}
export default Myrequests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
});