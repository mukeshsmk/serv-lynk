import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { Container, Body } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import HeaderComponent from "../components/Header";

class Marketplaces extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent />
        <ScrollView>
          <View>
            <Grid style={styles.gridBorder}>
              <Col>
                <TouchableOpacity>
                  <View style={styles.sevices} >
                    <Image style={styles.seviceImage} source={require('../images/1.jpg')} />
                    <View style={styles.seviceText}>
                      <Text style={{color:'#eae3e3fa'}}>Cleaning</Text>
                    </View>
                    <Grid style={styles.sevicesRate}>
                      <Col size={3}>
                      <Text>Ohio</Text>
                      </Col>
                      <Col size={1}>
                      <Text>$$$</Text>
                      </Col>
                    </Grid>
                  </View>
                 
                </TouchableOpacity>
              </Col>
              <Col>
              <TouchableOpacity>
                  <View style={styles.sevices} >
                    <Image style={styles.seviceImage} source={require('../images/2.jpg')} />
                    <View style={styles.seviceText}>
                      <Text style={{color:'#eae3e3fa'}}>Plumbing</Text>
                    </View>
                    <Grid style={styles.sevicesRate}>
                      <Col size={3}>
                      <Text>Newyork</Text>
                      </Col>
                      <Col size={1}>
                      <Text>$$</Text>
                      </Col>
                    </Grid>
                  </View>
                 
                </TouchableOpacity>
              </Col>
            </Grid>


             <Grid style={styles.gridBorder}>
              <Col>
                <TouchableOpacity>
                  <View style={styles.sevices} >
                    <Image style={styles.seviceImage} source={require('../images/3.jpg')} />
                    <View style={styles.seviceText}>
                      <Text style={{color:'#eae3e3fa'}}>Cleaning</Text>
                    </View>
                    <Grid style={styles.sevicesRate}>
                      <Col size={3}>
                      <Text>California</Text>
                      </Col>
                      <Col size={1}>
                      <Text>$</Text>
                      </Col>
                    </Grid>
                  </View>
                 
                </TouchableOpacity>
              </Col>
              <Col>
              <TouchableOpacity>
                  <View style={styles.sevices} >
                    <Image style={styles.seviceImage} source={require('../images/4.jpg')} />
                    <View style={styles.seviceText}>
                      <Text style={{color:'#eae3e3fa'}}>Plumbing</Text>
                    </View>
                    <Grid style={styles.sevicesRate}>
                      <Col size={3}>
                      <Text>Florida</Text>
                      </Col>
                      <Col size={1}>
                      <Text>$$</Text>
                      </Col>
                    </Grid>
                  </View>
                 
                </TouchableOpacity>
              </Col>
            </Grid>


             <Grid style={styles.gridBorder}>
              <Col>
                <TouchableOpacity>
                  <View style={styles.sevices} >
                    <Image style={styles.seviceImage} source={require('../images/5.jpg')} />
                    <View style={styles.seviceText}>
                      <Text style={{color:'#eae3e3fa'}}>Cleaning</Text>
                    </View>
                    <Grid style={styles.sevicesRate}>
                      <Col size={3}>
                      <Text>Ohio</Text>
                      </Col>
                      <Col size={1}>
                      <Text>$$$</Text>
                      </Col>
                    </Grid>
                  </View>
                 
                </TouchableOpacity>
              </Col>
              <Col>
              <TouchableOpacity>
                  <View style={styles.sevices} >
                    <Image style={styles.seviceImage} source={require('../images/1.jpg')} />
                    <View style={styles.seviceText}>
                      <Text style={{color:'#eae3e3fa'}}>Plumbing</Text>
                    </View>
                    <Grid style={styles.sevicesRate}>
                      <Col size={3}>
                      <Text>Newyork</Text>
                      </Col>
                      <Col size={1}>
                      <Text>$$</Text>
                      </Col>
                    </Grid>
                  </View>
                 
                </TouchableOpacity>
              </Col>
            </Grid>

             <Grid style={styles.gridBorder}>
              <Col>
                <TouchableOpacity>
                  <View style={styles.sevices} >
                    <Image style={styles.seviceImage} source={require('../images/2.jpg')} />
                    <View style={styles.seviceText}>
                      <Text style={{color:'#eae3e3fa'}}>Cleaning</Text>
                    </View>
                    <Grid style={styles.sevicesRate}>
                      <Col size={3}>
                      <Text>Ohio</Text>
                      </Col>
                      <Col size={1}>
                      <Text>$$$</Text>
                      </Col>
                    </Grid>
                  </View>
                 
                </TouchableOpacity>
              </Col>
              <Col>
              <TouchableOpacity>
                  <View style={styles.sevices} >
                    <Image style={styles.seviceImage} source={require('../images/3.jpg')} />
                    <View style={styles.seviceText}>
                      <Text style={{color:'#eae3e3fa'}}>Plumbing</Text>
                    </View>
                    <Grid style={styles.sevicesRate}>
                      <Col size={3}>
                      <Text>Newyork</Text>
                      </Col>
                      <Col size={1}>
                      <Text>$$</Text>
                      </Col>
                    </Grid>
                  </View>
                 
                </TouchableOpacity>
              </Col>
            </Grid>

          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Marketplaces;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sevices:{
    margin:15,
  },
  seviceImage: {
    width: 150,
    height: 150,
    position: 'relative',
  },
  seviceText:{
    position: 'absolute',
    backgroundColor: '#70726dba',
    width: 150,
     top: 120, 
     left: 0, 
     right: 0, 
     bottom: 0,
     paddingLeft:10,
  },
  sevicesRate:{
  backgroundColor:'#fff',
  },
  gridBorder:{
    borderBottomColor: '#fbe9d4',
    borderBottomWidth: 1,
  }
})

