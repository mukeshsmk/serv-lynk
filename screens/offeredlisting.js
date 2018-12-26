import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Container, Header, Content, Footer, Title} from 'native-base';
import Dialog from "react-native-dialog";
import {
    StyleSheet,
    Text,
    View,
    Avatar,
    TextInput,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ScrollView,
    Alert,
  } from 'react-native';
import HeaderComponent from '../components/Header';
// import MapView from 'react-native-maps';
import { Col, Row, Grid } from "react-native-easy-grid";


var MapView = require('react-native-maps');

export default class OfferedListingPage extends Component {
      state = {
        dialogVisible: true
      };
    
      showDialog = () => {
        this.setState({ dialogVisible: true });
      };
    
      handleCancel = () => {
        this.setState({ dialogVisible: false });
      };
    
      handleDelete = () => {
        // The user has pressed the "Delete" button, so here you can do your own logic.
        // ...Your logic
        this.setState({ dialogVisible: false });
      };
     
    
      render() {
        return (
            
            <View style={styles.container}>
               
                    <HeaderComponent />
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

                    <View style={styles.jobDetails}>
                        <Text style={styles.jobContent}>I have been very good cleaning stuff</Text>
                        <Text style={styles.jobContent}>I ahve been cleaning over 10+ years</Text>
                        <Text style={styles.jobContent}>I ahve  very good attention to detail andwon't leave any stone unterned</Text>
                     </View>






                <View style={styles.mainviewStyle}>
                    <View style={styles.footer}>
                    <TouchableOpacity style={styles.bottomButtons1}>
                        <Text style={styles.footerText}>Contact Provider</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomButtons2} >
                        <Text style={styles.footerText}>Hire Provider</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                  

                  <View>
                      <TouchableOpacity onPress={this.showDialog}>
                        <Text>Show Dialog</Text>
                      </TouchableOpacity>
                      <Dialog.Container visible={true}>
                        <Dialog.Title>Account delete</Dialog.Title>
                        <Dialog.Description>
                          Do you want to delete this account? You cannot undo this action.
                        </Dialog.Description>
                        <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                        <Dialog.Button label="Delete" onPress={this.handleDelete} />
                      </Dialog.Container>
                    </View>

                  {/* <MapView
    initialRegion={region}
  /> */}

                     </ScrollView>
            </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
        container:{
            flex:1,
            width:'100%',
            height:'100%',
            backgroundColor:'#fff',
        },
        card: {
        alignItems:'center',
        justifyContent:'center',
      },
        profileImgContainer: {
            height: 120,
            width: 120,
            borderRadius: 100,
            marginTop:10,
            marginBottom:10,
          },
          profileImg: {
            height: 120,
            width: 120,
            borderRadius: 100,
          },
          profileName:{
            fontSize:22,
            color: '#131313',
          },
          profileCity:{
            fontSize:12,
            color: '#131313',
            marginLeft:'10%',
          },
          jobDetails:{
              backgroundColor:"#f2f0ee",
              marginBottom:10,
              marginTop:10,
              padding:15,
          },
          jobContent:{
            color:'#313030',
          },
          seviceImage: {
            width: 120,
            height: 120,
          },
          seviceImage1:{
            marginRight:20,
            marginLeft:20,
          },
          mainviewStyle: {
            flex: 1,
            flexDirection: 'column',
          },
          footer: {
            position: 'absolute',
            flex:0.1,
            left: 0,
            right: 0,
            bottom: 0,
            flexDirection:'row',
            alignItems:'center',
          },
          bottomButtons1: {
            alignItems:'center',
            justifyContent: 'center',
            flex:1,
            height:60,
            backgroundColor:'#015ee0',
          },
          bottomButtons2: {
            alignItems:'center',
            justifyContent: 'center',
            flex:1,
            height:60,
            backgroundColor:'#2b9900',
          },
          footerText: {
            color:'white',
            fontWeight:'bold',
            alignItems:'center',
          },
        
        });