import React, { Component } from "react";
import { View, Text, StyleSheet, Image,TouchableHighlight, ScrollView,TouchableOpacity,Button} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

import HeaderComponent from "../components/Header";

class MyoffersReceivePage extends Component {
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
                    <Grid> 
                        <Col size={40}>
                        <TouchableOpacity style={styles.acceptButton}>
                        <Text style={styles.fullWidthButtonText}>Accept</Text>
                    </TouchableOpacity>
                        </Col>
                        <Col size={40}>
                        <TouchableOpacity style={styles.declineButton}>
                        <Text style={styles.fullWidthButtonText}>Decline</Text>
                    </TouchableOpacity>
                        </Col>
                        <Col size={20}>
                        </Col>
                    </Grid>
                  </View>
      
              </Col>
            </Grid>

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
                    <Grid>
                        <Col size={40}>
                        <TouchableOpacity style={styles.acceptButton}>
                        <Text style={styles.fullWidthButtonText}>Accept</Text>
                    </TouchableOpacity>
                        </Col>
                        <Col size={40}>
                        <TouchableOpacity style={styles.declineButton}>
                        <Text style={styles.fullWidthButtonText}>Decline</Text>
                    </TouchableOpacity>
                        </Col>
                        <Col size={20}>
                        </Col>
                    </Grid>
                  </View>
      
              </Col>
            </Grid>

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
                    <Grid>
                        <Col size={40}>
                        <TouchableOpacity style={styles.acceptButton}>
                        <Text style={styles.fullWidthButtonText}>Accept</Text>
                    </TouchableOpacity>
                        </Col>
                        <Col size={40}>
                        <TouchableOpacity style={styles.declineButton}>
                        <Text style={styles.fullWidthButtonText}>Decline</Text>
                    </TouchableOpacity>
                        </Col>
                        <Col size={20}>
                        </Col>
                    </Grid>
                  </View>
      
              </Col>
            </Grid>

            

          </View>
        </ScrollView>
      </View>
    );
  }
}
export default MyoffersReceivePage;

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
    fontSize:18,
    color:'#0f0f0f'
  },
  subTitle:{
    fontSize:14,
    color:'#1c1c1c',
    marginBottom:5
  },
  
  fullWidthButtonText: {
    fontSize:10,
    color: '#282800'
  },
  accepted: {
    fontSize:10,
    color: '#282800'
  },
  acceptButton:{
    backgroundColor: '#35a20f',
    width:'85%',
    height:25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5,
    marginBottom:5,
  },
  declineButton:{
    backgroundColor: '#f6260b',
    width:'85%',
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
