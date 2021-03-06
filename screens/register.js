import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Image,
  KeyboardAvoidingView
} from "react-native";
import firebase from "react-native-firebase";
import Loading from "../components/loading";

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      mobile: "",
      loading: false
    };
  }
  //Show Loader function
  showLoading() {
    this.setState({
      loading: true
    });
  }
  //Hide Loader function
  hideLoading() {
    this.setState({
      loading: false
    });
  }
  //writeUserData to dB using Firebase
  writeUserData() {
    const { navigate } = this.props.navigation;
    var email = this.state.email;
    var fname = this.state.fname;
    var lname = this.state.lname;
    var mobile = this.state.mobile;
    firebase
      .database()
      .ref("Users/")
      .push({
        email,
        fname,
        lname,
        mobile
      })
      .then(data => {
        //success callback
        console.log("data ", data);
        this.hideLoading();
        navigate("drawerNavigation");
      })
      .catch(error => {
        //error callback
        this.hideLoading();
        console.log("error ", error);
      });
  }
  //signup using Firebase
  signup() {
    this.showLoading();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        user => {
          console.log(user);
          this.writeUserData();
        },
        error => {
          this.hideLoading();
          alert(error.message);
        }
      );
  }
  //Navigate to Login screen
  login() {
    this.props.navigation.navigate("Login");
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView>
          <ScrollView>
            <View style={styles.logocontainer}>
              <Image
                style={styles.logo}
                source={require("../images/logo.jpg")}
              />
            </View>
            <View style={styles.loginTitle}>
              <Text style={styles.loginTitleText}>
                Let's Create Your Account
              </Text>
            </View>
            <View style={styles.loginContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholderTextColor="#a19797"
                  style={styles.inputs}
                  placeholder="First Name"
                  keyboardType="default"
                  underlineColorAndroid="transparent"
                  onChangeText={fname => this.setState({ fname })}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholderTextColor="#a19797"
                  style={styles.inputs}
                  placeholder="Last Name"
                  keyboardType="default"
                  underlineColorAndroid="transparent"
                  onChangeText={lname => this.setState({ lname })}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholderTextColor="#a19797"
                  style={styles.inputs}
                  placeholder="Email"
                  keyboardType="email-address"
                  underlineColorAndroid="transparent"
                  onChangeText={email => this.setState({ email })}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholderTextColor="#a19797"
                  placeholder="Password"
                  secureTextEntry={true}
                  underlineColorAndroid="transparent"
                  onChangeText={password => this.setState({ password })}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholderTextColor="#a19797"
                  placeholder="Mobile"
                  keyboardType="phone-pad"
                  underlineColorAndroid="transparent"
                  onChangeText={mobile => this.setState({ mobile })}
                />
              </View>
              <TouchableHighlight
                style={[styles.buttonContainer, styles.loginButton]}
                onPress={() => this.signup()}
              >
                <Text style={styles.loginText}>Register Now</Text>
              </TouchableHighlight>
              <View style={styles.orText}>
                <Text style={styles.orTextText}>OR</Text>
              </View>
              <TouchableHighlight
                style={[styles.buttonContainer, styles.registerButton]}
                onPress={() => this.login()}
              >
                <Text style={styles.loginText}>Login</Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        {this.state.loading && <Loading />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    width: "100%"
  },
  logocontainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%"
  },
  loginTitle: {
    width: "100%",
    height: 40,
    backgroundColor: "#0065f3",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  loginTitleText: {
    color: "#fff"
  },
  loginContainer: {
    marginTop: "8%",
    marginBottom: "8%",
    alignItems: "center"
  },
  logo: {
    width: "90%",
    height: 120,
    marginTop: 10,
    marginBottom: 10
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 3,
    borderBottomWidth: 1,
    color: "#998e8e",
    width: 250,
    height: 35,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 40,
    marginLeft: 10,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  buttonContainer: {
    height: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    borderRadius: 2
  },
  forgetPassword: {
    alignItems: "center",
    alignSelf: "flex-end"
  },
  loginButton: {
    backgroundColor: "#12a70b",
    borderRadius: 3
  },
  orText: {
    marginTop: "2%",
    marginBottom: "2%",
    alignItems: "center"
  },
  orTextText: {
    color: "#918E8E"
  },
  registerButton: {
    backgroundColor: "#0065f3",
    borderRadius: 3
  },
  loginText: {
    color: "white"
  }
});
