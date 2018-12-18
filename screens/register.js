import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image, Alert } from 'react-native';
import firebase from 'firebase';

export default class RegisterPage extends Component {
  constructor(props) {
      super(props);
      state = {
        fname :'',
        lname :'',
        email   : '',
        password: '',
        mobile:'',
      }
    } 
  
    signup(){
      const { navigate } = this.props.navigation;
      var email = this.state.email;
      var fname = this.state.fname;
      var lname = this.state.lname;
      var mobile = this.state.mobile;
      firebase.database().ref('Users/').push({
        email,
        fname,
        lname,
        mobile
      }).then((data)=>{
        //success callback
        console.log('data ' , data)
        //Alert.alert("Alert", "Button pressed "+JSON.stringify(data));
        navigate('drawerNavigation');
      }).catch((error)=>{
        //error callback
        console.log('error ' , error)
        })
      }
      onClickListener() {

      }
      writeUserData(){
        
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then( (user) => {
          console.log(user)
          this.signup()
        },(error) => {
          alert(error.message)
        })
      }
    
      render() {
              
        return (
          <View style={styles.container}>
            <View style={styles.logocontainer}>
            <Image  style={styles.logo} source={require('../images/logo.jpg')} />
                
            </View>
            <View style={styles.loginTitle}>
                <Text style={styles.loginTitleText}>Let's Create User Account</Text>
            </View>
            <View style={styles.loginContainer}>
            
                <View style={styles.inputContainer}>
                <TextInput placeholderTextColor="#a19797"
                    style={styles.inputs}
                    placeholder="First Name"
                    keyboardType="default"
                    underlineColorAndroid='transparent'
                    onChangeText={(fname) => this.setState({fname})}/>
                </View>

                <View style={styles.inputContainer}>
                <TextInput placeholderTextColor="#a19797"
                    style={styles.inputs}
                    placeholder="Last Name"
                    keyboardType="default"
                    underlineColorAndroid='transparent'
                    onChangeText={(lname) => this.setState({lname})}/>
                </View>

                <View style={styles.inputContainer}>
                <TextInput placeholderTextColor="#a19797" 
                    style={styles.inputs}
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

                <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholderTextColor="#a19797"
                    placeholder="Mobile"
                    keyboardType="phone-pad"
                    underlineColorAndroid='transparent'
                    onChangeText={(mobile) => this.setState({mobile})}/>
                </View>
        
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.writeUserData('register')}>
                <Text style={styles.loginText}>Register</Text>
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
        marginTop:'8%',
        marginBottom:'8%',
      },
      logo:{
        width:'90%',
        height:120 ,
        marginTop:10,
        marginBottom:10,
      },
      inputContainer: {
          borderBottomColor: '#F5FCFF',
          backgroundColor: '#FFFFFF',
          borderRadius:2,
          borderBottomWidth: 1,
          color:'#998e8e',
          width:250,
          height:35,
          marginBottom:12,
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
        marginTop:'2%',
        marginBottom:'2%',
        alignItems: 'center',
      },
      registerButton: {
        backgroundColor: '#0065f3',
      },
      loginText: {
        color: 'white',
      }
    });
     