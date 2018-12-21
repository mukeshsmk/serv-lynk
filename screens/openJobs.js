import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import HeaderComponent from "../components/Header";

class OpenjobsPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent />
        <ScrollView>
          <View>
          <Grid>
            <Col size={20}>
              <View style={styles.jobs}>
                <Image
                  style={styles.jobImage}
                  source={require("../images/1.jpg")}
                />
              </View>
            </Col>
            <Col size={75}>
              <View style={styles.jobs}>
                  <View>
                    <Text style={styles.jobsTittle}>Cleaning</Text>
                    <Text>House Cleaning</Text>
                  </View>
                 
              </View>
            </Col>
            
          </Grid>

          <Grid style={styles.jobs1}>
            <Col>
              <View>
                <Text>Job Amount: $75</Text>
              </View>
            </Col>
            <Col>
              <View style={styles.payment}>
               <Text>Payment Due: $75</Text>
               <TouchableOpacity 
                style ={styles.payButton}>
                <Button color='#45474a' title="Pay"/> 
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
export default OpenjobsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  jobs:{
    margin:10,
  },
  jobs1:{
    borderBottomColor: '#fbe9d4',
    borderBottomWidth: 1,
    marginLeft:10,
    marginRight:10,
  },
  jobImage: {
    width: 70,
    height: 50,
  },
  jobsTittle:{
    fontSize:18,
  },
  payment:{
    borderLeftColor: '#acadae',
    borderLeftWidth: 1,
    paddingLeft:10,
    marginBottom: 5,
  },
  payButton:{
    color: 'red',
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#45474a'
  }
});
