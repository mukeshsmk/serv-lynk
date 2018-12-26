import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Icon } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import HeaderComponent from "../components/Header";

class MyGygsPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent title={ 'My Gigs' } navigation={ this.props.navigation }/>
        <ScrollView>
          <Grid style={styles.gridBorder}>
            <Col>
              
                <View style={styles.sevices}>
                  <Image
                    style={styles.seviceImage}
                    source={require("../images/1.jpg")}
                  />
                </View>
             
            </Col>
            <Col>
             
                <View style={styles.sevices}>
                  <View>
                    <Text style={styles.seviceText}>Errand Running</Text>
                    <Text>Miscellaneous</Text>
                  </View>
                 
                </View>
             
            </Col>
          </Grid>
          
          
          <Grid style={styles.gridBorder}>
          <Col size={30}>
              
                <View style={styles.sevices1}>
                  <Image
                    style={styles.seviceImage1}
                    source={require("../images/1.jpg")}
                  />
                </View>

             
            </Col>
            <Col size={40}>
              
                <View style={styles.sevices}>
                  <View>
                    <Text style={styles.seviceText}>Errand Running</Text>
                    <Text>Miscellaneous</Text>
                  </View>
                 
                </View>
              
            </Col>
            <Col size={30}>
            <TouchableOpacity>
                <View style={styles.delete}>
                  <Icon name ="delete" color='#fff' size={40} />
                </View>
              </TouchableOpacity>
            </Col>
          </Grid>

            <Grid style={styles.gridBorder}>
            <Col size={30}>
            <TouchableOpacity>
                <View style={styles.edit}>
                  <Icon name ="edit" color='#fff' size={40} />
                </View>
              </TouchableOpacity>
            </Col>
            <Col size={30}>
              
                <View style={styles.sevices1}>
                  <Image
                    style={styles.seviceImage2}
                    source={require("../images/1.jpg")}
                  />
                </View>
             
            </Col>
            <Col size={40}>
              
                <View style={styles.sevices}>
                  <View>
                    <Text style={styles.seviceText}>Errand Running</Text>
                    <Text>Miscellaneous</Text>
                  </View>
                 
                </View>
             
            </Col>
           
          </Grid>


        </ScrollView>
      </View>
    );
  }
}
export default MyGygsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sevices:{
    margin:15,
  },
  sevices1:{
    marginTop:15,
    marginBottom:15,
  },

  seviceImage: {
    width: 150,
    height: 100,
  },
  seviceImage1: {
    width: 100,
    height: 100,
  },
  seviceImage2: {
    width: 100,
    height: 100,
    marginLeft:15
  },
  seviceText:{
    color:'#000',
    fontSize: 16,
  },
  sevicesRate:{
  backgroundColor:'#fff',
  fontWeight:'bold', 
  },
  delete:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#db0909',
    width:'100%',
    height:'100%',
  },
  edit:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#61a508',
    width:'100%',
    height:'100%',
  },
  gridBorder:{
    borderBottomColor: '#fbe9d4',
    borderBottomWidth: 1,
  }
});
