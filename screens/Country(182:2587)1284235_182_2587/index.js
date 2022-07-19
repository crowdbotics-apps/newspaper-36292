import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_182_2588}>
        <Text style={styles.Text_182_2588}>Choose Publisher</Text>
      </View>
      <View style={styles.View_182_2589}>
        <View style={styles.View_182_2590}>
          <View style={styles.View_I182_2590_144_1566} />
          <View style={styles.View_I182_2590_144_1579}>
            <View style={styles.View_I182_2590_144_1580}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5d9cfb9-f57c-4008-924a-3a23ec899eb3"
                }}
                style={styles.ImageBackground_I182_2590_144_1581}
              />
              <View style={styles.View_I182_2590_144_1582}>
                <Text style={styles.Text_I182_2590_144_1582}>TC</Text>
              </View>
            </View>
            <View style={styles.View_I182_2590_144_1583}>
              <Text style={styles.Text_I182_2590_144_1583}>All Publishers</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1dd5413f-3ee9-4c99-94e5-ae50254e6a53"
            }}
            style={styles.ImageBackground_I182_2590_144_1568}
          />
        </View>
        <View style={styles.View_182_2591}>
          <View style={styles.View_I182_2591_144_1622} />
          <View style={styles.View_I182_2591_144_1623}>
            <View style={styles.View_I182_2591_144_1624}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55876d0a-b963-42af-a686-c04bbf1f4f24"
                }}
                style={styles.ImageBackground_I182_2591_144_1625}
              />
              <View style={styles.View_I182_2591_144_1626}>
                <Text style={styles.Text_I182_2591_144_1626}>DG</Text>
              </View>
            </View>
            <View style={styles.View_I182_2591_144_1627}>
              <Text style={styles.Text_I182_2591_144_1627}>Daily Graphic</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_182_2592}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("181_1722"))
          }
        >
          <View style={styles.View_I182_2592_144_1622} />
          <View style={styles.View_I182_2592_144_1623}>
            <View style={styles.View_I182_2592_144_1624}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a078a8f-abe0-45d7-b60e-3b1e4569841e"
                }}
                style={styles.ImageBackground_I182_2592_144_1625}
              />
              <View style={styles.View_I182_2592_144_1626}>
                <Text style={styles.Text_I182_2592_144_1626}>P</Text>
              </View>
            </View>
            <View style={styles.View_I182_2592_144_1627}>
              <Text style={styles.Text_I182_2592_144_1627}>Publisher</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_182_2593}>
          <View style={styles.View_I182_2593_144_1622} />
          <View style={styles.View_I182_2593_144_1623}>
            <View style={styles.View_I182_2593_144_1624}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f055475c-155e-4489-97f8-01718edb2bd4"
                }}
                style={styles.ImageBackground_I182_2593_144_1625}
              />
              <View style={styles.View_I182_2593_144_1626}>
                <Text style={styles.Text_I182_2593_144_1626}>GT</Text>
              </View>
            </View>
            <View style={styles.View_I182_2593_144_1627}>
              <Text style={styles.Text_I182_2593_144_1627}>Ghanaian Times</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_182_2594}>
          <View style={styles.View_I182_2594_144_1622} />
          <View style={styles.View_I182_2594_144_1623}>
            <View style={styles.View_I182_2594_144_1624}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46fc2e8a-b402-4da4-b91e-9786b26d93d8"
                }}
                style={styles.ImageBackground_I182_2594_144_1625}
              />
              <View style={styles.View_I182_2594_144_1626}>
                <Text style={styles.Text_I182_2594_144_1626}>GT</Text>
              </View>
            </View>
            <View style={styles.View_I182_2594_144_1627}>
              <Text style={styles.Text_I182_2594_144_1627}>The Custodian</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_182_2595}>
          <View style={styles.View_I182_2595_144_1622} />
          <View style={styles.View_I182_2595_144_1623}>
            <View style={styles.View_I182_2595_144_1624}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc143d49-d13a-4c5e-82ca-5ff316a6a03c"
                }}
                style={styles.ImageBackground_I182_2595_144_1625}
              />
              <View style={styles.View_I182_2595_144_1626}>
                <Text style={styles.Text_I182_2595_144_1626}>GT</Text>
              </View>
            </View>
            <View style={styles.View_I182_2595_144_1627}>
              <Text style={styles.Text_I182_2595_144_1627}>Daily Dispatch</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_182_2588: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_182_2588: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2589: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2590: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2590_144_1566: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 244, 250, 1)"
  },
  View_I182_2590_144_1579: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2590_144_1580: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I182_2590_144_1581: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I182_2590_144_1582: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I182_2590_144_1582: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2590_144_1583: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I182_2590_144_1583: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I182_2590_144_1568: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("4%")
  },
  View_182_2591: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2591_144_1622: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I182_2591_144_1623: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2591_144_1624: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I182_2591_144_1625: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I182_2591_144_1626: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I182_2591_144_1626: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2591_144_1627: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I182_2591_144_1627: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_182_2592: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2592_144_1622: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I182_2592_144_1623: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2592_144_1624: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I182_2592_144_1625: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I182_2592_144_1626: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I182_2592_144_1626: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2592_144_1627: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I182_2592_144_1627: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2593: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2593_144_1622: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I182_2593_144_1623: {
    flexGrow: 1,
    width: wp("48%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2593_144_1624: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I182_2593_144_1625: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I182_2593_144_1626: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I182_2593_144_1626: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2593_144_1627: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I182_2593_144_1627: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2594: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2594_144_1622: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I182_2594_144_1623: {
    flexGrow: 1,
    width: wp("45%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2594_144_1624: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I182_2594_144_1625: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I182_2594_144_1626: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I182_2594_144_1626: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2594_144_1627: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I182_2594_144_1627: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2595: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("69%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2595_144_1622: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I182_2595_144_1623: {
    flexGrow: 1,
    width: wp("45%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2595_144_1624: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I182_2595_144_1625: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I182_2595_144_1626: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I182_2595_144_1626: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2595_144_1627: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I182_2595_144_1627: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
