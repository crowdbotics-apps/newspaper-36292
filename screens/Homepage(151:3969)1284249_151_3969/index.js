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
      <View style={styles.View_151_3970} />
      <View style={styles.View_151_3971}>
        <View style={styles.View_151_3972}>
          <View style={styles.View_I151_3972_139_1253}>
            <Text style={styles.Text_I151_3972_139_1253}>
              Today’s Headlines
            </Text>
          </View>
          <View style={styles.View_I151_3972_139_1265}>
            <View style={styles.View_I151_3972_139_1254}>
              <Text style={styles.Text_I151_3972_139_1254}>View all</Text>
            </View>
            <View style={styles.View_I151_3972_139_1260}>
              <View style={styles.View_I151_3972_139_1260_3125_33776}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c4476af-a86b-4b3c-b319-46c2b25d49c3"
                  }}
                  style={styles.ImageBackground_I151_3972_139_1260_3120_35525}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_151_3973}>
          <View style={styles.View_151_3974}>
            <View style={styles.View_151_4459}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7b2f9f1-a541-491c-bae5-8b244abfbec3"
                }}
                style={styles.ImageBackground_151_4460}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2acdf1b-a734-4cef-94fa-614daaab6e26"
                }}
                style={styles.ImageBackground_151_4461}
              />
              <View style={styles.View_151_4462} />
              <View style={styles.View_151_4463}>
                <View style={styles.View_I151_4463_133_1455}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3de2b48-ffc6-4822-ad26-ab3d176f70d0"
                    }}
                    style={styles.ImageBackground_I151_4463_133_1456}
                  />
                  <View style={styles.View_I151_4463_133_1457}>
                    <Text style={styles.Text_I151_4463_133_1457}>TC</Text>
                  </View>
                </View>
                <View style={styles.View_I151_4463_133_1458}>
                  <Text style={styles.Text_I151_4463_133_1458}>
                    The Custodian
                  </Text>
                </View>
              </View>
              <View style={styles.View_151_4464}>
                <View style={styles.View_151_4465} />
                <View style={styles.View_151_4466}>
                  <View style={styles.View_151_4470}>
                    <Text style={styles.Text_151_4470}>
                      Nigerian President issuses stern warning to would be
                      terrorist
                    </Text>
                  </View>
                  <View style={styles.View_151_4471}>
                    <Text style={styles.Text_151_4471}>
                      Urna tincidunt lorem suscipit quis tristique sodales
                      ultricies convallis. Tincidunt donec vel egestas integer
                      amet. Nam sit dui pretium id at.
                    </Text>
                  </View>
                  <View style={styles.View_151_4472}>
                    <View style={styles.View_151_4474}>
                      <Text style={styles.Text_151_4474}>13 Jun 2022</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_151_3991}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f7af321-eea4-4b4b-8456-9d23d9d3161a"
                }}
                style={styles.ImageBackground_151_3992}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc81e292-07f1-4343-8fc3-1b5d213d64cb"
                }}
                style={styles.ImageBackground_151_3993}
              />
              <View style={styles.View_151_3994} />
              <View style={styles.View_151_3995}>
                <View style={styles.View_I151_3995_133_1455}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd4806c6-03b3-46b4-90f9-68790345aa9d"
                    }}
                    style={styles.ImageBackground_I151_3995_133_1456}
                  />
                  <View style={styles.View_I151_3995_133_1457}>
                    <Text style={styles.Text_I151_3995_133_1457}>GT</Text>
                  </View>
                </View>
                <View style={styles.View_I151_3995_133_1458}>
                  <Text style={styles.Text_I151_3995_133_1458}>
                    Ghanaian Times
                  </Text>
                </View>
              </View>
              <View style={styles.View_151_3996}>
                <View style={styles.View_151_3997} />
                <View style={styles.View_151_3998}>
                  <View style={styles.View_151_3999}>
                    <View style={styles.View_151_4000}>
                      <Text style={styles.Text_151_4000}>-Akuffo Addo</Text>
                    </View>
                  </View>
                  <View style={styles.View_151_4002}>
                    <Text style={styles.Text_151_4002}>
                      Nana Signs E-levy Into law
                    </Text>
                  </View>
                  <View style={styles.View_151_4003}>
                    <Text style={styles.Text_151_4003}>
                      Ornare eleifend ultricies in viverra ornare nullam non.
                      Aenean ornare urna nec ullamcorper tempus.{" "}
                    </Text>
                  </View>
                  <View style={styles.View_151_4004}>
                    <View style={styles.View_151_4006}>
                      <Text style={styles.Text_151_4006}>29 Apr 2022</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_151_4007}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37e49204-e6ae-403e-ba66-fa25d96255ac"
                }}
                style={styles.ImageBackground_151_4008}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d6809dc-ec33-4ad2-afd3-7a6f67bf1c3b"
                }}
                style={styles.ImageBackground_151_4009}
              />
              <View style={styles.View_151_4010}>
                <View style={styles.View_151_4011} />
                <View style={styles.View_151_4012} />
                <View style={styles.View_151_4013}>
                  <View style={styles.View_151_4014}>
                    <View style={styles.View_151_4015}>
                      <Text style={styles.Text_151_4015}>-Akuffo Addo</Text>
                    </View>
                  </View>
                  <View style={styles.View_151_4017}>
                    <Text style={styles.Text_151_4017}>
                      Akuffo Addo Praises Dampare{" "}
                    </Text>
                  </View>
                  <View style={styles.View_151_4018}>
                    <Text style={styles.Text_151_4018}>
                      Ornare eleifend ultricies in viverra ornare nullam non.
                      Aenean ornare urna nec ullamcorper tempus.{" "}
                    </Text>
                  </View>
                  <View style={styles.View_151_4019}>
                    <View style={styles.View_151_4021}>
                      <Text style={styles.Text_151_4021}>29 Apr 2022</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_151_4022}>
                <View style={styles.View_I151_4022_133_1455}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/256f65df-38fc-4e11-a647-4c7210375460"
                    }}
                    style={styles.ImageBackground_I151_4022_133_1456}
                  />
                  <View style={styles.View_I151_4022_133_1457}>
                    <Text style={styles.Text_I151_4022_133_1457}>TC</Text>
                  </View>
                </View>
                <View style={styles.View_I151_4022_133_1458}>
                  <Text style={styles.Text_I151_4022_133_1458}>
                    The Custodian
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/668babad-37f0-4626-a9ef-29a7dde2b932"
            }}
            style={styles.ImageBackground_151_4023}
          />
        </View>
      </View>
      <View style={styles.View_151_4029}>
        <View style={styles.View_151_4030}>
          <View style={styles.View_I151_4030_139_2076}>
            <Text style={styles.Text_I151_4030_139_2076}>General news</Text>
          </View>
          <View style={styles.View_I151_4030_139_2077}>
            <View style={styles.View_I151_4030_139_2078}>
              <Text style={styles.Text_I151_4030_139_2078}>View all</Text>
            </View>
            <View style={styles.View_I151_4030_139_2079}>
              <View style={styles.View_I151_4030_139_2079_3125_33776}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1234ab0-41fb-4540-85e7-fac6a817c8d7"
                  }}
                  style={styles.ImageBackground_I151_4030_139_2079_3120_35525}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_151_4031}>
          <View style={styles.View_151_4032}>
            <View style={styles.View_I151_4032_139_2130}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12af277c-95f7-470b-acfa-cbc51a6621be"
                }}
                style={styles.ImageBackground_I151_4032_139_2131}
              />
              <View style={styles.View_I151_4032_139_2132}>
                <View style={styles.View_I151_4032_139_2133}>
                  <Text style={styles.Text_I151_4032_139_2133}>BUSINESS</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I151_4032_139_2134}>
              <View style={styles.View_I151_4032_139_2135}>
                <Text style={styles.Text_I151_4032_139_2135}>
                  FDA accuses Marwako for unilaterally destroying food items
                  being investigated
                </Text>
              </View>
              <View style={styles.View_I151_4032_139_2136}>
                <Text style={styles.Text_I151_4032_139_2136}>
                  Pellentesque a, ullamcorper suscipit enim, neque urna et
                  integer. Semper maecenas auctor cursus aenean viverra turpis.
                  Rhoncus, eleifend suspendisse tellus, euismod. Felis urna,
                  cursus gravida cursus vestibulum diam fermentum fringilla id.
                  Eu nisl nunc, amet tellus accumsan, pulvinar semper.
                </Text>
              </View>
              <View style={styles.View_I151_4032_139_2137}>
                <View style={styles.View_I151_4032_139_2139}>
                  <Text style={styles.Text_I151_4032_139_2139}>
                    29 Apr 2022
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_151_4033}>
            <View style={styles.View_I151_4033_139_2130}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3536d59-22a2-4435-aec6-c787d8029d30"
                }}
                style={styles.ImageBackground_I151_4033_139_2131}
              />
              <View style={styles.View_I151_4033_139_2132}>
                <View style={styles.View_I151_4033_139_2133}>
                  <Text style={styles.Text_I151_4033_139_2133}>POLITICS</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I151_4033_139_2134}>
              <View style={styles.View_I151_4033_139_2135}>
                <Text style={styles.Text_I151_4033_139_2135}>
                  Money shouldn’t be the deciding factor in NDC
                </Text>
              </View>
              <View style={styles.View_I151_4033_139_2136}>
                <Text style={styles.Text_I151_4033_139_2136}>
                  Sed arcu id mi ac diam mauris consectetur. Ullamcorper.
                </Text>
              </View>
              <View style={styles.View_I151_4033_139_2137}>
                <View style={styles.View_I151_4033_139_2139}>
                  <Text style={styles.Text_I151_4033_139_2139}>
                    29 Apr 2022
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_151_4034}>
            <View style={styles.View_I151_4034_139_2130}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e8998f2-7a84-4710-b769-6368bfb8132a"
                }}
                style={styles.ImageBackground_I151_4034_139_2131}
              />
              <View style={styles.View_I151_4034_139_2132}>
                <View style={styles.View_I151_4034_139_2133}>
                  <Text style={styles.Text_I151_4034_139_2133}>BUSINESS</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I151_4034_139_2134}>
              <View style={styles.View_I151_4034_139_2135}>
                <Text style={styles.Text_I151_4034_139_2135}>
                  Marwako says FDA slapped them with a hefty GHS 750,00
                </Text>
              </View>
              <View style={styles.View_I151_4034_139_2136}>
                <Text style={styles.Text_I151_4034_139_2136}>
                  Egestas sem pharetra lacus, porta. Habitant enim tincidunt.
                </Text>
              </View>
              <View style={styles.View_I151_4034_139_2137}>
                <View style={styles.View_I151_4034_139_2139}>
                  <Text style={styles.Text_I151_4034_139_2139}>
                    29 Apr 2022
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_151_4035}>
            <View style={styles.View_I151_4035_139_2130}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ed34502-03a0-4f50-8300-047715bdd790"
                }}
                style={styles.ImageBackground_I151_4035_139_2131}
              />
              <View style={styles.View_I151_4035_139_2132}>
                <View style={styles.View_I151_4035_139_2133}>
                  <Text style={styles.Text_I151_4035_139_2133}>SPORTS</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I151_4035_139_2134}>
              <View style={styles.View_I151_4035_139_2135}>
                <Text style={styles.Text_I151_4035_139_2135}>
                  Asante Kotoko crowned GPL winners 2022/2023
                </Text>
              </View>
              <View style={styles.View_I151_4035_139_2136}>
                <Text style={styles.Text_I151_4035_139_2136}>
                  Semper viverra senectus a tellus sed. Tempor ipsum amet.
                </Text>
              </View>
              <View style={styles.View_I151_4035_139_2137}>
                <View style={styles.View_I151_4035_139_2139}>
                  <Text style={styles.Text_I151_4035_139_2139}>
                    29 Apr 2022
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_151_4036}>
        <View style={styles.View_151_4037}>
          <View style={styles.View_I151_4037_151_1649}>
            <Text style={styles.Text_I151_4037_151_1649}>Hot topics</Text>
          </View>
        </View>
        <View style={styles.View_151_4038}>
          <View style={styles.View_151_4039}>
            <View style={styles.View_151_4040}>
              <View style={styles.View_I151_4040_151_1613}>
                <Text style={styles.Text_I151_4040_151_1613}>General</Text>
              </View>
            </View>
            <View style={styles.View_151_4041}>
              <View style={styles.View_I151_4041_151_1618}>
                <Text style={styles.Text_I151_4041_151_1618}>E-levy</Text>
              </View>
            </View>
            <View style={styles.View_151_4042}>
              <View style={styles.View_I151_4042_151_1618}>
                <Text style={styles.Text_I151_4042_151_1618}>Monkeypox</Text>
              </View>
            </View>
            <View style={styles.View_151_4043}>
              <View style={styles.View_I151_4043_151_1618}>
                <Text style={styles.Text_I151_4043_151_1618}>Terrorism</Text>
              </View>
            </View>
            <View style={styles.View_151_4044}>
              <View style={styles.View_I151_4044_151_1618}>
                <Text style={styles.Text_I151_4044_151_1618}>Roads</Text>
              </View>
            </View>
            <View style={styles.View_151_4045}>
              <View style={styles.View_I151_4045_151_1618}>
                <Text style={styles.Text_I151_4045_151_1618}>Covid-19</Text>
              </View>
            </View>
            <View style={styles.View_151_4046}>
              <View style={styles.View_I151_4046_151_1618}>
                <Text style={styles.Text_I151_4046_151_1618}>Parliament</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_151_4047}>
            <View style={styles.View_151_4048}>
              <View style={styles.View_151_4049}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1659d28e-825b-4b34-9ded-12af28ad6392"
                  }}
                  style={styles.ImageBackground_151_4050}
                />
                <View style={styles.View_151_4051} />
                <View style={styles.View_151_4052}>
                  <View style={styles.View_I151_4052_133_1455}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e1e30be-52fb-4eb6-9780-bea03119714f"
                      }}
                      style={styles.ImageBackground_I151_4052_133_1456}
                    />
                    <View style={styles.View_I151_4052_133_1457}>
                      <Text style={styles.Text_I151_4052_133_1457}>RP</Text>
                    </View>
                  </View>
                  <View style={styles.View_I151_4052_133_1458}>
                    <Text style={styles.Text_I151_4052_133_1458}>
                      Republic Press
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_151_4053}>
                <View style={styles.View_151_4054}>
                  <Text style={styles.Text_151_4054}>
                    Bagbin blames Supreme Court For Purported confusionover
                    Quorum
                  </Text>
                </View>
                <View style={styles.View_151_4055}>
                  <Text style={styles.Text_151_4055}>
                    Pellentesque a, ullamcorper suscipit enim, neque urna et
                    integer. Semper maecenas auctor cursus aenean viverra
                    turpis. Rhoncus, eleifend suspendisse tellus, euismod. Felis
                    urna, cursus gravida cursus vestibulum diam fermentum
                    fringilla id. Eu nisl nunc, amet tellus accumsan, pulvinar
                    semper.
                  </Text>
                </View>
                <View style={styles.View_151_4056}>
                  <View style={styles.View_151_4058}>
                    <Text style={styles.Text_151_4058}>29 Apr 2022</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_151_4059}>
              <View style={styles.View_151_4060}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/104ed190-468f-422a-906f-d9d7133dc422"
                  }}
                  style={styles.ImageBackground_151_4061}
                />
                <View style={styles.View_151_4062} />
                <View style={styles.View_151_4063}>
                  <View style={styles.View_I151_4063_133_1455}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87fd8d37-eda0-470b-bbc3-c263af48040f"
                      }}
                      style={styles.ImageBackground_I151_4063_133_1456}
                    />
                    <View style={styles.View_I151_4063_133_1457}>
                      <Text style={styles.Text_I151_4063_133_1457}>TF</Text>
                    </View>
                  </View>
                  <View style={styles.View_I151_4063_133_1458}>
                    <Text style={styles.Text_I151_4063_133_1458}>
                      The Finder
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_151_4064}>
                <View style={styles.View_151_4065}>
                  <Text style={styles.Text_151_4065}>
                    The Best Venture to Invest In Now is Agribusiness
                  </Text>
                </View>
                <View style={styles.View_151_4066}>
                  <Text style={styles.Text_151_4066}>
                    Pellentesque a, ullamcorper suscipit enim, neque urna et
                    integer. Semper maecenas auctor cursus aenean viverra
                    turpis. Rhoncus, eleifend suspendisse tellus, euismod. Felis
                    urna, cursus gravida cursus vestibulum diam fermentum
                    fringilla id. Eu nisl nunc, amet tellus accumsan, pulvinar
                    semper.
                  </Text>
                </View>
                <View style={styles.View_151_4067}>
                  <View style={styles.View_151_4069}>
                    <Text style={styles.Text_151_4069}>29 Apr 2022</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_151_4070}>
              <View style={styles.View_151_4071}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/362f434a-30ee-481e-9541-a35efc974735"
                  }}
                  style={styles.ImageBackground_151_4072}
                />
                <View style={styles.View_151_4073} />
                <View style={styles.View_151_4074}>
                  <View style={styles.View_I151_4074_133_1455}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e9f3b0d-9d88-40b7-9b57-28c50c385275"
                      }}
                      style={styles.ImageBackground_I151_4074_133_1456}
                    />
                    <View style={styles.View_I151_4074_133_1457}>
                      <Text style={styles.Text_I151_4074_133_1457}>DA</Text>
                    </View>
                  </View>
                  <View style={styles.View_I151_4074_133_1458}>
                    <Text style={styles.Text_I151_4074_133_1458}>
                      Daily Analyst
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_151_4075}>
                <View style={styles.View_151_4076}>
                  <Text style={styles.Text_151_4076}>
                    Prez. Comission Nissan Assembly Plant
                  </Text>
                </View>
                <View style={styles.View_151_4077}>
                  <Text style={styles.Text_151_4077}>
                    Pellentesque a, ullamcorper suscipit enim, neque urna et
                    integer. Semper maecenas auctor cursus aenean viverra
                    turpis. Rhoncus, eleifend suspendisse tellus, euismod. Felis
                    urna, cursus gravida cursus vestibulum diam fermentum
                    fringilla id. Eu nisl nunc, amet tellus accumsan, pulvinar
                    semper.
                  </Text>
                </View>
                <View style={styles.View_151_4078}>
                  <View style={styles.View_151_4080}>
                    <Text style={styles.Text_151_4080}>29 Apr 2022</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_151_4081}>
              <View style={styles.View_151_4082} />
              <View style={styles.View_151_4083}>
                <Text style={styles.Text_151_4083}>See all stories</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_151_4328}>
        <View style={styles.View_151_4329} />
        <View style={styles.View_151_4330}>
          <View style={styles.View_151_4331} />
          <View style={styles.View_151_4335}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87b2860f-b597-4246-af79-95e1c734184b"
              }}
              style={styles.ImageBackground_151_4336}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36ad333e-f7a4-47fc-8470-ae07e96d94f3"
              }}
              style={styles.ImageBackground_151_4345}
            />
            <View style={styles.View_151_4349}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2ac2823-aa05-4180-a6c0-fef0a38e772c"
                }}
                style={styles.ImageBackground_151_4352}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f1dd9fd-d7c7-48e3-baa6-4f6edd502321"
                }}
                style={styles.ImageBackground_151_4357}
              />
              <View style={styles.View_151_4358} />
            </View>
          </View>
          <View style={styles.View_151_4359} />
          <View style={styles.View_151_4361}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39bd001f-c920-400d-9383-476da25d1b86"
              }}
              style={styles.ImageBackground_151_4362}
            />
          </View>
        </View>
        <View style={styles.View_151_4364}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/429f4eef-6dbf-48d0-a310-a411049df44b"
            }}
            style={styles.ImageBackground_151_4365}
          />
          <View style={styles.View_151_4366}>
            <Text style={styles.Text_151_4366}>NGN</Text>
          </View>
        </View>
        <View style={styles.View_151_4367}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a50172e-4e76-4499-bf5e-7411ad20524d"
            }}
            style={styles.ImageBackground_151_4368}
          />
          <View style={styles.View_151_4369}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1622f376-2978-4537-987d-c2a5aae2ffdf"
              }}
              style={styles.ImageBackground_I151_4369_2_318}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e375ce4c-a594-4b62-b8e2-d569a9290bad"
              }}
              style={styles.ImageBackground_I151_4369_2_319}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a93ea95d-081f-43f0-9e4d-810d84ab98e9"
              }}
              style={styles.ImageBackground_I151_4369_2_321}
            />
          </View>
        </View>
        <View style={styles.View_151_4370}>
          <View style={styles.View_151_4371}>
            <View style={styles.View_I151_4371_133_1444}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f15f199-dc87-4af7-97c6-b9851cc8aabe"
                }}
                style={styles.ImageBackground_I151_4371_133_1445}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e58459d-65eb-4053-8d5c-2881ce718b58"
                }}
                style={styles.ImageBackground_I151_4371_133_1627}
              />
            </View>
            <View style={styles.View_I151_4371_133_1439}>
              <Text style={styles.Text_I151_4371_133_1439}>All</Text>
            </View>
          </View>
          <View style={styles.View_151_4372}>
            <View style={styles.View_I151_4372_133_1455}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0402e87a-d106-4944-a3fd-fe79e473fce5"
                }}
                style={styles.ImageBackground_I151_4372_133_1456}
              />
              <View style={styles.View_I151_4372_133_1457}>
                <Text style={styles.Text_I151_4372_133_1457}>TC</Text>
              </View>
            </View>
            <View style={styles.View_I151_4372_133_1458}>
              <Text style={styles.Text_I151_4372_133_1458}>The Custodian</Text>
            </View>
          </View>
          <View style={styles.View_151_4373}>
            <View style={styles.View_I151_4373_133_1455}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9da6026-0893-45d9-a0e5-50c238a3f567"
                }}
                style={styles.ImageBackground_I151_4373_133_1456}
              />
              <View style={styles.View_I151_4373_133_1457}>
                <Text style={styles.Text_I151_4373_133_1457}>DT</Text>
              </View>
            </View>
            <View style={styles.View_I151_4373_133_1458}>
              <Text style={styles.Text_I151_4373_133_1458}>Daily Times</Text>
            </View>
          </View>
          <View style={styles.View_151_4374}>
            <View style={styles.View_I151_4374_133_1455}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/adf67019-a906-4419-a02b-7efaafc68e56"
                }}
                style={styles.ImageBackground_I151_4374_133_1456}
              />
              <View style={styles.View_I151_4374_133_1457}>
                <Text style={styles.Text_I151_4374_133_1457}>SN</Text>
              </View>
            </View>
            <View style={styles.View_I151_4374_133_1458}>
              <Text style={styles.Text_I151_4374_133_1458}>Sky News</Text>
            </View>
          </View>
          <View style={styles.View_151_4375}>
            <View style={styles.View_I151_4375_133_1455}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51f3a008-8b42-452c-b018-0f861eca99ec"
                }}
                style={styles.ImageBackground_I151_4375_133_1456}
              />
              <View style={styles.View_I151_4375_133_1457}>
                <Text style={styles.Text_I151_4375_133_1457}>T</Text>
              </View>
            </View>
            <View style={styles.View_I151_4375_133_1458}>
              <Text style={styles.Text_I151_4375_133_1458}>Tribune</Text>
            </View>
          </View>
          <View style={styles.View_151_4376}>
            <View style={styles.View_I151_4376_133_1455}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a36f177e-6064-486b-983d-a2f92fe2f480"
                }}
                style={styles.ImageBackground_I151_4376_133_1456}
              />
              <View style={styles.View_I151_4376_133_1457}>
                <Text style={styles.Text_I151_4376_133_1457}>GT</Text>
              </View>
            </View>
            <View style={styles.View_I151_4376_133_1458}>
              <Text style={styles.Text_I151_4376_133_1458}>Global Times</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_151_4377}>
          <View style={styles.View_151_4378}>
            <Text style={styles.Text_151_4378}>Welcome</Text>
          </View>
          <View style={styles.View_151_4379}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fbf29d5b-deed-4162-962b-89c1b6d82fa6"
              }}
              style={styles.ImageBackground_151_4380}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33e0e8f2-87ac-466e-a86d-d8f33f6c2f54"
              }}
              style={styles.ImageBackground_151_4381}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3078ef4-611c-44b6-8c31-67c81a8fa7e2"
              }}
              style={styles.ImageBackground_151_4382}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf0c7260-47fd-439a-b146-ad9cbe5a253e"
              }}
              style={styles.ImageBackground_151_4383}
            />
            <View style={styles.View_151_4384}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/498cc61b-b4d8-4af3-96b3-0d355293810d"
                }}
                style={styles.ImageBackground_151_4385}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9042553b-f21e-4a2c-9546-e6fd6d05cd4e"
                }}
                style={styles.ImageBackground_151_4386}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d31f3d1a-f125-46b6-a9ac-17a0fe6fdfa7"
                }}
                style={styles.ImageBackground_151_4387}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18a5ea9f-4cb2-4578-a90f-255193ec36a9"
                }}
                style={styles.ImageBackground_151_4388}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84e9e04b-093e-4a4e-8292-a263fdbaeecf"
                }}
                style={styles.ImageBackground_151_4389}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb32b0aa-7ef7-465d-b393-7a078db347b7"
                }}
                style={styles.ImageBackground_151_4392}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9d59b29-1cec-4a38-b0ca-521b7c80811b"
                }}
                style={styles.ImageBackground_151_4393}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/411615e9-1ac7-447f-a682-9e7a1b735798"
                }}
                style={styles.ImageBackground_151_4394}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f8b6bfc-8afe-4685-93af-d726a09bc447"
                }}
                style={styles.ImageBackground_151_4395}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d672ee04-a9b5-4f69-ab8d-8389bdb77571"
                }}
                style={styles.ImageBackground_151_4398}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5bdab90e-d753-4bf4-a515-4b0fec67304f"
                }}
                style={styles.ImageBackground_151_4399}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60aef617-c41f-43d5-811d-9d168a1b8c4d"
                }}
                style={styles.ImageBackground_151_4400}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57c3c07b-bfd1-42c0-b906-5b3a258a7816"
                }}
                style={styles.ImageBackground_151_4401}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2402c59f-49c9-4118-be43-ce00d03028a4"
                }}
                style={styles.ImageBackground_151_4402}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d4fecec-e770-4bb5-8a0d-afadb8131dfd"
                }}
                style={styles.ImageBackground_151_4403}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/249fd86a-2351-479c-9861-c7ab75adda41"
                }}
                style={styles.ImageBackground_151_4404}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b209388b-940f-4f56-bc67-ac77ec4791c4"
                }}
                style={styles.ImageBackground_151_4405}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ddedac21-fc76-4b4a-9cb9-a9c9c60ad7f7"
                }}
                style={styles.ImageBackground_151_4406}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1addb90-9efc-46b6-8982-17a3b8e1b28e"
                }}
                style={styles.ImageBackground_151_4407}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_151_4408}>
          <TouchableOpacity
            style={styles.TouchableOpacity_151_4409}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_1712"))
            }
          >
            <View style={styles.View_I151_4409_139_1105}>
              <Text style={styles.Text_I151_4409_139_1105}>Trending today</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/293bfdf0-9cac-48fe-80ab-a85c223d1652"
              }}
              style={styles.ImageBackground_I151_4409_139_1106}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_151_4410}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_1710"))
            }
          >
            <View style={styles.View_I151_4410_139_1108}>
              <Text style={styles.Text_I151_4410_139_1108}>
                Recently viewed
              </Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I151_4410_139_1109}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_151_4411}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_1710"))
            }
          >
            <View style={styles.View_I151_4411_139_1108}>
              <Text style={styles.Text_I151_4411_139_1108}>Politics</Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I151_4411_139_1109}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_151_4412}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_1710"))
            }
          >
            <View style={styles.View_I151_4412_139_1108}>
              <Text style={styles.Text_I151_4412_139_1108}>Sports</Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I151_4412_139_1109}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_151_4413}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_1710"))
            }
          >
            <View style={styles.View_I151_4413_139_1108}>
              <Text style={styles.Text_I151_4413_139_1108}>Business</Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I151_4413_139_1109}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_151_4414}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_1710"))
            }
          >
            <View style={styles.View_I151_4414_139_1108}>
              <Text style={styles.Text_I151_4414_139_1108}>Entertainment</Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I151_4414_139_1109}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_151_4084}>
        <View style={styles.View_151_4085}>
          <View style={styles.View_151_4086}>
            <View style={styles.View_151_4087}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2065b5c8-adda-4de3-b4d7-c58f27aba09a"
                }}
                style={styles.ImageBackground_I151_4087_193_7661}
              />
            </View>
            <View style={styles.View_151_4088}>
              <Text style={styles.Text_151_4088}>Home</Text>
            </View>
          </View>
          <View style={styles.View_151_4089}>
            <View style={styles.View_151_4090}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b829c732-3f9a-4cbb-8dff-a86f98d75b9a"
                }}
                style={styles.ImageBackground_I151_4090_89_4323}
              />
            </View>
            <View style={styles.View_151_4091}>
              <Text style={styles.Text_151_4091}>Explore</Text>
            </View>
          </View>
          <View style={styles.View_151_4092}>
            <View style={styles.View_151_4093}>
              <View style={styles.View_I151_4093_89_4303}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b40d3e4-b606-4eb9-beb3-4791be3c0b32"
                  }}
                  style={styles.ImageBackground_I151_4093_89_4304}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/295df73d-eecb-494b-9bfe-a5e97345c183"
                  }}
                  style={styles.ImageBackground_I151_4093_89_4305}
                />
              </View>
            </View>
            <View style={styles.View_151_4094}>
              <Text style={styles.Text_151_4094}>Saved</Text>
            </View>
          </View>
          <View style={styles.View_151_4095}>
            <View style={styles.View_151_4096}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0370bfbe-7c97-46f4-b334-18c6f627a5d8"
                }}
                style={styles.ImageBackground_I151_4096_89_3520}
              />
            </View>
            <View style={styles.View_151_4097}>
              <Text style={styles.Text_151_4097}>Profile</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  View_151_3970: {
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
  View_151_3971: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_3972: {
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
  View_I151_3972_139_1253: {
    flexGrow: 1,
    width: wp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I151_3972_139_1253: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_3972_139_1265: {
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
  View_I151_3972_139_1254: {
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
  Text_I151_3972_139_1254: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_3972_139_1260: {
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
  View_I151_3972_139_1260_3125_33776: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I151_3972_139_1260_3120_35525: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_151_3973: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_3974: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4459: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_151_4460: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  ImageBackground_151_4461: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_151_4462: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_151_4463: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_4463_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_4463_133_1456: {
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
  View_I151_4463_133_1457: {
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
  Text_I151_4463_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4463_133_1458: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4463_133_1458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4464: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%")
  },
  View_151_4465: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_151_4466: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4470: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4470: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4471: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_151_4471: {
    color: "rgba(253, 253, 253, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4472: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4474: {
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
  Text_151_4474: {
    color: "rgba(253, 253, 253, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_3991: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%")
  },
  ImageBackground_151_3992: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  ImageBackground_151_3993: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_151_3994: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_151_3995: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_3995_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_3995_133_1456: {
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
  View_I151_3995_133_1457: {
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
  Text_I151_3995_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_3995_133_1458: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_3995_133_1458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_3996: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%")
  },
  View_151_3997: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_151_3998: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_3999: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4000: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4000: {
    color: "rgba(253, 253, 253, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4002: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_151_4002: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4003: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_151_4003: {
    color: "rgba(253, 253, 253, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4004: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4006: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4006: {
    color: "rgba(253, 253, 253, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4007: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("176%"),
    top: hp("0%")
  },
  ImageBackground_151_4008: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  ImageBackground_151_4009: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_151_4010: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_151_4011: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_151_4012: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_151_4013: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4014: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4015: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4015: {
    color: "rgba(253, 253, 253, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4017: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_151_4017: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4018: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_151_4018: {
    color: "rgba(253, 253, 253, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4019: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4021: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4021: {
    color: "rgba(253, 253, 253, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4022: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_4022_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_4022_133_1456: {
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
  View_I151_4022_133_1457: {
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
  Text_I151_4022_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4022_133_1458: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4022_133_1458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_151_4023: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("33%")
  },
  View_151_4029: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("69%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4030: {
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
  View_I151_4030_139_2076: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I151_4030_139_2076: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4030_139_2077: {
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
  View_I151_4030_139_2078: {
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
  Text_I151_4030_139_2078: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4030_139_2079: {
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
  View_I151_4030_139_2079_3125_33776: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I151_4030_139_2079_3120_35525: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_151_4031: {
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
  View_151_4032: {
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
  View_I151_4032_139_2130: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I151_4032_139_2131: {
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
  View_I151_4032_139_2132: {
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
  View_I151_4032_139_2133: {
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
  Text_I151_4032_139_2133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4032_139_2134: {
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
  View_I151_4032_139_2135: {
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
  Text_I151_4032_139_2135: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4032_139_2136: {
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
  Text_I151_4032_139_2136: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4032_139_2137: {
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
  View_I151_4032_139_2139: {
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
  Text_I151_4032_139_2139: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4033: {
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
  View_I151_4033_139_2130: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I151_4033_139_2131: {
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
  View_I151_4033_139_2132: {
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
  View_I151_4033_139_2133: {
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
  Text_I151_4033_139_2133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4033_139_2134: {
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
  View_I151_4033_139_2135: {
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
  Text_I151_4033_139_2135: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4033_139_2136: {
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
  Text_I151_4033_139_2136: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4033_139_2137: {
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
  View_I151_4033_139_2139: {
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
  Text_I151_4033_139_2139: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4034: {
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
  View_I151_4034_139_2130: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I151_4034_139_2131: {
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
  View_I151_4034_139_2132: {
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
  View_I151_4034_139_2133: {
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
  Text_I151_4034_139_2133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4034_139_2134: {
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
  View_I151_4034_139_2135: {
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
  Text_I151_4034_139_2135: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4034_139_2136: {
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
  Text_I151_4034_139_2136: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4034_139_2137: {
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
  View_I151_4034_139_2139: {
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
  Text_I151_4034_139_2139: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4035: {
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
  View_I151_4035_139_2130: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I151_4035_139_2131: {
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
  View_I151_4035_139_2132: {
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
  View_I151_4035_139_2133: {
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
  Text_I151_4035_139_2133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4035_139_2134: {
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
  View_I151_4035_139_2135: {
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
  Text_I151_4035_139_2135: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4035_139_2136: {
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
  Text_I151_4035_139_2136: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4035_139_2137: {
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
  View_I151_4035_139_2139: {
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
  Text_I151_4035_139_2139: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4036: {
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
  View_151_4037: {
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
  View_I151_4037_151_1649: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I151_4037_151_1649: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4038: {
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
  View_151_4039: {
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
  View_151_4040: {
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
  View_I151_4040_151_1613: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4040_151_1613: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4041: {
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
  View_I151_4041_151_1618: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4041_151_1618: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4042: {
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
  View_I151_4042_151_1618: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4042_151_1618: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4043: {
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
  View_I151_4043_151_1618: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4043_151_1618: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4044: {
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
  View_I151_4044_151_1618: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4044_151_1618: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4045: {
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
  View_I151_4045_151_1618: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4045_151_1618: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4046: {
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
  View_I151_4046_151_1618: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4046_151_1618: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4047: {
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
  View_151_4048: {
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
  View_151_4049: {
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
  ImageBackground_151_4050: {
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
  View_151_4051: {
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
  View_151_4052: {
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
  View_I151_4052_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_4052_133_1456: {
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
  View_I151_4052_133_1457: {
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
  Text_I151_4052_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4052_133_1458: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4052_133_1458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4053: {
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
  View_151_4054: {
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
  Text_151_4054: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4055: {
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
  Text_151_4055: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4056: {
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
  View_151_4058: {
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
  Text_151_4058: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4059: {
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
  View_151_4060: {
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
  ImageBackground_151_4061: {
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
  View_151_4062: {
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
  View_151_4063: {
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
  View_I151_4063_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_4063_133_1456: {
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
  View_I151_4063_133_1457: {
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
  Text_I151_4063_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4063_133_1458: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4063_133_1458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4064: {
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
  View_151_4065: {
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
  Text_151_4065: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4066: {
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
  Text_151_4066: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4067: {
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
  View_151_4069: {
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
  Text_151_4069: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4070: {
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
  View_151_4071: {
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
  ImageBackground_151_4072: {
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
  View_151_4073: {
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
  View_151_4074: {
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
  View_I151_4074_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_4074_133_1456: {
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
  View_I151_4074_133_1457: {
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
  Text_I151_4074_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4074_133_1458: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4074_133_1458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4075: {
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
  View_151_4076: {
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
  Text_151_4076: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4077: {
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
  Text_151_4077: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4078: {
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
  View_151_4080: {
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
  Text_151_4080: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4081: {
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
  View_151_4082: {
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
  View_151_4083: {
    width: wp("27%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "flex-start"
  },
  Text_151_4083: {
    color: "rgba(68, 124, 252, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4328: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_151_4329: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(232, 236, 247, 1)"
  },
  View_151_4330: {
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
  View_151_4331: {
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
  View_151_4335: {
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
  ImageBackground_151_4336: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_4345: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_151_4349: {
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
  ImageBackground_151_4352: {
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
  ImageBackground_151_4357: {
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
  View_151_4358: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_151_4359: {
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
  View_151_4361: {
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
  ImageBackground_151_4362: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_151_4364: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_151_4365: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_151_4366: {
    width: wp("7%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_151_4366: {
    color: "rgba(0, 33, 137, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4367: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("7%")
  },
  ImageBackground_151_4368: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_151_4369: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I151_4369_2_318: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_I151_4369_2_319: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_4369_2_321: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_151_4370: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4371: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(68, 124, 252, 1)"
  },
  View_I151_4371_133_1444: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_4371_133_1445: {
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
  ImageBackground_I151_4371_133_1627: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I151_4371_133_1439: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4371_133_1439: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4372: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_4372_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_4372_133_1456: {
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
  View_I151_4372_133_1457: {
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
  Text_I151_4372_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4372_133_1458: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4372_133_1458: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4373: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_4373_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_4373_133_1456: {
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
  View_I151_4373_133_1457: {
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
  Text_I151_4373_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4373_133_1458: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4373_133_1458: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4374: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_4374_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_4374_133_1456: {
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
  View_I151_4374_133_1457: {
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
  Text_I151_4374_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4374_133_1458: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4374_133_1458: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4375: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("123%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_4375_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_4375_133_1456: {
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
  View_I151_4375_133_1457: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4375_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4375_133_1458: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4375_133_1458: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4376: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("151%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_4376_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_4376_133_1456: {
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
  View_I151_4376_133_1457: {
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
  Text_I151_4376_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4376_133_1458: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4376_133_1458: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4377: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4378: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4378: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4379: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_151_4380: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_4381: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_4382: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_151_4383: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_151_4384: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_4385: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_151_4386: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_151_4387: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_151_4388: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_151_4389: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_4392: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_151_4393: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_151_4394: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_151_4395: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_151_4398: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_151_4399: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_151_4400: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_151_4401: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_151_4402: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_151_4403: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_151_4404: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_151_4405: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_151_4406: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_151_4407: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_151_4408: {
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
  TouchableOpacity_151_4409: {
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
  View_I151_4409_139_1105: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4409_139_1105: {
    color: "rgba(241, 60, 93, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I151_4409_139_1106: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%")
  },
  TouchableOpacity_151_4410: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_4410_139_1108: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4410_139_1108: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4410_139_1109: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%")
  },
  TouchableOpacity_151_4411: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_4411_139_1108: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4411_139_1108: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4411_139_1109: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%")
  },
  TouchableOpacity_151_4412: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_4412_139_1108: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4412_139_1108: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4412_139_1109: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%")
  },
  TouchableOpacity_151_4413: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("111%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_4413_139_1108: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4413_139_1108: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4413_139_1109: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%")
  },
  TouchableOpacity_151_4414: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("134%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_4414_139_1108: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_4414_139_1108: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_4414_139_1109: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%")
  },
  View_151_4084: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("105%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_151_4085: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4086: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4087: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I151_4087_193_7661: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_151_4088: {
    width: wp("9%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4088: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4089: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4090: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I151_4090_89_4323: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_151_4091: {
    width: wp("11%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4091: {
    color: "rgba(152, 158, 171, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4092: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4093: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_4093_89_4303: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_4093_89_4304: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I151_4093_89_4305: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_151_4094: {
    width: wp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4094: {
    color: "rgba(152, 158, 171, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_4095: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4096: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I151_4096_89_3520: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_151_4097: {
    width: wp("9%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4097: {
    color: "rgba(152, 158, 171, 1)",
    fontSize: 10,
    fontWeight: "500",
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
