import React, { Component } from "react";
import { View, Text, StyleSheet, Image,TouchableHighlight, ScrollView,TouchableOpacity,Button} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

import HeaderComponent from "../components/Header";

class MyoffersPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent title={ 'My Offers' } navigation={ this.props.navigation }/>
        <ScrollView>
          <View>
            <Grid style={styles.gridBorder}>
              <Col size={20} style={styles.offer}>
                <View>
                  <Image
                    style={styles.offerImage}
                    source={require("../images/1.jpg")}
                  />
                </View>
              </Col>
              <Col size={75} style={styles.offer}>
                <View>
            
                    <Text style={styles.offerTittle}>Cleaning</Text>
                    <Text>House Cleaning</Text>
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
              <Col size={75} style={styles.offer}>
                <View>
            
                    <Text style={styles.offerTittle}>Cleaning</Text>
                    <Text>House Cleaning</Text>
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
export default MyoffersPage;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  offer:{
    margin:10,
  },
  offerImage: {
    width: 70,
    height: 70,
  },
  offerTittle:{
    fontSize:17,
    color:'#0f0f0f'
  },
  waitingButton: {
    backgroundColor: '#d6d406',
    width:'50%',
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
  acceptedButton:{
    backgroundColor: '#35a20f',
    width:'50%',
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
