import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import firebase from 'firebase';

import Loading from '../components/loading'

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
      loading:false
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
  //Login function using firebase 
  login(){
    this.showLoading();
    const { navigate } = this.props.navigation;
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
    .then( (user) => {
      this.hideLoading();
      navigate('drawerNavigation');
      console.log(user)
    },(error) => {
      this.hideLoading();
      alert(error.message)
    })
  }
  //navigate to screens
  navigateScreen = (viewId) => {
    const { navigate } = this.props.navigation;
    navigate(viewId)
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
              <Text style={styles.loginTitleText}>User Login</Text>
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
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                placeholderTextColor="#a19797"
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({password})}/>
              </View>
              <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.login()}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableHighlight>
              <Text style={ styles.forgetPassword } onPress={() => this.navigateScreen('ForgotPassword')}>Forgot Password?</Text>
                <View style={styles.orText}>
                <Text >OR</Text>
              </View>
              <TouchableHighlight style={[styles.buttonContainer, styles.registerButton]} onPress={() => this.navigateScreen('Register')}>
                <Text style={styles.loginText}>Register</Text>
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
    marginTop:Platform.OS === 'ios'? 50 : 0,
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
  logo:{
    width:'90%',
    height:120 ,
    marginTop:10,
    marginBottom:10,
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
    marginTop:'15%',
    alignItems: 'center',
    marginBottom:'15%',
    marginLeft:'5%',
    marginRight:'5%',
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
  loginButton: {
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
  loginText: {
    color: 'white',
  }
});
