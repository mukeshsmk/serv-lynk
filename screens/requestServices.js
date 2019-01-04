import React, { Component } from "react";
import { 	View,	Text,	StyleSheet, KeyboardAvoidingView, ScrollView, Image, TouchableOpacity } from "react-native";
import DatePicker from 'react-native-datepicker'
import LinearGradient from 'react-native-linear-gradient';
import { Alert, TextInput, } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Col, Row, Grid } from "react-native-easy-grid";
import HeaderComponent from '../components/Header'

class Requestservices extends Component {
  constructor(props){
    super(props);
    this.inputRefs = {};

    this.state = {
      date:"2016-05-15",
      favColor: undefined,
      items: [{
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
      items2: [{
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
        items: this.state.items.concat([{
          value: 'purple',
          label: 'Purple'
        }]),
      });
    }, 2500);
    }
  render() {
    return (
      <View>
				<LinearGradient colors={['#015cda','#0c1523']} style={styles.Gradient}>
          <HeaderComponent title={ 'Request Service' } navigation={ this.props.navigation }/>
          <KeyboardAvoidingView >
						<ScrollView>
							<View style={styles.container}>
							<View style={styles.paddingVerticalstyle} />
								< RNPickerSelect
								placeholder = {
									{
										label: 'Select a Category',
										value: null,
										color: '#fff',
										backgroundColor: 'transparent',
									}
								}
								items = {
									this.state.items2
								}
								onValueChange = {
									(value) => {
										this.setState({
											favSport: value,
										});
									}
								}
								onUpArrow = {
									() => {
										this.inputRefs.picker.togglePicker();
									}
								}
								onDownArrow = {
									() => {
										this.inputRefs.company.focus();
									}
								}
								style = {
									{ ...pickerSelectStyles
									}
								}
								value = {
									this.state.favSport
								}
								ref = {
									(el) => {
										this.inputRefs.picker2 = el;
									}
								}
								useNativeAndroidPickerStyle = {
									false
								}
								/>
								<View style={styles.paddingVerticalstyle} />
								< RNPickerSelect
								placeholder = {
									{
										label: 'Select a SubCategory',
										value: null,
										color: '#fff',
									}
								}
								items = {
									this.state.items2
								}
								onValueChange = {
									(value) => {
										this.setState({
											favSport: value,
										});
									}
								}
								onUpArrow = {
									() => {
										this.inputRefs.picker.togglePicker();
									}
								}
								onDownArrow = {
									() => {
										this.inputRefs.company.focus();
									}
								}
								style = {
									{ ...pickerSelectStyles
									}
								}
								value = {
									this.state.favSport
								}
								ref = {
									(el) => {
										this.inputRefs.picker2 = el;
									}
								}
								useNativeAndroidPickerStyle = {
									false
								}
								/>
                <View style={styles.paddingVerticalstyle} />
                <Grid>
                  <Col style={styles.dateCol}>
                  <DatePicker
                    style={styles.dateCol}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={customDatestyle}
                    iconSource={require('../images/calendar.png')}
                    onDateChange={(date) => {this.setState({date: date})}}
                  />
                  </Col>
                  <Col>
                  < TextInput
                    placeholder = "Willing to Pay"
                    placeholderTextColor = "#c7c8ca"
                    ref = {
                      (el) => {
                        this.inputRefs.company = el;
                      }
                    }
                    returnKeyType = "go"
                    enablesReturnKeyAutomatically
                    style = {
                      styles.payText
                    }
                    onSubmitEditing = {
                      () => {
                        Alert.alert('Success', 'Form submitted', [{
                          text: 'Okay',
                          onPress: null
                        }]);
                      }
                    }
                    />
                  </Col>
                </Grid>
								<View style={styles.paddingVerticalstyle} />
								< TextInput
								multiline
								placeholder = "Add a Service Details"
								placeholderTextColor = "#c7c8ca"
								ref = {
									(el) => {
										this.inputRefs.company = el;
									}
								}
								returnKeyType = "go"
								enablesReturnKeyAutomatically
								style = {
									styles.inputBox
								}
								onSubmitEditing = {
									() => {
										Alert.alert('Success', 'Form submitted', [{
											text: 'Okay',
											onPress: null
										}]);
									}
								}
								/>
							</View>
							<View style={styles.paddingVerticalstyle} />
							<TouchableOpacity style={styles.uploadForm}>
								<Image
									style={styles.uploadImage}
									source={require("../images/cloud-upload.png")}
								/>
								<Text style={styles.uploadText}>Upload Image</Text>
							</TouchableOpacity>
							<Grid style={styles.gridBorder}>
								<Col style={styles.rightMargin}>
									<TouchableOpacity style={styles.uploadFormcol}>
										<Image
											style={styles.uploadImagecol}
											source={require("../images/cloud-upload.png")}
										/>
										<Text style={styles.uploadTextcol}>Upload Image</Text>
									</TouchableOpacity>
								</Col>
								<Col style={styles.leftMargin}>
									<TouchableOpacity style={styles.uploadFormcol}>
										<Image
											style={styles.uploadImagecol}
											source={require("../images/cloud-upload.png")}
										/>
										<Text style={styles.uploadTextcol}>Upload Image</Text>
									</TouchableOpacity>
								</Col>
							</Grid>
							<View style={styles.paddingVerticalstyle} />
							<TouchableOpacity style={styles.postButton}>
								<Text style={styles.postButtonText}>Post Listing</Text>
							</TouchableOpacity>
						</ScrollView>
					</KeyboardAvoidingView>
				</LinearGradient>
			</View>
    );
  }
}
export default Requestservices;
const customDatestyle  = StyleSheet.create({

    dateInput:{
      borderWidth: 0
    },
    dateText:{
      color: '#c7c8ca'
    },
    dateIcon:{
      width:24,
      height:24
    }
})
const styles = StyleSheet.create({
	Gradient: {
		width:'100%',
		height:'100%',
	},
	container: {
		paddingTop: 30,
		marginHorizontal:20,
		justifyContent: 'center',
		paddingHorizontal: 10,
  },
	inputBox: {
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
	paddingVerticalstyle: {
		paddingVertical:10
  },
  dateCol:{
    fontSize: 14,
		height:40,
		borderColor: 'transparent',
    borderRadius: 2,
		backgroundColor: '#3573c9',
    color: '#fff',
    
  },
  payText:{
    fontSize: 14,
		height:40,
		borderColor: 'transparent',
    borderRadius: 2,
    marginLeft:10,
		backgroundColor: '#3573c9',
    color: '#fff',
    paddingLeft:10,
  },
	uploadImage:{
		width: 100,
		height: 100,
		marginHorizontal: 15,
		marginTop:15
	},
	uploadForm:{
		marginHorizontal: 30,
		backgroundColor:'#3d577a',
		justifyContent: 'center',
		alignItems: 'center',
		height: 160,
	},
	uploadText:{
		color:'white',
		fontSize:16,
		marginBottom:30,
	},
	uploadTextcol:{
		color:'white',
		fontSize:10,
		marginBottom:30,
	},
	gridBorder:{
		marginHorizontal: 30,
	},
	uploadFormcol:{
		backgroundColor:'#3d577a',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop:15,
	},
	uploadImagecol:{
		width: 50,
		height: 50,
		marginHorizontal: 15,
		marginTop:15
	},
	rightMargin:{
		marginRight:10,
	},
	leftMargin:{
		marginLeft:10
	},
	postButton:{
		height:60,
		backgroundColor:'#5c9435',
		justifyContent: 'center',
		alignItems: 'center',
	},
	postButtonText:{
		fontSize:22,
		color:'white'
	}
});
const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontSize: 14,
		paddingTop: 8,
		height:40,
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
