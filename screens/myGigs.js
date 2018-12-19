import React, { Component } from "react";
import { 	View,	Text,	StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import { Container,Body } from "native-base";

import HeaderComponent from '../components/Header'

class Mygigs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Container>
          <HeaderComponent title={ 'Mygigs' } navigation={ this.props.navigation }/>
          <Body>
            <KeyboardAvoidingView >
              <ScrollView>
                <Text>Mygigs</Text>
              </ScrollView>
            </KeyboardAvoidingView>
          </Body>
        </Container>
      </View>
    );
  }
}
export default Mygigs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
});