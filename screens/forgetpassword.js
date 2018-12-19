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

export default class ForgetPasswordPage extends Component {
    constructor(props) {
        super(props);
        state = {
          email   : '',
        }
      }
    
      onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed "+viewId);
      }
    
      render() {
        return (
          <View style={styles.container}>
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
                
                <TouchableHighlight style={[styles.buttonContainer, styles.resetButton]} onPress={() => this.onClickListener('reset password')}>
                <Text style={styles.resetText}>Send Reset Email</Text>
                </TouchableHighlight>
        
                <View style={styles.orText}>
                    <Text >OR</Text>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.registerButton]} onPress={() => this.onClickListener('login')}>
                <Text style={styles.loginText}>Login</Text>
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
     