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
import { Col, Row, Grid } from "react-native-easy-grid";



class MarketPlaceRequested extends Component {
  constructor(props) {
    super(props);
      console.log(this.props.navigation)
    };
  
  details = (title) => {
    
    this.props.navigation.navigate('OfferedListingPage',{
      title: title
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Grid style={styles.gridBorder} >
              <Col>
                
                  <View style={styles.sevices}>
                  <TouchableOpacity onPress={() => this.details('Cleaning2')}>
                    <Image
                      style={styles.seviceImage}
                      source={require("../images/1.jpg")}
                    />
                    </TouchableOpacity>
                    <View style={styles.seviceText}>
                    <Text style={{ color: "#fbfbfb",marginTop:5,fontSize:14 }}>Cleaning2</Text>
                    </View>
                    <Grid style={styles.sevicesRate}>
                      <Col size={80}>
                        <Text style={styles.sevicesCountry}>Ohio</Text>
                      </Col>
                      <Col size={20}>
                        <Text style={styles.sevicesCountry}>30$</Text>
                      </Col>
                    </Grid>
                  </View>
              
              </Col>
              <Col>
                
                  <View style={styles.sevices}>
                  <TouchableOpacity>
                    <Image
                      style={styles.seviceImage}
                      source={require("../images/2.jpg")}
                    />
                    </TouchableOpacity>
                    <View style={styles.seviceText}>
                    <Text style={{ color: "#fbfbfb",marginTop:5,fontSize:14 }}>Plumbing</Text>
                    </View>
                    <Grid style={styles.sevicesRate}>
                      <Col size={80}>
                        <Text style={styles.sevicesCountry}>Newyork</Text>
                      </Col>
                      <Col size={20}>
                        <Text style={styles.sevicesCountry}>10$</Text>
                      </Col>
                    </Grid>
                  </View>
               
              </Col>
            </Grid>

            <Grid style={styles.gridBorder}>
              <Col>
                
                  <View style={styles.sevices}>
                  <TouchableOpacity>
                    <Image
                      style={styles.seviceImage}
                      source={require("../images/3.jpg")}
                    />
                    </TouchableOpacity>
                    <View style={styles.seviceText}>
                    <Text style={{ color: "#fbfbfb",marginTop:5,fontSize:14 }}>Cleaning</Text>
                    </View>
                    <Grid style={styles.sevicesRate}>
                      <Col size={80}>
                        <Text style={styles.sevicesCountry}>California</Text>
                      </Col>
                      <Col size={20}>
                        <Text style={styles.sevicesCountry}>25$</Text>
                      </Col>
                    </Grid>
                  </View>
               
              </Col>
              <Col>
                
                  <View style={styles.sevices}>
                  <TouchableOpacity>
                    <Image
                      style={styles.seviceImage}
                      source={require("../images/4.jpg")}
                    />
                    </TouchableOpacity>
                    <View style={styles.seviceText}>
                    <Text style={{ color: "#fbfbfb",marginTop:5,fontSize:14 }}>Plumbing</Text>
                    </View>
                    <Grid style={styles.sevicesRate}>
                      <Col size={80}>
                        <Text style={styles.sevicesCountry}>Florida</Text>
                      </Col>
                      <Col size={20}>
                        <Text style={styles.sevicesCountry}>15$</Text>
                      </Col>
                    </Grid>
                  </View>
              
              </Col>
            </Grid>

            <Grid style={styles.gridBorder}>
              <Col>
                
                  <View style={styles.sevices}>
                  <TouchableOpacity>
                    <Image
                      style={styles.seviceImage}
                      source={require("../images/5.jpg")}
                    />
                    </TouchableOpacity>
                    <View style={styles.seviceText}>
                    <Text style={{ color: "#fbfbfb",marginTop:5,fontSize:14 }}>Cleaning</Text>
                    </View>
                    <Grid style={styles.sevicesRate}>
                      <Col size={80}>
                        <Text style={styles.sevicesCountry}>Ohio</Text>
                      </Col>
                      <Col size={20}>
                        <Text style={styles.sevicesCountry}>50$</Text>
                      </Col>
                    </Grid>
                  </View>
              
              </Col>
              <Col>
               
                  <View style={styles.sevices}>
                  <TouchableOpacity>
                    <Image
                      style={styles.seviceImage}
                      source={require("../images/1.jpg")}
                    />
                    </TouchableOpacity>
                    <View style={styles.seviceText}>
                    <Text style={{ color: "#fbfbfb",marginTop:5,fontSize:14 }}>Plumbing</Text>
                    </View>
                    <Grid style={styles.sevicesRate}>
                      <Col size={80}>
                        <Text style={styles.sevicesCountry}>Newyork</Text>
                      </Col>
                      <Col size={20}>
                        <Text style={styles.sevicesCountry}>20$</Text>
                      </Col>
                    </Grid>
                  </View>
                
              </Col>
            </Grid>

            <Grid style={styles.gridBorder}>
              <Col>
                
                  <View style={styles.sevices}>
                  <TouchableOpacity>
                    <Image
                      style={styles.seviceImage}
                      source={require("../images/2.jpg")}
                    />
                    </TouchableOpacity>
                    <View style={styles.seviceText}>
                    <Text style={{ color: "#fbfbfb",marginTop:5,fontSize:14 }}>Cleaning2</Text>
                    </View>
                    <Grid style={styles.sevicesRate}>
                      <Col size={80}>
                        <Text style={styles.sevicesCountry}>Ohio</Text>
                      </Col>
                      <Col size={20}>
                        <Text style={styles.sevicesCountry}>10$</Text>
                      </Col>
                    </Grid>
                  </View>
                
              </Col>
              <Col>
                
                  <View style={styles.sevices}>
                  <TouchableOpacity>
                    <Image
                      style={styles.seviceImage}
                      source={require("../images/3.jpg")}
                    />
                    </TouchableOpacity>
                    <View style={styles.seviceText}>
                      <Text style={{ color: "#fbfbfb",marginTop:5,fontSize:14 }}>Plumbing</Text>
                    </View>
                    <Grid style={styles.sevicesRate}>
                      <Col size={80}>
                        <Text style={styles.sevicesCountry}>Newyork</Text>
                      </Col>
                      <Col size={20}>
                        <Text style={styles.sevicesCountry}>35$</Text>
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
export default MarketPlaceRequested;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  sevices: {
    marginTop: 15,
    marginBottom:10,
    marginRight:10,
    marginLeft:15,
  },
  seviceImage: {
    width: '95%',
    height: 150,
    position: "relative"
  },
  seviceText: {
    position: "absolute",
    backgroundColor: "#4e4c4ccc",
    fontSize:18,
    width: '95%',
    top: 110,
    left: 0,
    right: 0,
    bottom: 0,
    marginTop:10,
    paddingLeft: 15
  },
  sevicesRate: {
    backgroundColor: "#fff",
  },
  sevicesCountry: {
    color: "#606060",
    marginTop:5,
  },
  gridBorder: {
    borderBottomColor: "#fbe9d4",
    borderBottomWidth: 1,
  }
});
