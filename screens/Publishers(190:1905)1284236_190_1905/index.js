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
      <View style={styles.View_190_1906}>
        <Text style={styles.Text_190_1906}>Choose Publisher</Text>
      </View>
      <View style={styles.View_190_1907}>
        <View style={styles.View_190_1908}>
          <View style={styles.View_I190_1908_144_1566} />
          <View style={styles.View_I190_1908_144_1579}>
            <View style={styles.View_I190_1908_144_1580}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd3d510c-56d2-4125-b981-992667b70f58"
                }}
                style={styles.ImageBackground_I190_1908_144_1581}
              />
              <View style={styles.View_I190_1908_144_1582}>
                <Text style={styles.Text_I190_1908_144_1582}>TC</Text>
              </View>
            </View>
            <View style={styles.View_I190_1908_144_1583}>
              <Text style={styles.Text_I190_1908_144_1583}>All Publishers</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f52aed3a-29c2-438b-a053-4d5c7b8972fa"
            }}
            style={styles.ImageBackground_I190_1908_144_1568}
          />
        </View>
        <View style={styles.View_190_1909}>
          <View style={styles.View_I190_1909_144_1622} />
          <View style={styles.View_I190_1909_144_1623}>
            <View style={styles.View_I190_1909_144_1624}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0bbcdf72-b577-4796-a1d5-6bfc82d5d7b7"
                }}
                style={styles.ImageBackground_I190_1909_144_1625}
              />
              <View style={styles.View_I190_1909_144_1626}>
                <Text style={styles.Text_I190_1909_144_1626}>DG</Text>
              </View>
            </View>
            <View style={styles.View_I190_1909_144_1627}>
              <Text style={styles.Text_I190_1909_144_1627}>Daily Graphic</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_190_1910}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("181_1722"))
          }
        >
          <View style={styles.View_I190_1910_144_1622} />
          <View style={styles.View_I190_1910_144_1623}>
            <View style={styles.View_I190_1910_144_1624}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f838c220-9a64-4a33-b96d-c27f434bc0eb"
                }}
                style={styles.ImageBackground_I190_1910_144_1625}
              />
              <View style={styles.View_I190_1910_144_1626}>
                <Text style={styles.Text_I190_1910_144_1626}>P</Text>
              </View>
            </View>
            <View style={styles.View_I190_1910_144_1627}>
              <Text style={styles.Text_I190_1910_144_1627}>Publisher</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_190_1911}>
          <View style={styles.View_I190_1911_144_1622} />
          <View style={styles.View_I190_1911_144_1623}>
            <View style={styles.View_I190_1911_144_1624}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/626d3e43-d717-4031-b259-91b90ffc4366"
                }}
                style={styles.ImageBackground_I190_1911_144_1625}
              />
              <View style={styles.View_I190_1911_144_1626}>
                <Text style={styles.Text_I190_1911_144_1626}>GT</Text>
              </View>
            </View>
            <View style={styles.View_I190_1911_144_1627}>
              <Text style={styles.Text_I190_1911_144_1627}>Ghanaian Times</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_190_1912}>
          <View style={styles.View_I190_1912_144_1622} />
          <View style={styles.View_I190_1912_144_1623}>
            <View style={styles.View_I190_1912_144_1624}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/644ee19e-2689-4b93-ad55-38911b991cab"
                }}
                style={styles.ImageBackground_I190_1912_144_1625}
              />
              <View style={styles.View_I190_1912_144_1626}>
                <Text style={styles.Text_I190_1912_144_1626}>GT</Text>
              </View>
            </View>
            <View style={styles.View_I190_1912_144_1627}>
              <Text style={styles.Text_I190_1912_144_1627}>The Custodian</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_190_1913}>
          <View style={styles.View_I190_1913_144_1622} />
          <View style={styles.View_I190_1913_144_1623}>
            <View style={styles.View_I190_1913_144_1624}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05298711-d771-46bd-b044-996f98962416"
                }}
                style={styles.ImageBackground_I190_1913_144_1625}
              />
              <View style={styles.View_I190_1913_144_1626}>
                <Text style={styles.Text_I190_1913_144_1626}>GT</Text>
              </View>
            </View>
            <View style={styles.View_I190_1913_144_1627}>
              <Text style={styles.Text_I190_1913_144_1627}>Daily Dispatch</Text>
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
  View_190_1906: {
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
  Text_190_1906: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_190_1907: {
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
  View_190_1908: {
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
  View_I190_1908_144_1566: {
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
  View_I190_1908_144_1579: {
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
  View_I190_1908_144_1580: {
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
  ImageBackground_I190_1908_144_1581: {
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
  View_I190_1908_144_1582: {
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
  Text_I190_1908_144_1582: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I190_1908_144_1583: {
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
  Text_I190_1908_144_1583: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I190_1908_144_1568: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("4%")
  },
  View_190_1909: {
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
  View_I190_1909_144_1622: {
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
  View_I190_1909_144_1623: {
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
  View_I190_1909_144_1624: {
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
  ImageBackground_I190_1909_144_1625: {
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
  View_I190_1909_144_1626: {
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
  Text_I190_1909_144_1626: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I190_1909_144_1627: {
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
  Text_I190_1909_144_1627: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_190_1910: {
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
  View_I190_1910_144_1622: {
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
  View_I190_1910_144_1623: {
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
  View_I190_1910_144_1624: {
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
  ImageBackground_I190_1910_144_1625: {
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
  View_I190_1910_144_1626: {
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
  Text_I190_1910_144_1626: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I190_1910_144_1627: {
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
  Text_I190_1910_144_1627: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_190_1911: {
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
  View_I190_1911_144_1622: {
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
  View_I190_1911_144_1623: {
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
  View_I190_1911_144_1624: {
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
  ImageBackground_I190_1911_144_1625: {
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
  View_I190_1911_144_1626: {
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
  Text_I190_1911_144_1626: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I190_1911_144_1627: {
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
  Text_I190_1911_144_1627: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_190_1912: {
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
  View_I190_1912_144_1622: {
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
  View_I190_1912_144_1623: {
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
  View_I190_1912_144_1624: {
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
  ImageBackground_I190_1912_144_1625: {
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
  View_I190_1912_144_1626: {
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
  Text_I190_1912_144_1626: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I190_1912_144_1627: {
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
  Text_I190_1912_144_1627: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_190_1913: {
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
  View_I190_1913_144_1622: {
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
  View_I190_1913_144_1623: {
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
  View_I190_1913_144_1624: {
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
  ImageBackground_I190_1913_144_1625: {
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
  View_I190_1913_144_1626: {
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
  Text_I190_1913_144_1626: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I190_1913_144_1627: {
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
  Text_I190_1913_144_1627: {
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
