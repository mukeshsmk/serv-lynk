import React, { Component } from "react";
import { StyleSheet, View,TouchableOpacity, Text } from "react-native";
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import LinearGradient from 'react-native-linear-gradient';
import HeaderComponent from '../components/Header';
const styles = StyleSheet.create({


  container: {
    backgroundColor: "#04162f",
    height:50,
    marginBottom:5,
  },
  Gradient:{
    width:'100%',
    height:'100%',
  },
  label: {
    color: "#fff",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "#fff",
  },
  AddnewCard:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "#04162f",
    height:50,
  },
  newcard:{
    color:'#eff0f1',
    
  }
});


class PaymentPage extends Component {


  _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
  _onFocus = (field) => console.log("focusing", field);


  render() {
    return (
      <View>
             <LinearGradient colors={['#0c131e','#0258d1']} style={styles.Gradient}>
            <HeaderComponent />
             <View style={styles.container}>
            <LiteCreditCardInput
              autoFocus
              inputStyle={styles.input}

              validColor={"#fff"}
              invalidColor={"red"}
              // placeholderColor={"darkgray"}

              onFocus={this._onFocus}
              onChange={this._onChange} />
              </View>
              <View style={styles.AddnewCard}>
                <TouchableOpacity>
                  <Text  style={styles.newcard}> Add New Card </Text> 
                </TouchableOpacity>
              </View>
         </LinearGradient>

      </View>

    );
    }}

    export default PaymentPage;