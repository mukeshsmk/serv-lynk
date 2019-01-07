import React, {Component} from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Image, ScrollView, } from 'react-native';
import HeaderComponent from '../components/Header';
// import MapView from 'react-native-maps';
import { Col, Row, Grid } from "react-native-easy-grid";
//var MapView = require('react-native-maps');
  class OfferedListing extends Component{

    constructor(props) {
      super(props);
      const { navigation } = this.props;
      const title = navigation.getParam('title', 'Offer listings');
      this.state = { 
        showAlert: false,
        title: title
       };
       
    };

    showAlert = () => {
      this.setState({
      showAlert: true
      });
    };

    hideAlert = () => {
      this.setState({
      showAlert: false
      });
    };
    navigatePage = () =>{
      console.log(this.props.navigation)
      this.setState({
        showAlert: false
        });
        this.props.navigation.navigate('Openjobs')
    } 

    render() {
    const {showAlert} = this.state;
    return (
      <View style={styles.container}>
        <HeaderComponent back='true' title={this.state.title}  navigation={this.props.navigation} />
        <ScrollView>
          <View style={styles.card}>
            <TouchableHighlight
            style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:1 }]}
            >
              <Image source={{ uri:"https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png" }} style={styles.profileImg} />
            </TouchableHighlight>
            <View style={styles.profileDetails}>
              <Text style={styles.profileName}>
              Emma Williams
              </Text>
              <Text style={styles.profileCity}>
              Florida , USA
              </Text>
            </View>
          </View>
          <View style={styles.jobDetails}>
            <Text style={styles.jobContent}>I have been very good cleaning stuff</Text>
            <Text style={styles.jobContent}>I ahve been cleaning over 10+ years</Text>
            <Text style={styles.jobContent}>I ahve  very good attention to detail andwon't leave any stone unterned</Text>
          </View>
          <Grid>
            <Col>
              <Image style={styles.seviceImage} source={require('../images/1.jpg')} />
            </Col>
            <Col style={styles.seviceImage1}>
              <Image style={styles.seviceImage} source={require('../images/2.jpg')} />
            </Col>
            <Col>
              <Image style={styles.seviceImage} source={require('../images/3.jpg')} />
            </Col>
          </Grid>
         
          <View style={styles.mainviewStyle}>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.bottomButtons1}>
                <Text style={styles.footerText}>Contact Provider</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomButtons2} onPress = { ()=>this.setState({showAlert:true})} >
                <Text style={styles.footerText}>Hire Provider</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          customView={
            <View style={styles.alertBox}>
              <Text style={styles.alertTitle}>Cofirmation</Text>
              <View style={{ borderBottomWidth: 1, borderBottomColor: 'skyblue', width:250, marginBottom:10 }} />
              <Text style={styles.alertMessage}>We agree that parties needs to be paid after jobs are completed</Text>
              <Grid style={styles.alertGrid}>
                <Col style={styles.alertcol}>
                  <TouchableOpacity style={styles.alertCancelButton} onPress={() => {
                    this.hideAlert();
                  }}>
                    <Text style={styles.alertButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </Col>
                <Col style={styles.alertcol}>
                <TouchableOpacity style={styles.alertConformButton} onPress={() => {
                    this.navigatePage();
                  }}>
                    <Text style={styles.alertButtonText}>Ok</Text>
                  </TouchableOpacity>
                </Col>
              </Grid>
            </View>
          }
        />
      </View>
      );
    }
  }

export default OfferedListing;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
    },
    card: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileImgContainer: {
      height: 150,
      width: 150,
      borderRadius: 75,
      marginTop: 10,
      marginBottom: 10,
    },
    profileImg: {
      height: 150,
      width: 150,
      borderRadius: 75,
    },
    profileName: {
      fontSize: 22,
      color: '#131313',
    },
    profileCity: {
      fontSize: 12,
      color: '#131313',
      marginLeft: '10%',
    },
    jobDetails: {
      backgroundColor: "#f2f0ee",
      marginBottom: 10,
      marginTop: 10,
      padding: 15,
    },
    jobContent: {
      color: '#313030',
    },
    seviceImage: {
      width: 120,
      height: 120,
    },
    seviceImage1: {
      marginRight: 20,
      marginLeft: 20,
    },
    mainviewStyle: {
      flex: 1,
      flexDirection: 'column',
      marginTop:20
    },
    footer: {
      flex: 0.1,
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: 'row',
      alignItems: 'center',
    },
    bottomButtons1: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      height: 60,
      backgroundColor: '#015ee0',
    },
    bottomButtons2: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      height: 60,
      backgroundColor: '#2b9900',
    },
    footerText:{
      color:'white'
    },
    alertBox:{
      padding:0,
      height:150,
      alignItems:'center'
    },
    alertTitle:{
      margin:5,
      fontSize:16
    },
    alertMessage:{
      textAlign:'center',
      lineHeight:20,
      margin:5
    },
    alertGrid:{
      marginTop:30
    },
    alertcol:{
      margin:0
    },
    alertCancelButton:{
      backgroundColor:"#454749",
      height:30,
      alignItems:'center',
      justifyContent:'center',
      width:"99%"
    },
    alertConformButton:{
      backgroundColor:"#2b9900",
      height:30,
      alignItems:'center',
      justifyContent:'center',
      width:"99%"
    },
    alertButtonText:{
      color:'white'
    }
});