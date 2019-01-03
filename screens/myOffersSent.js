import React, { Component } from "react";
import { View, Text, StyleSheet, Image,TouchableHighlight, ScrollView,TouchableOpacity,Button} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

import HeaderComponent from "../components/Header";

class MyoffersSentPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Grid style={styles.gridBorder}>
              <Col size={20} style={styles.offer}>
                <View>
                  <Image
                    style={styles.offerImage}
                    source={require("../images/2.jpg")}
                  />
                </View>
              </Col>
              <Col size={75} style={styles.offer1}>
                <View>
            
                    <Text style={styles.offerTitle}>Cleaning</Text>
                    <Text style={styles.subTitle}>House Cleaning</Text>
                    <TouchableOpacity style={styles.waitingButton}>
                        <Text style={styles.fullWidthButtonText}>Waiting for response</Text>
                    </TouchableOpacity> 
                  </View>
      
              </Col>
            </Grid>

                  <Grid style={styles.gridBorder}>
              <Col size={20} style={styles.offer}>
                <View>
                  <Image
                    style={styles.offerImage}
                    source={require("../images/1.jpg")}
                  />
                </View>
              </Col>
              <Col size={75} style={styles.offer1}>
                <View>
            
                    <Text style={styles.offerTitle}>Cleaning</Text>
                    <Text style={styles.subTitle}>House Cleaning</Text>
                    <TouchableOpacity style={styles.acceptedButton}>
                        <Text style={styles.accepted}>Accepted</Text>
                    </TouchableOpacity> 
                  </View>
      
              </Col>
            </Grid>


          </View>
        </ScrollView>
      </View>
    );
  }
}
export default MyoffersSentPage;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  offer:{
    margin:10,
  },
  offer1:{
    marginBottom:10,
    marginTop:10,
    marginLeft:20,
  },
  offerImage: {
    width: 90,
    height: 75,
  },
  offerTitle:{
    fontSize:17,
    color:'#0f0f0f'
  },
  subTitle:{
    fontSize:14,
    color:'#1c1c1c',
  },
  waitingButton: {
    backgroundColor: '#d6d406',
    width:'45%',
    height:25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5,
    marginBottom:5,
  },
  fullWidthButtonText: {
    fontSize:10,
    color: '#282800'
  },
  accepted: {
    fontSize:10,
    color: '#282800'
  },
  acceptedButton:{
    backgroundColor: '#35a20f',
    width:'45%',
    height:25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5,
    marginBottom:5,
  },
    gridBorder:{
    borderBottomColor: '#fbe9d4',
    borderBottomWidth: 1,
  }
});
