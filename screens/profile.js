import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
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
    Alert,
  } from 'react-native';
  import { Icon } from 'react-native-elements';
import HeaderComponent from '../components/Header';


export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
        
      }
     
    
      render() {
        return (
            
            <View>
               <LinearGradient colors={['#0c131e','#0258d1']} style = { styles.container }>
                <HeaderComponent title={ 'Profile' } navigation={ this.props.navigation }/>

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

                     <View style={styles.accountDetails}>
                        <View style={styles.accountInfo}>
                        
                            <TouchableOpacity>
                                <Text  style={styles.accountText}> Account Information > </Text> 
                               
                            </TouchableOpacity>
        
                        </View>
                        <View style={styles.accountInfo}>
                            <TouchableOpacity>
                                <Text  style={styles.accountText}> Change Password  ></Text>
                            </TouchableOpacity>
                        </View>
                      
          
        
                     </View>

                   

            </LinearGradient>
            </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
        container:{
            width:'100%',
            height:'100%',
        },
        card: {
        alignItems:'center',
        justifyContent:'center',
      },
        profileImgContainer: {
            height: 150,
            width: 150,
            borderRadius: 100,
            marginTop:10,
            marginBottom:10,
          },
          profileImg: {
            height: 150,
            width: 150,
            borderRadius: 100,
          },
          profileName:{
            fontSize:22,
            color: '#fff',
          },
          profileCity:{
            fontSize:12,
            color: '#fff',
            marginLeft:'10%',
          },
          accountDetails:{
            marginTop:50,
            marginBottom:50,
          },
          accountInfo:{
              backgroundColor:'#02204ad1',
              color:'#fff',
              marginBottom:2,
              paddingTop:15,
              paddingBottom:15,
              paddingLeft:15,
          },
          accountText:{
            color:'#fff',
          }
        });