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
      <View style={styles.View_181_1723} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b75b088-e420-4da4-a1e7-f99885b3aeaa"
        }}
        style={styles.ImageBackground_182_2233}
      />
      <View style={styles.View_182_2664}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc98b249-4138-45a0-9fe5-fc2127185334"
          }}
          style={styles.ImageBackground_182_2211}
        />
        <View style={styles.View_182_2223}>
          <View style={styles.View_182_2221} />
          <View style={styles.View_182_2222}>
            <Text style={styles.Text_182_2222}>SPORTS</Text>
          </View>
        </View>
        <View style={styles.View_182_2378}>
          <View style={styles.View_182_2239} />
          <View style={styles.View_182_2212}>
            <View style={styles.View_182_2216}>
              <Text style={styles.Text_182_2216}>
                Ghana is the future: Mephis Depay Returned to Ghana
              </Text>
            </View>
            <View style={styles.View_182_2218}>
              <View style={styles.View_182_2220}>
                <Text style={styles.Text_182_2220}>29 Apr 2022</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_182_2379}>
        <View style={styles.View_182_2380}>
          <View style={styles.View_I182_2380_139_2076}>
            <Text style={styles.Text_I182_2380_139_2076}>General news</Text>
          </View>
          <View style={styles.View_I182_2380_139_2077}>
            <View style={styles.View_I182_2380_139_2078}>
              <Text style={styles.Text_I182_2380_139_2078}>View all</Text>
            </View>
            <View style={styles.View_I182_2380_139_2079}>
              <View style={styles.View_I182_2380_139_2079_3125_33776}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9822fdfc-7e7f-42ff-abe3-18063904ac9a"
                  }}
                  style={styles.ImageBackground_I182_2380_139_2079_3120_35525}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_182_2381}>
          <View style={styles.View_182_2383}>
            <View style={styles.View_I182_2383_139_2130}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5cbcd17-8fae-4604-a788-0f3bb197ec66"
                }}
                style={styles.ImageBackground_I182_2383_139_2131}
              />
              <View style={styles.View_I182_2383_139_2132}>
                <View style={styles.View_I182_2383_139_2133}>
                  <Text style={styles.Text_I182_2383_139_2133}>POLITICS</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I182_2383_139_2134}>
              <View style={styles.View_I182_2383_139_2135}>
                <Text style={styles.Text_I182_2383_139_2135}>
                  Money shouldn’t be the deciding factor in NDC
                </Text>
              </View>
              <View style={styles.View_I182_2383_139_2136}>
                <Text style={styles.Text_I182_2383_139_2136}>
                  Sed arcu id mi ac diam mauris consectetur. Ullamcorper.
                </Text>
              </View>
              <View style={styles.View_I182_2383_139_2137}>
                <View style={styles.View_I182_2383_139_2139}>
                  <Text style={styles.Text_I182_2383_139_2139}>
                    29 Apr 2022
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_182_2384}>
            <View style={styles.View_I182_2384_139_2130}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8757c9b6-185e-4d8f-913e-de08828e62c9"
                }}
                style={styles.ImageBackground_I182_2384_139_2131}
              />
              <View style={styles.View_I182_2384_139_2132}>
                <View style={styles.View_I182_2384_139_2133}>
                  <Text style={styles.Text_I182_2384_139_2133}>BUSINESS</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I182_2384_139_2134}>
              <View style={styles.View_I182_2384_139_2135}>
                <Text style={styles.Text_I182_2384_139_2135}>
                  Marwako says FDA slapped them with a hefty GHS 750,00
                </Text>
              </View>
              <View style={styles.View_I182_2384_139_2136}>
                <Text style={styles.Text_I182_2384_139_2136}>
                  Egestas sem pharetra lacus, porta. Habitant enim tincidunt.
                </Text>
              </View>
              <View style={styles.View_I182_2384_139_2137}>
                <View style={styles.View_I182_2384_139_2139}>
                  <Text style={styles.Text_I182_2384_139_2139}>
                    29 Apr 2022
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_182_2382}>
            <View style={styles.View_I182_2382_139_2130}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1eb38963-56bb-4dd2-9a1e-0f4e8f85418a"
                }}
                style={styles.ImageBackground_I182_2382_139_2131}
              />
              <View style={styles.View_I182_2382_139_2132}>
                <View style={styles.View_I182_2382_139_2133}>
                  <Text style={styles.Text_I182_2382_139_2133}>BUSINESS</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I182_2382_139_2134}>
              <View style={styles.View_I182_2382_139_2135}>
                <Text style={styles.Text_I182_2382_139_2135}>
                  FDA accuses Marwako for unilaterally destroying food items
                  being investigated
                </Text>
              </View>
              <View style={styles.View_I182_2382_139_2136}>
                <Text style={styles.Text_I182_2382_139_2136}>
                  Pellentesque a, ullamcorper suscipit enim, neque urna et
                  integer. Semper maecenas auctor cursus aenean viverra turpis.
                  Rhoncus, eleifend suspendisse tellus, euismod. Felis urna,
                  cursus gravida cursus vestibulum diam fermentum fringilla id.
                  Eu nisl nunc, amet tellus accumsan, pulvinar semper.
                </Text>
              </View>
              <View style={styles.View_I182_2382_139_2137}>
                <View style={styles.View_I182_2382_139_2139}>
                  <Text style={styles.Text_I182_2382_139_2139}>
                    29 Apr 2022
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_182_2385}>
            <View style={styles.View_I182_2385_139_2130}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14d69c17-9b73-4abd-bdf8-67d7c5610301"
                }}
                style={styles.ImageBackground_I182_2385_139_2131}
              />
              <View style={styles.View_I182_2385_139_2132}>
                <View style={styles.View_I182_2385_139_2133}>
                  <Text style={styles.Text_I182_2385_139_2133}>SPORTS</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I182_2385_139_2134}>
              <View style={styles.View_I182_2385_139_2135}>
                <Text style={styles.Text_I182_2385_139_2135}>
                  Asante Kotoko crowned GPL winners 2022/2023
                </Text>
              </View>
              <View style={styles.View_I182_2385_139_2136}>
                <Text style={styles.Text_I182_2385_139_2136}>
                  Semper viverra senectus a tellus sed. Tempor ipsum amet.
                </Text>
              </View>
              <View style={styles.View_I182_2385_139_2137}>
                <View style={styles.View_I182_2385_139_2139}>
                  <Text style={styles.Text_I182_2385_139_2139}>
                    29 Apr 2022
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_182_2482}>
        <View style={styles.View_182_2483}>
          <View style={styles.View_I182_2483_151_1649}>
            <Text style={styles.Text_I182_2483_151_1649}>Fresh topics</Text>
          </View>
        </View>
        <View style={styles.View_182_2484}>
          <View style={styles.View_182_2485}>
            <View style={styles.View_182_2486}>
              <View style={styles.View_I182_2486_151_1613}>
                <Text style={styles.Text_I182_2486_151_1613}>General</Text>
              </View>
            </View>
            <View style={styles.View_182_2487}>
              <View style={styles.View_I182_2487_151_1618}>
                <Text style={styles.Text_I182_2487_151_1618}>E-levy</Text>
              </View>
            </View>
            <View style={styles.View_182_2488}>
              <View style={styles.View_I182_2488_151_1618}>
                <Text style={styles.Text_I182_2488_151_1618}>Monkeypox</Text>
              </View>
            </View>
            <View style={styles.View_182_2489}>
              <View style={styles.View_I182_2489_151_1618}>
                <Text style={styles.Text_I182_2489_151_1618}>Terrorism</Text>
              </View>
            </View>
            <View style={styles.View_182_2490}>
              <View style={styles.View_I182_2490_151_1618}>
                <Text style={styles.Text_I182_2490_151_1618}>Roads</Text>
              </View>
            </View>
            <View style={styles.View_182_2491}>
              <View style={styles.View_I182_2491_151_1618}>
                <Text style={styles.Text_I182_2491_151_1618}>Covid-19</Text>
              </View>
            </View>
            <View style={styles.View_182_2492}>
              <View style={styles.View_I182_2492_151_1618}>
                <Text style={styles.Text_I182_2492_151_1618}>Parliament</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_182_2493}>
            <View style={styles.View_182_2505}>
              <View style={styles.View_182_2506}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc9e68a1-17d5-4a21-9970-f9c96b72f8d2"
                  }}
                  style={styles.ImageBackground_182_2507}
                />
                <View style={styles.View_182_2508} />
                <View style={styles.View_182_2509}>
                  <View style={styles.View_I182_2509_133_1455}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb05271c-4e54-44c5-a86e-39e2cb5e6b87"
                      }}
                      style={styles.ImageBackground_I182_2509_133_1456}
                    />
                    <View style={styles.View_I182_2509_133_1457}>
                      <Text style={styles.Text_I182_2509_133_1457}>TF</Text>
                    </View>
                  </View>
                  <View style={styles.View_I182_2509_133_1458}>
                    <Text style={styles.Text_I182_2509_133_1458}>
                      The Finder
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_182_2510}>
                <View style={styles.View_182_2511}>
                  <Text style={styles.Text_182_2511}>
                    E-levy: Ghanaian hits the streets of Accra to protest
                    against e-levy
                  </Text>
                </View>
                <View style={styles.View_182_2512}>
                  <Text style={styles.Text_182_2512}>
                    Pellentesque a, ullamcorper suscipit enim, neque urna et
                    integer. Semper maecenas auctor cursus aenean viverra
                    turpis. Rhoncus, eleifend suspendisse tellus, euismod. Felis
                    urna, cursus gravida cursus vestibulum diam fermentum
                    fringilla id. Eu nisl nunc, amet tellus accumsan, pulvinar
                    semper.
                  </Text>
                </View>
                <View style={styles.View_182_2513}>
                  <View style={styles.View_182_2515}>
                    <Text style={styles.Text_182_2515}>29 Apr 2022</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_182_2494}>
              <View style={styles.View_182_2495}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9d6443f-b5f4-4369-b8e7-1203010f50ce"
                  }}
                  style={styles.ImageBackground_182_2496}
                />
                <View style={styles.View_182_2497} />
                <View style={styles.View_182_2498}>
                  <View style={styles.View_I182_2498_133_1455}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04e0cd05-c179-4fef-8f54-752085a81134"
                      }}
                      style={styles.ImageBackground_I182_2498_133_1456}
                    />
                    <View style={styles.View_I182_2498_133_1457}>
                      <Text style={styles.Text_I182_2498_133_1457}>RP</Text>
                    </View>
                  </View>
                  <View style={styles.View_I182_2498_133_1458}>
                    <Text style={styles.Text_I182_2498_133_1458}>
                      Republic Press
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_182_2499}>
                <View style={styles.View_182_2500}>
                  <Text style={styles.Text_182_2500}>
                    Bagbin blames Supreme Court For Purported confusionover
                    Quorum
                  </Text>
                </View>
                <View style={styles.View_182_2501}>
                  <Text style={styles.Text_182_2501}>
                    Pellentesque a, ullamcorper suscipit enim, neque urna et
                    integer. Semper maecenas auctor cursus aenean viverra
                    turpis. Rhoncus, eleifend suspendisse tellus, euismod. Felis
                    urna, cursus gravida cursus vestibulum diam fermentum
                    fringilla id. Eu nisl nunc, amet tellus accumsan, pulvinar
                    semper.
                  </Text>
                </View>
                <View style={styles.View_182_2502}>
                  <View style={styles.View_182_2504}>
                    <Text style={styles.Text_182_2504}>29 Apr 2022</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_182_2516}>
              <View style={styles.View_182_2517}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6483fbb6-802d-4066-9ecf-7bb8222a3b75"
                  }}
                  style={styles.ImageBackground_182_2518}
                />
                <View style={styles.View_182_2519} />
                <View style={styles.View_182_2520}>
                  <View style={styles.View_I182_2520_133_1455}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fffc5da-862a-4275-81a2-283716ff0195"
                      }}
                      style={styles.ImageBackground_I182_2520_133_1456}
                    />
                    <View style={styles.View_I182_2520_133_1457}>
                      <Text style={styles.Text_I182_2520_133_1457}>DA</Text>
                    </View>
                  </View>
                  <View style={styles.View_I182_2520_133_1458}>
                    <Text style={styles.Text_I182_2520_133_1458}>
                      Daily Analyst
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_182_2521}>
                <View style={styles.View_182_2522}>
                  <Text style={styles.Text_182_2522}>
                    Prez. Comission Nissan Assembly Plant
                  </Text>
                </View>
                <View style={styles.View_182_2523}>
                  <Text style={styles.Text_182_2523}>
                    Pellentesque a, ullamcorper suscipit enim, neque urna et
                    integer. Semper maecenas auctor cursus aenean viverra
                    turpis. Rhoncus, eleifend suspendisse tellus, euismod. Felis
                    urna, cursus gravida cursus vestibulum diam fermentum
                    fringilla id. Eu nisl nunc, amet tellus accumsan, pulvinar
                    semper.
                  </Text>
                </View>
                <View style={styles.View_182_2524}>
                  <View style={styles.View_182_2526}>
                    <Text style={styles.Text_182_2526}>29 Apr 2022</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_182_2527}>
              <View style={styles.View_182_2528} />
              <View style={styles.View_182_2529}>
                <Text style={styles.Text_182_2529}>See all stories</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_181_1851}>
        <View style={styles.View_181_1852} />
        <View style={styles.View_181_1853}>
          <View style={styles.View_181_1854} />
          <View style={styles.View_181_1858}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26665029-9ea8-447e-b1d0-c48d0862e84f"
              }}
              style={styles.ImageBackground_181_1859}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27403b2c-62f4-4312-8851-1cf1a6161d9b"
              }}
              style={styles.ImageBackground_181_1868}
            />
            <View style={styles.View_181_1872}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1cf15449-02c1-44f0-9067-34a46c27788c"
                }}
                style={styles.ImageBackground_181_1875}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c48a9be3-0644-4991-a7c6-4acdff0e89e8"
                }}
                style={styles.ImageBackground_181_1880}
              />
              <View style={styles.View_181_1881} />
            </View>
          </View>
          <View style={styles.View_181_1882} />
          <View style={styles.View_181_1884}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/890e65eb-401a-46d8-a869-f2a4001e8e8c"
              }}
              style={styles.ImageBackground_181_1885}
            />
          </View>
        </View>
        <View style={styles.View_181_1931}>
          <TouchableOpacity
            style={styles.TouchableOpacity_181_1932}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_1712"))
            }
          >
            <View style={styles.View_I181_1932_139_1105}>
              <Text style={styles.Text_I181_1932_139_1105}>Trending today</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b479c4ea-87ba-44a0-be00-7a9d6ca41d81"
              }}
              style={styles.ImageBackground_I181_1932_139_1106}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_181_1934}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_1710"))
            }
          >
            <View style={styles.View_I181_1934_139_1108}>
              <Text style={styles.Text_I181_1934_139_1108}>Politics</Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I181_1934_139_1109}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_181_1935}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_1710"))
            }
          >
            <View style={styles.View_I181_1935_139_1108}>
              <Text style={styles.Text_I181_1935_139_1108}>Sports</Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I181_1935_139_1109}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_181_1936}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_1710"))
            }
          >
            <View style={styles.View_I181_1936_139_1108}>
              <Text style={styles.Text_I181_1936_139_1108}>Business</Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I181_1936_139_1109}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_181_1937}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_1710"))
            }
          >
            <View style={styles.View_I181_1937_139_1108}>
              <Text style={styles.Text_I181_1937_139_1108}>Entertainment</Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I181_1937_139_1109}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.View_181_2190}>
          <Text style={styles.Text_181_2190}>The Publisher</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_182_2210}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("151_4479"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/024c0ce1-8e1e-4a7c-b6fa-cc454a8421c1"
            }}
            style={styles.ImageBackground_181_2203}
          />
          <View style={styles.View_182_2204}>
            <View style={styles.View_I182_2204_3125_33763}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa06401c-e4fd-44a5-8c39-707851fdb769"
                }}
                style={styles.ImageBackground_I182_2204_3120_35445}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_182_2579}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("182_2587"))
          }
        >
          <View style={styles.View_182_2580}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/122b5a70-ff26-40a9-adcf-32e88697303b"
              }}
              style={styles.ImageBackground_182_2581}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e759975d-6f05-4186-a93c-20712ee612f8"
              }}
              style={styles.ImageBackground_182_2582}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  View_181_1723: {
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
  ImageBackground_182_2233: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("64%")
  },
  View_182_2664: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  ImageBackground_182_2211: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_182_2223: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("2%")
  },
  View_182_2221: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(53, 134, 255, 1)"
  },
  View_182_2222: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_182_2222: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2378: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("25%")
  },
  View_182_2239: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_182_2212: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2216: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_182_2216: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2218: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2220: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_182_2220: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2379: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2380: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2380_139_2076: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I182_2380_139_2076: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2380_139_2077: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2380_139_2078: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I182_2380_139_2078: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2380_139_2079: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2380_139_2079_3125_33776: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I182_2380_139_2079_3120_35525: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_182_2381: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2383: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2383_139_2130: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I182_2383_139_2131: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I182_2383_139_2132: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("2%"),
    backgroundColor: "rgba(147, 96, 210, 1)"
  },
  View_I182_2383_139_2133: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I182_2383_139_2133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2383_139_2134: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2383_139_2135: {
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
  Text_I182_2383_139_2135: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2383_139_2136: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I182_2383_139_2136: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2383_139_2137: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2383_139_2139: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I182_2383_139_2139: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2384: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2384_139_2130: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I182_2384_139_2131: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I182_2384_139_2132: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 33, 137, 1)"
  },
  View_I182_2384_139_2133: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I182_2384_139_2133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2384_139_2134: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2384_139_2135: {
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
  Text_I182_2384_139_2135: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2384_139_2136: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I182_2384_139_2136: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2384_139_2137: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2384_139_2139: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I182_2384_139_2139: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2382: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("101%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2382_139_2130: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I182_2382_139_2131: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I182_2382_139_2132: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 33, 137, 1)"
  },
  View_I182_2382_139_2133: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I182_2382_139_2133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2382_139_2134: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2382_139_2135: {
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
  Text_I182_2382_139_2135: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2382_139_2136: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I182_2382_139_2136: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2382_139_2137: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2382_139_2139: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I182_2382_139_2139: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2385: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("151%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2385_139_2130: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I182_2385_139_2131: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I182_2385_139_2132: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    backgroundColor: "rgba(92, 193, 48, 1)"
  },
  View_I182_2385_139_2133: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I182_2385_139_2133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2385_139_2134: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2385_139_2135: {
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
  Text_I182_2385_139_2135: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2385_139_2136: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I182_2385_139_2136: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2385_139_2137: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2385_139_2139: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I182_2385_139_2139: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2482: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("120%"),
    minHeight: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("111%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2483: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2483_151_1649: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I182_2483_151_1649: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2484: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2485: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2486: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 60, 93, 1)"
  },
  View_I182_2486_151_1613: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I182_2486_151_1613: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2487: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 235, 240, 1)"
  },
  View_I182_2487_151_1618: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I182_2487_151_1618: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2488: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 235, 240, 1)"
  },
  View_I182_2488_151_1618: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I182_2488_151_1618: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2489: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 235, 240, 1)"
  },
  View_I182_2489_151_1618: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I182_2489_151_1618: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2490: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("114%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 235, 240, 1)"
  },
  View_I182_2490_151_1618: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I182_2490_151_1618: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2491: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("137%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 235, 240, 1)"
  },
  View_I182_2491_151_1618: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I182_2491_151_1618: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2492: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("166%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 235, 240, 1)"
  },
  View_I182_2492_151_1618: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I182_2492_151_1618: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2493: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("107%"),
    minHeight: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2505: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2506: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_182_2507: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_182_2508: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_182_2509: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2509_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I182_2509_133_1456: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I182_2509_133_1457: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I182_2509_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2509_133_1458: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I182_2509_133_1458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2510: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2511: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_182_2511: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2512: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_182_2512: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2513: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2515: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_182_2515: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2494: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2495: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_182_2496: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_182_2497: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_182_2498: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2498_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I182_2498_133_1456: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I182_2498_133_1457: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I182_2498_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2498_133_1458: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I182_2498_133_1458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2499: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2500: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_182_2500: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2501: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_182_2501: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2502: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2504: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_182_2504: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2516: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2517: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_182_2518: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_182_2519: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_182_2520: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I182_2520_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I182_2520_133_1456: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I182_2520_133_1457: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I182_2520_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I182_2520_133_1458: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I182_2520_133_1458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2521: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2522: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_182_2522: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2523: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_182_2523: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2524: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2526: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_182_2526: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_182_2527: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("100%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2528: {
    width: wp("88%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(68, 124, 252, 1)",
    borderWidth: 1
  },
  View_182_2529: {
    width: wp("27%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "flex-start"
  },
  Text_182_2529: {
    color: "rgba(68, 124, 252, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_181_1851: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_181_1852: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 68, 79, 1)"
  },
  View_181_1853: {
    flexGrow: 1,
    width: wp("101%"),
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
  View_181_1854: {
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
  View_181_1858: {
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
  ImageBackground_181_1859: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_181_1868: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_181_1872: {
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
  ImageBackground_181_1875: {
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
  ImageBackground_181_1880: {
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
  View_181_1881: {
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
  View_181_1882: {
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
  View_181_1884: {
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
  ImageBackground_181_1885: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_181_1931: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_181_1932: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I181_1932_139_1105: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I181_1932_139_1105: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I181_1932_139_1106: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%")
  },
  TouchableOpacity_181_1934: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I181_1934_139_1108: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I181_1934_139_1108: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I181_1934_139_1109: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%")
  },
  TouchableOpacity_181_1935: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I181_1935_139_1108: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I181_1935_139_1108: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I181_1935_139_1109: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%")
  },
  TouchableOpacity_181_1936: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I181_1936_139_1108: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I181_1936_139_1108: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I181_1936_139_1109: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%")
  },
  TouchableOpacity_181_1937: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("98%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I181_1937_139_1108: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I181_1937_139_1108: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I181_1937_139_1109: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%")
  },
  View_181_2190: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_181_2190: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_182_2210: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%")
  },
  ImageBackground_181_2203: {
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
  View_182_2204: {
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
  View_I182_2204_3125_33763: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I182_2204_3120_35445: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_182_2579: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_2580: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_182_2581: {
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
  ImageBackground_182_2582: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
