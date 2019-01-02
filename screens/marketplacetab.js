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

class MarketPlaceTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Grid style={styles.gridBorder}>
              <Col>
                <View style={styles.sevices}>
                  <TouchableOpacity>
                    <Image
                      style={styles.seviceImage}
                      source={require("../images/1.jpg")}
                    />
                  </TouchableOpacity>
                  <View style={styles.seviceText}>
                    <Text
                      style={{ color: "#eae3e3fa", marginTop: 3, fontSize: 14 }}
                    >
                      Cleaning
                    </Text>
                  </View>
                  <Grid style={styles.sevicesRate}>
                    <Col size={80}>
                      <Text style={styles.sevicesCountry}>Ohio</Text>
                    </Col>
                    <Col size={20}>
                      <Text style={styles.sevicesCountry}>$$$</Text>
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
                    <Text
                      style={{ color: "#eae3e3fa", marginTop: 3, fontSize: 14 }}
                    >
                      Plumbing
                    </Text>
                  </View>
                  <Grid style={styles.sevicesRate}>
                    <Col size={80}>
                      <Text style={styles.sevicesCountry}>Newyork</Text>
                    </Col>
                    <Col size={20}>
                      <Text style={styles.sevicesCountry}>$$</Text>
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
                    <Text
                      style={{ color: "#eae3e3fa", marginTop: 3, fontSize: 14 }}
                    >
                      Cleaning
                    </Text>
                  </View>
                  <Grid style={styles.sevicesRate}>
                    <Col size={80}>
                      <Text style={styles.sevicesCountry}>California</Text>
                    </Col>
                    <Col size={20}>
                      <Text style={styles.sevicesCountry}>$</Text>
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
                    <Text
                      style={{ color: "#eae3e3fa", marginTop: 3, fontSize: 14 }}
                    >
                      Plumbing
                    </Text>
                  </View>
                  <Grid style={styles.sevicesRate}>
                    <Col size={80}>
                      <Text style={styles.sevicesCountry}>Florida</Text>
                    </Col>
                    <Col size={20}>
                      <Text style={styles.sevicesCountry}>$$</Text>
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
                    <Text
                      style={{ color: "#eae3e3fa", marginTop: 3, fontSize: 14 }}
                    >
                      Cleaning
                    </Text>
                  </View>
                  <Grid style={styles.sevicesRate}>
                    <Col size={80}>
                      <Text style={styles.sevicesCountry}>Ohio</Text>
                    </Col>
                    <Col size={20}>
                      <Text style={styles.sevicesCountry}>$$$</Text>
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
                    <Text
                      style={{ color: "#eae3e3fa", marginTop: 3, fontSize: 14 }}
                    >
                      Plumbing
                    </Text>
                  </View>
                  <Grid style={styles.sevicesRate}>
                    <Col size={80}>
                      <Text style={styles.sevicesCountry}>Newyork</Text>
                    </Col>
                    <Col size={20}>
                      <Text style={styles.sevicesCountry}>$$</Text>
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
                    <Text
                      style={{ color: "#eae3e3fa", marginTop: 3, fontSize: 14 }}
                    >
                      Cleaning
                    </Text>
                  </View>
                  <Grid style={styles.sevicesRate}>
                    <Col size={80}>
                      <Text style={styles.sevicesCountry}>Ohio</Text>
                    </Col>
                    <Col size={20}>
                      <Text style={styles.sevicesCountry}>$$$</Text>
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
                    <Text
                      style={{ color: "#eae3e3fa", marginTop: 3, fontSize: 14 }}
                    >
                      Plumbing
                    </Text>
                  </View>
                  <Grid style={styles.sevicesRate}>
                    <Col size={80}>
                      <Text style={styles.sevicesCountry}>Newyork</Text>
                    </Col>
                    <Col size={20}>
                      <Text style={styles.sevicesCountry}>$$</Text>
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
export default MarketPlaceTab;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sevices: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 20
  },
  seviceImage: {
    width: 170,
    height: 170,
    position: "relative"
  },
  seviceText: {
    position: "absolute",
    backgroundColor: "#70726dba",
    fontSize: 18,
    width: 170,
    top: 130,
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: 12,
    paddingLeft: 15
  },
  sevicesRate: {
    backgroundColor: "#fff"
  },
  sevicesCountry: {
    color: "#131313",
    marginTop: 5,
    marginBottom: 0
  },
  gridBorder: {
    borderBottomColor: "#fbe9d4",
    borderBottomWidth: 1
  }
});
