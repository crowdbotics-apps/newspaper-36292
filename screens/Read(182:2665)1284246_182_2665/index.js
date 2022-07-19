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
      <View style={styles.View_182_2666} />
      <View style={styles.View_182_2939}>
        <View style={styles.View_182_2993}>
          <View style={styles.View_182_2994}>
            <Text style={styles.Text_182_2994}>POLITICS</Text>
          </View>
          <View style={styles.View_182_2995}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74cd992e-e4e9-496b-88d8-2c0d63b22018"
              }}
              style={styles.ImageBackground_182_2996}
            />
            <View style={styles.View_182_2997}>
              <Text style={styles.Text_182_2997}>29 Jun 2022</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_182_2943}>
          <Text style={styles.Text_182_2943}>
            E-levy: Ghanaians hit streets of Accra to protest against electronic
            transaction tax that Govenment wants to introduce
          </Text>
        </View>
        <View style={styles.View_182_2944}>
          <Text style={styles.Text_182_2944}>
            Urna tincidunt lorem suscipit quis tristique sodales ultricies
            convallis. Tincidunt donec vel egestas integer amet. Nam sit dui
            pretium id at.
          </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9eecb2cc-f341-45a6-b1f0-766f83a3915e"
        }}
        style={styles.ImageBackground_182_2999}
      />
      <View style={styles.View_182_3621}>
        <View style={styles.View_182_3622}>
          <Text style={styles.Text_182_3622}>By John Elliot Hagan, Accra</Text>
        </View>
        <View style={styles.View_182_3623}>
          <Text style={styles.Text_182_3623}>3mins read</Text>
        </View>
      </View>
      <View style={styles.View_182_3511}>
        <View style={styles.View_182_3510}>
          <View style={styles.View_182_3456}>
            <View style={styles.View_182_3454}>
              <Text style={styles.Text_182_3454}>T</Text>
            </View>
            <View style={styles.View_182_3455}>
              <Text style={styles.Text_182_3455}>he</Text>
            </View>
          </View>
          <View style={styles.View_182_3457}>
            <Text style={styles.Text_182_3457}>
              Ghanaian youth citizens have come
            </Text>
          </View>
          <View style={styles.View_182_3458}>
            <Text style={styles.Text_182_3458}>
              Sit leo id non enim, in magna. Tincidunt.
            </Text>
          </View>
        </View>
        <View style={styles.View_182_3524}>
          <View style={styles.View_182_3481}>
            <Text style={styles.Text_182_3481}>
              In at nisi, at eget in id vitae accumsan. Vel varius et placerat
              leo. Tellus metus eget at pellentesque a. Justo vitae cursus
              blandit et, auctor parturient. Nulla nisl cras eleifend est
              accumsan, enim tristique mattis turpis. Nunc, gravida blandit
              aliquet et at nulla sit non.{" "}
            </Text>
          </View>
          <View style={styles.View_182_3512}>
            <Text style={styles.Text_182_3512}>
              Sapien imperdiet elit tellus tortor sed gravida mauris suspendisse
              eu. Consequat, proin pharetra ut eget congue vulputate molestie.
              Maecenas sed tempus et varius enim.
            </Text>
          </View>
          <View style={styles.View_182_3525}>
            <Text style={styles.Text_182_3525}>
              Curabitur sagittis massa quis quam. Tristique amet, enim aliquet
              maecenas nunc, dictum condimentum aliquam posuere. Gravida augue
              imperdiet eget cursus. Congue sed vestibulum sollicitudin augue
              consectetur feugiat urna tellus. Justo facilisis hendrerit.
            </Text>
          </View>
          <View style={styles.View_182_3583}>
            <Text style={styles.Text_182_3583}>
              Enim dictumst augue fermentum, orci vitae tortor mi nisl tempor.
              At maecenas libero in odio vestibulum sit erat lorem sodales.
              Venenatis aliquam, ornare neque vel. Amet, pellentesque turpis
              aliquam varius lobortis nisl nulla. Viverra senectus leo cursus
              convallis cursus fermentum dictum dui.{" "}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_182_3608}>
        <View style={styles.View_I182_3608_151_1649}>
          <Text style={styles.Text_I182_3608_151_1649}>Related news</Text>
        </View>
      </View>
      <View style={styles.View_182_3624}>
        <View style={styles.View_182_3628}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56bc20aa-6a5e-4deb-996f-36c24075be6f"
            }}
            style={styles.ImageBackground_182_3629}
          />
          <View style={styles.View_182_3630}>
            <Text style={styles.Text_182_3630}>Image of MOMO vendor</Text>
          </View>
        </View>
        <View style={styles.View_182_3594}>
          <Text style={styles.Text_182_3594}>
            Duis neque at non aliquet est metus risus. Egestas id fermentum ac
            sagittis. Massa quis nibh nunc eu in. Diam id auctor mi, quis id
            tristique. Enim convallis dui tristique cras dictumst faucibus quis.
            Volutpat accumsan, consequat nulla est pellentesque. In duis
            lobortis ultricies eu orci. Vestibulum turpis.
          </Text>
        </View>
      </View>
      <View style={styles.View_182_2757}>
        <View style={styles.View_182_2758} />
        <View style={styles.View_182_2759}>
          <View style={styles.View_182_2760} />
          <View style={styles.View_182_2764}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c332cd4-a2e5-41df-b94c-abb9695f438b"
              }}
              style={styles.ImageBackground_182_2765}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a9e57bb-7c3a-4653-8b66-7a9c932c1f41"
              }}
              style={styles.ImageBackground_182_2774}
            />
            <View style={styles.View_182_2778}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/257b1b93-4820-4ea3-a84e-d2c849787b81"
                }}
                style={styles.ImageBackground_182_2781}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06d5b8be-fd34-489a-bbc6-625622e2d54c"
                }}
                style={styles.ImageBackground_182_2786}
              />
              <View style={styles.View_182_2787} />
            </View>
          </View>
          <View style={styles.View_182_2788} />
          <View style={styles.View_182_2790}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec90f9c6-a2c7-4476-ac23-df00db4000f2"
              }}
              style={styles.ImageBackground_182_2791}
            />
          </View>
        </View>
        <View style={styles.View_182_3131}>
          <TouchableOpacity
            style={styles.TouchableOpacity_182_2831}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("151_4479"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/024eaa34-8d14-4975-bda4-1849e29d5ccd"
              }}
              style={styles.ImageBackground_182_2832}
            />
            <View style={styles.View_182_2833}>
              <View style={styles.View_I182_2833_3125_33763}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28f8dd3e-cfd1-45ae-a530-faab8587a905"
                  }}
                  style={styles.ImageBackground_I182_2833_3120_35445}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.View_182_2986}>
            <TouchableOpacity
              style={styles.TouchableOpacity_182_2979}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("192_1952"))
              }
            >
              <View style={styles.View_I182_2979_3174_9337}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/989daccf-9a67-4de3-8819-c16ae4d97e35"
                  }}
                  style={styles.ImageBackground_I182_2979_3173_21494}
                />
              </View>
            </TouchableOpacity>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e67eb752-6da6-4cd5-bde3-b6a48300b74b"
              }}
              style={styles.ImageBackground_182_2962}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/febbfa2d-286a-4462-88a2-0e1e5582620c"
              }}
              style={styles.ImageBackground_182_2968}
            />
          </View>
          <View style={styles.View_182_2830}>
            <Text style={styles.Text_182_2830}>The Publisher</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  View_182_2666: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("243%"),
    minHeight: hp("243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_182_2939: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2993: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2994: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_182_2994: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2995: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_182_2996: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_182_2997: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_182_2997: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2943: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_182_2943: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2944: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_182_2944: {
    color: "rgba(152, 158, 171, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_182_2999: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    resizeMode: "cover"
  },
  View_182_3621: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("62%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_3622: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_182_3622: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_3623: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_182_3623: {
    color: "rgba(169, 170, 188, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_3511: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("66%")
  },
  View_182_3510: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_182_3456: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_182_3454: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_182_3454: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 42,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_3455: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_182_3455: {
    color: "rgba(41, 42, 47, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_3457: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_182_3457: {
    color: "rgba(41, 42, 47, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_3458: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_182_3458: {
    color: "rgba(41, 42, 47, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_3524: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_3481: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_182_3481: {
    color: "rgba(41, 42, 47, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_3512: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_182_3512: {
    color: "rgba(41, 42, 47, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_3525: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_182_3525: {
    color: "rgba(41, 42, 47, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_3583: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51%"),
    justifyContent: "flex-start"
  },
  Text_182_3583: {
    color: "rgba(41, 42, 47, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_3608: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("203%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_3608_151_1649: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I182_3608_151_1649: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_3624: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("147%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_3628: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_182_3629: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_182_3630: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_182_3630: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_3594: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_182_3594: {
    color: "rgba(41, 42, 47, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2757: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_182_2758: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 68, 79, 1)"
  },
  View_182_2759: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_182_2760: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2764: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_182_2765: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_182_2774: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_182_2778: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_182_2781: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_182_2786: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_182_2787: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_182_2788: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2790: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_182_2791: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_182_3131: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_182_2831: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_182_2832: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_182_2833: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2833_3125_33763: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I182_2833_3120_35445: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_182_2986: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_182_2979: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2979_3174_9337: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I182_2979_3173_21494: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_182_2962: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_182_2968: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_182_2830: {
    width: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_182_2830: {
    color: "rgba(255, 255, 255, 1)",
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
