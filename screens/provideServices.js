import React, { Component } from "react";
import { 	View,	Text,	StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import { Container,Body } from "native-base";
import LinearGradient from 'react-native-linear-gradient';
import HeaderComponent from '../components/Header'
import { Alert, TextInput, } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

class Provideservices extends Component {
  constructor(props) {
    super(props);

    this.inputRefs = {};

    this.state = {
        favColor: undefined,
        items: [
            {
                label: 'Red',
                value: 'red',
            },
            {
                label: 'Orange',
                value: 'orange',
            },
            {
                label: 'Blue',
                value: 'blue',
            },
        ],
        favSport: undefined,
        items2: [
            {
                label: 'Football',
                value: 'football',
            },
            {
                label: 'Baseball',
                value: 'baseball',
            },
            {
                label: 'Hockey',
                value: 'hockey',
            },
        ],
    };
}

componentDidMount() {
  // if the component is using the optional `value` prop, the parent
  // has the abililty to both set the initial value and also update it
  setTimeout(() => {
      this.setState({
          favColor: 'red',
      });
  }, 1000);

  // parent can also update the `items` prop
  setTimeout(() => {
      this.setState({
          items: this.state.items.concat([{ value: 'purple', label: 'Purple' }]),
      });
  }, 2500);
}

  render() {
    return (
      <View>
         <LinearGradient colors={['#015cda','#0c1523']} style={styles.Gradient}>
          <HeaderComponent title={ 'Provide Service' } navigation={ this.props.navigation }/>
          
            <KeyboardAvoidingView >
              <ScrollView>
              <View style={styles.container}>
              
                <View style={{ paddingVertical: 5 }} />

                <RNPickerSelect
                    placeholder={{
                        label: 'Select a Category',
                        value: null,
                        color: '#fff',
                        backgroundColor:'transparent',
                    }}
                    items={this.state.items2}
                    onValueChange={(value) => {
                        this.setState({
                            favSport: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.picker.togglePicker();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.company.focus();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.favSport}
                    ref={(el) => {
                        this.inputRefs.picker2 = el;
                    }}
                    useNativeAndroidPickerStyle={false}
                />

                   <View style={{ paddingVertical: 5 }} />


                  <RNPickerSelect
                    placeholder={{
                        label: 'Select a SubCategory',
                        value: null,
                        color: '#fff',
                    }}
                    items={this.state.items2}
                    onValueChange={(value) => {
                        this.setState({
                            favSport: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.picker.togglePicker();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.company.focus();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.favSport}
                    ref={(el) => {
                        this.inputRefs.picker2 = el;
                    }}
                    useNativeAndroidPickerStyle={false}
                />


                <View style={{ paddingVertical: 5 }} />

                
                <TextInput
                    multiline 
                    placeholder="Add a Service Details"
                    placeholderTextColor="#fff"
                    paddingHorizontal="10"
                   

                    ref={(el) => {
                        this.inputRefs.company = el;
                    }}
                    returnKeyType="go"
                    enablesReturnKeyAutomatically
                    style={pickerSelectStyles.inputIOS}
                    onSubmitEditing={() => {
                        Alert.alert('Success', 'Form submitted', [{ text: 'Okay', onPress: null }]);
                    }}
                />
            </View>
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
  },
  container: {
    paddingTop: 30,
    justifyContent: 'center',
    paddingHorizontal: 10,
},
});

const pickerSelectStyles = StyleSheet.create({
inputIOS: {
    fontSize: 14,
    paddingTop: 8,
    height:150,
    paddingHorizontal: 10,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 2,
    backgroundColor: '#3573c9',
    color: '#fff',
},
inputAndroid: {
    fontSize: 14,
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 2,
    backgroundColor: '#3573c9',
    color: '#fff',
},
});
