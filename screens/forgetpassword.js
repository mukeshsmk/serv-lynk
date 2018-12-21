import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import firebase from 'react-native-firebase';

import Loading from '../components/loading';

export default class ForgetPasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      loading: false
    }
  }
  //Show Loader function
  showLoading() {
    this.setState({loading: true})
  }
  //Hide Loader function
  hideLoading() {
    this.setState({loading: false})
  }
  //this function helps to send reset link if email is registered
  resetPassword() {
    this.showLoading();
    firebase.auth().sendPasswordResetEmail(this.state.email)
    .then((data)=> {
      this.hideLoading()
      alert("Reset link has been sent to your mailbox")
    })
    .catch((err)=>{
      this.hideLoading()
      alert(err)
    })
  }
  //Navigate to Login screen
  login(){
    this.props.navigation.navigate('Login');
  }
  
  render() {
    return (
    <View style={styles.container}>
      <KeyboardAvoidingView >
        <ScrollView>
          <View style={styles.logocontainer}>
            <Image style={styles.logo} source={require('../images/logo.jpg')} />
          </View>
          <View style={styles.loginTitle}>
            <Text style={styles.loginTitleText}>Forgot password</Text>
          </View>
          <View style={styles.loginContainer}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
              placeholderTextColor="#a19797"
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
            </View>
            <TouchableHighlight style={[styles.buttonContainer, styles.resetButton]} onPress={() => this.resetPassword()}>
              <Text style={styles.resetText}>Send Reset Email</Text>
            </TouchableHighlight>
            <View style={styles.orText}>
              <Text >OR</Text>
            </View>
            <TouchableHighlight style={[styles.buttonContainer, styles.registerButton]} onPress={() => this.login()}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      {this.state.loading &&
        <Loading />      
      }
    </View>
    );
  }
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#DCDCDC',
  },
  logocontainer:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    width:'100%',
  },
  loginTitle:{
    width:'100%',
    height:40,
    backgroundColor: '#0065f3',
    color:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTitleText:{
    color:'#fff',
  },
  loginContainer:{
    alignItems: 'center',
    marginTop:'15%',
    marginBottom:'15%',
  },
  logo:{
    width:'90%',
    height:120 ,
    marginTop:50,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:2,
    borderBottomWidth: 1,
    color:'#998e8e',
    width:250,
    height:40,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',
  },
  inputs:{
    height:40,
    marginLeft:10,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  buttonContainer: {
    height:35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:250,
    borderRadius:2,
  },
  forgetPassword:{
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  resetButton: {
    backgroundColor: "#12a70b",
  },
  orText:{
    marginTop:'5%',
    marginBottom:'5%',
    alignItems: 'center',
  },
    registerButton: {
    backgroundColor: '#0065f3',
  },
  resetText: {  
    color: 'white',
  },
  loginText:{
    color: 'white',
  }
});
