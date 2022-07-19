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
      <View style={styles.View_201_2014}>
        <View style={styles.View_201_2015}>
          <Text style={styles.Text_201_2015}>New list</Text>
        </View>
        <View style={styles.View_201_2016}>
          <Text style={styles.Text_201_2016}>Cancel</Text>
        </View>
      </View>
      <View style={styles.View_201_1969}>
        <View style={styles.View_201_1970}>
          <View style={styles.View_201_1971}>
            <View style={styles.View_I201_1971_133_434}>
              <Text style={styles.Text_I201_1971_133_434}>List name</Text>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_I201_1971_133_435}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("133_512"))
              }
            >
              <View style={styles.View_I201_1971_133_432} />
              <View style={styles.View_I201_1971_133_433}>
                <Text style={styles.Text_I201_1971_133_433}>Business news</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View_201_1972}>
            <View style={styles.View_I201_1972_133_434}>
              <Text style={styles.Text_I201_1972_133_434}>
                Description (optional)
              </Text>
            </View>
            <View style={styles.View_I201_1972_133_435}>
              <View style={styles.View_I201_1972_133_432} />
              <View style={styles.View_I201_1972_133_433}>
                <Text style={styles.Text_I201_1972_133_433}>
                  Eg. For all my business news
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_201_1975}>
            <View style={styles.View_I201_1975_8_508} />
            <View style={styles.View_I201_1975_8_509}>
              <Text style={styles.Text_I201_1975_8_509}>Create list</Text>
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
  View_201_2014: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_201_2015: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_201_2015: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_2016: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_201_2016: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_1969: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("76%"),
    minHeight: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_201_1970: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("76%"),
    minHeight: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_201_1971: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I201_1971_133_434: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I201_1971_133_434: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I201_1971_133_435: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_I201_1971_133_432: {
    width: wp("92%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(152, 158, 171, 1)",
    borderWidth: 0.4000000059604645
  },
  View_I201_1971_133_433: {
    width: wp("22%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I201_1971_133_433: {
    color: "rgba(169, 170, 188, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_1972: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I201_1972_133_434: {
    flexGrow: 1,
    width: wp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I201_1972_133_434: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I201_1972_133_435: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_I201_1972_133_432: {
    width: wp("92%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(152, 158, 171, 1)",
    borderWidth: 0.4000000059604645
  },
  View_I201_1972_133_433: {
    width: wp("42%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I201_1972_133_433: {
    color: "rgba(169, 170, 188, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_1975: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("59%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I201_1975_8_508: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 158, 171, 1)"
  },
  View_I201_1975_8_509: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I201_1975_8_509: {
    color: "rgba(239, 239, 239, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
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
