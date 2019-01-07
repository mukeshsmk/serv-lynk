import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import HeaderComponent from "../components/Header";
import { Button } from 'react-native-elements';

class OpenjobsPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent title={ 'Open Jobs' } navigation={ this.props.navigation }/>
        <ScrollView>
          <View>
          <Grid>
            <Col size={35}>
              <View style={styles.jobs}>
                <Image
                  style={styles.jobImage}
                  source={require("../images/1.jpg")}
                />
              </View>
            </Col>
            <Col size={65}>
              <View style={styles.jobsDesc}>
                  <View>
                    <Text style={styles.jobsTittle}>Cleaning</Text>
                    <Text style={styles.jobsubTittle}>House Cleaning</Text>
                  </View>
                 
              </View>
            </Col>
            
          </Grid>

          <Grid style={styles.jobs1}>
            <Col>
              <View>
                <Text style={styles.amount}>Job Amount: $75</Text>
              </View>
            </Col>
            <Col>
              <View style={styles.payment}>
               <Text style={styles.amount}>Payment Due: $75</Text>
               <TouchableOpacity 
                style ={styles.payButton}>
                <Button
                  title="Pay"
                  buttonStyle={{
                    marginTop: 5,
                    marginBottom: 5,
                    backgroundColor: '#45474a',
                    width:'100%',
                    height:30
                  }}
                />
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
  jobsDesc:{
    marginTop:10,
    marginBottom:10,
  },
  jobs1:{
    borderBottomColor: '#fbe9d4',
    borderBottomWidth: 1,
  },
  jobImage: {
    width: '95%',
    height: 70,
  },
  jobsTittle:{
    fontSize:20,
    color:"#0e0e0e",
  },
  jobsubTittle:{
    fontSize:16,
    color:"#232323",
  },
  amount:{
    fontSize:16,
    color:'#333333',
    paddingLeft:15,
  },
  payment:{
    borderLeftColor: '#acadae',
    borderLeftWidth: 1,
    paddingLeft:0,
    marginBottom: 5,
  },
});
