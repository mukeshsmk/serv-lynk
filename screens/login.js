import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
  } from 'react-native';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        state = {
          email   : '',
          password: '',
        }
      }
    
      onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed "+viewId);
      }
    
      render() {
        return (
          <View style={styles.container}>
            <View style={styles.logocontainer}>
            <Image style={{width:'90%',height:100}} source={require('../images/logo.jpg')} />
                
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
        
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
                <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>
        
    
                <Text style={ styles.forgetPassword } onPress={() => this.onClickListener('restore_password')}>Forgot Password?</Text>

                <View style={styles.orText}>
                    <Text >OR</Text>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.registerButton]} onPress={() => this.onClickListener('register')}>
                <Text style={styles.loginText}>Register</Text>
                </TouchableHighlight>
            </View>
            </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
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
        marginTop:'15%',
        marginBottom:'15%',
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
     