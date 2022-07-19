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
      <View style={styles.View_151_1779} />
      <View style={styles.View_151_1780}>
        <View style={styles.View_151_1781}>
          <View style={styles.View_I151_1781_139_1253}>
            <Text style={styles.Text_I151_1781_139_1253}>
              Today’s Headlines
            </Text>
          </View>
          <View style={styles.View_I151_1781_139_1265}>
            <View style={styles.View_I151_1781_139_1254}>
              <Text style={styles.Text_I151_1781_139_1254}>View all</Text>
            </View>
            <View style={styles.View_I151_1781_139_1260}>
              <View style={styles.View_I151_1781_139_1260_3125_33776}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae278108-99e0-484e-90a2-4f3fb484d2fd"
                  }}
                  style={styles.ImageBackground_I151_1781_139_1260_3120_35525}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_151_1782}>
          <View style={styles.View_151_1783}>
            <View style={styles.View_151_1784}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15878b1a-9936-4414-8970-de0d8de57858"
                }}
                style={styles.ImageBackground_151_1785}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b556b41-b701-4559-8706-ed3a9fc119e4"
                }}
                style={styles.ImageBackground_151_1786}
              />
              <View style={styles.View_151_1787} />
              <View style={styles.View_151_1788}>
                <View style={styles.View_I151_1788_133_1455}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/874c4b9a-17e2-4ed8-ba60-0b36161e826d"
                    }}
                    style={styles.ImageBackground_I151_1788_133_1456}
                  />
                  <View style={styles.View_I151_1788_133_1457}>
                    <Text style={styles.Text_I151_1788_133_1457}>DG</Text>
                  </View>
                </View>
                <View style={styles.View_I151_1788_133_1458}>
                  <Text style={styles.Text_I151_1788_133_1458}>
                    Daily Graphic
                  </Text>
                </View>
              </View>
              <View style={styles.View_151_1789}>
                <View style={styles.View_151_1790} />
                <View style={styles.View_151_1791}>
                  <View style={styles.View_151_1792}>
                    <View style={styles.View_151_1793}>
                      <Text style={styles.Text_151_1793}>-Akuffo Addo</Text>
                    </View>
                  </View>
                  <View style={styles.View_151_1795}>
                    <Text style={styles.Text_151_1795}>
                      We’re seing the benefits of ICUMS
                    </Text>
                  </View>
                  <View style={styles.View_151_1796}>
                    <Text style={styles.Text_151_1796}>
                      Urna tincidunt lorem suscipit quis tristique sodales
                      ultricies convallis. Tincidunt donec vel egestas integer
                      amet. Nam sit dui pretium id at.
                    </Text>
                  </View>
                  <View style={styles.View_151_1797}>
                    <View style={styles.View_151_1799}>
                      <Text style={styles.Text_151_1799}>29 Apr 2022</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_151_1800}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb492f5e-e3cb-43d2-8cc0-f014d85f702c"
                }}
                style={styles.ImageBackground_151_1801}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b407874-5edb-4f65-92d4-f01586887436"
                }}
                style={styles.ImageBackground_151_1802}
              />
              <View style={styles.View_151_1803} />
              <View style={styles.View_151_1804}>
                <View style={styles.View_I151_1804_133_1455}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06d2e18f-3bac-4e37-ba8b-de6763785aa1"
                    }}
                    style={styles.ImageBackground_I151_1804_133_1456}
                  />
                  <View style={styles.View_I151_1804_133_1457}>
                    <Text style={styles.Text_I151_1804_133_1457}>GT</Text>
                  </View>
                </View>
                <View style={styles.View_I151_1804_133_1458}>
                  <Text style={styles.Text_I151_1804_133_1458}>
                    Ghanaian Times
                  </Text>
                </View>
              </View>
              <View style={styles.View_151_1805}>
                <View style={styles.View_151_1806} />
                <View style={styles.View_151_1807}>
                  <View style={styles.View_151_1808}>
                    <View style={styles.View_151_1809}>
                      <Text style={styles.Text_151_1809}>-Akuffo Addo</Text>
                    </View>
                  </View>
                  <View style={styles.View_151_1811}>
                    <Text style={styles.Text_151_1811}>
                      Nana Signs E-levy Into law
                    </Text>
                  </View>
                  <View style={styles.View_151_1812}>
                    <Text style={styles.Text_151_1812}>
                      Ornare eleifend ultricies in viverra ornare nullam non.
                      Aenean ornare urna nec ullamcorper tempus.{" "}
                    </Text>
                  </View>
                  <View style={styles.View_151_1813}>
                    <View style={styles.View_151_1815}>
                      <Text style={styles.Text_151_1815}>29 Apr 2022</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_151_1816}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/88699b5f-525e-46c4-9e34-9b54cd92193a"
                }}
                style={styles.ImageBackground_151_1817}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81e90360-f96e-40d0-9b21-0c80ffb5f4ac"
                }}
                style={styles.ImageBackground_151_1818}
              />
              <View style={styles.View_151_1819}>
                <View style={styles.View_151_1820} />
                <View style={styles.View_151_1821} />
                <View style={styles.View_151_1822}>
                  <View style={styles.View_151_1823}>
                    <View style={styles.View_151_1824}>
                      <Text style={styles.Text_151_1824}>-Akuffo Addo</Text>
                    </View>
                  </View>
                  <View style={styles.View_151_1826}>
                    <Text style={styles.Text_151_1826}>
                      Akuffo Addo Praises Dampare{" "}
                    </Text>
                  </View>
                  <View style={styles.View_151_1827}>
                    <Text style={styles.Text_151_1827}>
                      Ornare eleifend ultricies in viverra ornare nullam non.
                      Aenean ornare urna nec ullamcorper tempus.{" "}
                    </Text>
                  </View>
                  <View style={styles.View_151_1828}>
                    <View style={styles.View_151_1830}>
                      <Text style={styles.Text_151_1830}>29 Apr 2022</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_151_1831}>
                <View style={styles.View_I151_1831_133_1455}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea74ef01-9aeb-4da9-9206-9db7d23490b9"
                    }}
                    style={styles.ImageBackground_I151_1831_133_1456}
                  />
                  <View style={styles.View_I151_1831_133_1457}>
                    <Text style={styles.Text_I151_1831_133_1457}>TC</Text>
                  </View>
                </View>
                <View style={styles.View_I151_1831_133_1458}>
                  <Text style={styles.Text_I151_1831_133_1458}>
                    The Custodian
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/341f8f29-2acf-4eeb-ac6c-672d397bdcf8"
            }}
            style={styles.ImageBackground_151_1832}
          />
        </View>
      </View>
      <View style={styles.View_151_1838}>
        <View style={styles.View_151_1839}>
          <View style={styles.View_I151_1839_139_2076}>
            <Text style={styles.Text_I151_1839_139_2076}>General news</Text>
          </View>
          <View style={styles.View_I151_1839_139_2077}>
            <View style={styles.View_I151_1839_139_2078}>
              <Text style={styles.Text_I151_1839_139_2078}>View all</Text>
            </View>
            <View style={styles.View_I151_1839_139_2079}>
              <View style={styles.View_I151_1839_139_2079_3125_33776}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ccdfa260-a036-4fda-8908-59a426bb0ce7"
                  }}
                  style={styles.ImageBackground_I151_1839_139_2079_3120_35525}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_151_1840}>
          <View style={styles.View_151_1841}>
            <View style={styles.View_I151_1841_139_2130}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d45c7b5b-6327-4589-8610-3e8b9e7697a7"
                }}
                style={styles.ImageBackground_I151_1841_139_2131}
              />
              <View style={styles.View_I151_1841_139_2132}>
                <View style={styles.View_I151_1841_139_2133}>
                  <Text style={styles.Text_I151_1841_139_2133}>BUSINESS</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I151_1841_139_2134}>
              <View style={styles.View_I151_1841_139_2135}>
                <Text style={styles.Text_I151_1841_139_2135}>
                  FDA accuses Marwako for unilaterally destroying food items
                  being investigated
                </Text>
              </View>
              <View style={styles.View_I151_1841_139_2136}>
                <Text style={styles.Text_I151_1841_139_2136}>
                  Pellentesque a, ullamcorper suscipit enim, neque urna et
                  integer. Semper maecenas auctor cursus aenean viverra turpis.
                  Rhoncus, eleifend suspendisse tellus, euismod. Felis urna,
                  cursus gravida cursus vestibulum diam fermentum fringilla id.
                  Eu nisl nunc, amet tellus accumsan, pulvinar semper.
                </Text>
              </View>
              <View style={styles.View_I151_1841_139_2137}>
                <View style={styles.View_I151_1841_139_2139}>
                  <Text style={styles.Text_I151_1841_139_2139}>
                    29 Apr 2022
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_151_1842}>
            <View style={styles.View_I151_1842_139_2130}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ffba00a-7543-4026-a253-93ab953ee187"
                }}
                style={styles.ImageBackground_I151_1842_139_2131}
              />
              <View style={styles.View_I151_1842_139_2132}>
                <View style={styles.View_I151_1842_139_2133}>
                  <Text style={styles.Text_I151_1842_139_2133}>POLITICS</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I151_1842_139_2134}>
              <View style={styles.View_I151_1842_139_2135}>
                <Text style={styles.Text_I151_1842_139_2135}>
                  Money shouldn’t be the deciding factor in NDC
                </Text>
              </View>
              <View style={styles.View_I151_1842_139_2136}>
                <Text style={styles.Text_I151_1842_139_2136}>
                  Sed arcu id mi ac diam mauris consectetur. Ullamcorper.
                </Text>
              </View>
              <View style={styles.View_I151_1842_139_2137}>
                <View style={styles.View_I151_1842_139_2139}>
                  <Text style={styles.Text_I151_1842_139_2139}>
                    29 Apr 2022
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_151_1843}>
            <View style={styles.View_I151_1843_139_2130}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c414560e-2025-43a8-92f0-de45fba6ea30"
                }}
                style={styles.ImageBackground_I151_1843_139_2131}
              />
              <View style={styles.View_I151_1843_139_2132}>
                <View style={styles.View_I151_1843_139_2133}>
                  <Text style={styles.Text_I151_1843_139_2133}>BUSINESS</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I151_1843_139_2134}>
              <View style={styles.View_I151_1843_139_2135}>
                <Text style={styles.Text_I151_1843_139_2135}>
                  Marwako says FDA slapped them with a hefty GHS 750,00
                </Text>
              </View>
              <View style={styles.View_I151_1843_139_2136}>
                <Text style={styles.Text_I151_1843_139_2136}>
                  Egestas sem pharetra lacus, porta. Habitant enim tincidunt.
                </Text>
              </View>
              <View style={styles.View_I151_1843_139_2137}>
                <View style={styles.View_I151_1843_139_2139}>
                  <Text style={styles.Text_I151_1843_139_2139}>
                    29 Apr 2022
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_151_1844}>
            <View style={styles.View_I151_1844_139_2130}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7dfdaaa-ec66-4bb0-acaa-43358124d1fd"
                }}
                style={styles.ImageBackground_I151_1844_139_2131}
              />
              <View style={styles.View_I151_1844_139_2132}>
                <View style={styles.View_I151_1844_139_2133}>
                  <Text style={styles.Text_I151_1844_139_2133}>SPORTS</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I151_1844_139_2134}>
              <View style={styles.View_I151_1844_139_2135}>
                <Text style={styles.Text_I151_1844_139_2135}>
                  Asante Kotoko crowned GPL winners 2022/2023
                </Text>
              </View>
              <View style={styles.View_I151_1844_139_2136}>
                <Text style={styles.Text_I151_1844_139_2136}>
                  Semper viverra senectus a tellus sed. Tempor ipsum amet.
                </Text>
              </View>
              <View style={styles.View_I151_1844_139_2137}>
                <View style={styles.View_I151_1844_139_2139}>
                  <Text style={styles.Text_I151_1844_139_2139}>
                    29 Apr 2022
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_151_1845}>
        <View style={styles.View_151_1846}>
          <View style={styles.View_I151_1846_151_1649}>
            <Text style={styles.Text_I151_1846_151_1649}>Hot topics</Text>
          </View>
        </View>
        <View style={styles.View_151_1847}>
          <View style={styles.View_151_1848}>
            <View style={styles.View_151_1849}>
              <View style={styles.View_I151_1849_151_1613}>
                <Text style={styles.Text_I151_1849_151_1613}>General</Text>
              </View>
            </View>
            <View style={styles.View_151_1850}>
              <View style={styles.View_I151_1850_151_1618}>
                <Text style={styles.Text_I151_1850_151_1618}>E-levy</Text>
              </View>
            </View>
            <View style={styles.View_151_1851}>
              <View style={styles.View_I151_1851_151_1618}>
                <Text style={styles.Text_I151_1851_151_1618}>Monkeypox</Text>
              </View>
            </View>
            <View style={styles.View_151_1852}>
              <View style={styles.View_I151_1852_151_1618}>
                <Text style={styles.Text_I151_1852_151_1618}>Terrorism</Text>
              </View>
            </View>
            <View style={styles.View_151_1853}>
              <View style={styles.View_I151_1853_151_1618}>
                <Text style={styles.Text_I151_1853_151_1618}>Roads</Text>
              </View>
            </View>
            <View style={styles.View_151_1854}>
              <View style={styles.View_I151_1854_151_1618}>
                <Text style={styles.Text_I151_1854_151_1618}>Covid-19</Text>
              </View>
            </View>
            <View style={styles.View_151_1855}>
              <View style={styles.View_I151_1855_151_1618}>
                <Text style={styles.Text_I151_1855_151_1618}>Parliament</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_151_1856}>
            <View style={styles.View_151_1857}>
              <View style={styles.View_151_1858}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2cf76db5-6580-4b12-9e5e-9156d1e55b63"
                  }}
                  style={styles.ImageBackground_151_1859}
                />
                <View style={styles.View_151_1860} />
                <View style={styles.View_151_1861}>
                  <View style={styles.View_I151_1861_133_1455}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca6200c2-9672-4eb5-b316-15bcaf6ba147"
                      }}
                      style={styles.ImageBackground_I151_1861_133_1456}
                    />
                    <View style={styles.View_I151_1861_133_1457}>
                      <Text style={styles.Text_I151_1861_133_1457}>RP</Text>
                    </View>
                  </View>
                  <View style={styles.View_I151_1861_133_1458}>
                    <Text style={styles.Text_I151_1861_133_1458}>
                      Republic Press
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_151_1862}>
                <View style={styles.View_151_1863}>
                  <Text style={styles.Text_151_1863}>
                    Bagbin blames Supreme Court For Purported confusionover
                    Quorum
                  </Text>
                </View>
                <View style={styles.View_151_1864}>
                  <Text style={styles.Text_151_1864}>
                    Pellentesque a, ullamcorper suscipit enim, neque urna et
                    integer. Semper maecenas auctor cursus aenean viverra
                    turpis. Rhoncus, eleifend suspendisse tellus, euismod. Felis
                    urna, cursus gravida cursus vestibulum diam fermentum
                    fringilla id. Eu nisl nunc, amet tellus accumsan, pulvinar
                    semper.
                  </Text>
                </View>
                <View style={styles.View_151_1865}>
                  <View style={styles.View_151_1867}>
                    <Text style={styles.Text_151_1867}>29 Apr 2022</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_151_1868}>
              <View style={styles.View_151_1869}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a7f8750-3e81-4ca3-bc59-93f40fd1c19a"
                  }}
                  style={styles.ImageBackground_151_1870}
                />
                <View style={styles.View_151_1871} />
                <View style={styles.View_151_1872}>
                  <View style={styles.View_I151_1872_133_1455}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f0144a0-4954-48d6-a1e0-054a4db9af11"
                      }}
                      style={styles.ImageBackground_I151_1872_133_1456}
                    />
                    <View style={styles.View_I151_1872_133_1457}>
                      <Text style={styles.Text_I151_1872_133_1457}>TF</Text>
                    </View>
                  </View>
                  <View style={styles.View_I151_1872_133_1458}>
                    <Text style={styles.Text_I151_1872_133_1458}>
                      The Finder
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_151_1873}>
                <View style={styles.View_151_1874}>
                  <Text style={styles.Text_151_1874}>
                    The Best Venture to Invest In Now is Agribusiness
                  </Text>
                </View>
                <View style={styles.View_151_1875}>
                  <Text style={styles.Text_151_1875}>
                    Pellentesque a, ullamcorper suscipit enim, neque urna et
                    integer. Semper maecenas auctor cursus aenean viverra
                    turpis. Rhoncus, eleifend suspendisse tellus, euismod. Felis
                    urna, cursus gravida cursus vestibulum diam fermentum
                    fringilla id. Eu nisl nunc, amet tellus accumsan, pulvinar
                    semper.
                  </Text>
                </View>
                <View style={styles.View_151_1876}>
                  <View style={styles.View_151_1878}>
                    <Text style={styles.Text_151_1878}>29 Apr 2022</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_151_1879}>
              <View style={styles.View_151_1880}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fdd7764-cdce-46be-b979-36499887298b"
                  }}
                  style={styles.ImageBackground_151_1881}
                />
                <View style={styles.View_151_1882} />
                <View style={styles.View_151_1883}>
                  <View style={styles.View_I151_1883_133_1455}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91b33724-77c0-4b4b-ac28-d900e3000fd3"
                      }}
                      style={styles.ImageBackground_I151_1883_133_1456}
                    />
                    <View style={styles.View_I151_1883_133_1457}>
                      <Text style={styles.Text_I151_1883_133_1457}>DA</Text>
                    </View>
                  </View>
                  <View style={styles.View_I151_1883_133_1458}>
                    <Text style={styles.Text_I151_1883_133_1458}>
                      Daily Analyst
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_151_1884}>
                <View style={styles.View_151_1885}>
                  <Text style={styles.Text_151_1885}>
                    Prez. Comission Nissan Assembly Plant
                  </Text>
                </View>
                <View style={styles.View_151_1886}>
                  <Text style={styles.Text_151_1886}>
                    Pellentesque a, ullamcorper suscipit enim, neque urna et
                    integer. Semper maecenas auctor cursus aenean viverra
                    turpis. Rhoncus, eleifend suspendisse tellus, euismod. Felis
                    urna, cursus gravida cursus vestibulum diam fermentum
                    fringilla id. Eu nisl nunc, amet tellus accumsan, pulvinar
                    semper.
                  </Text>
                </View>
                <View style={styles.View_151_1887}>
                  <View style={styles.View_151_1889}>
                    <Text style={styles.Text_151_1889}>29 Apr 2022</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_151_1890}>
              <View style={styles.View_151_1891} />
              <View style={styles.View_151_1892}>
                <Text style={styles.Text_151_1892}>See all stories</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_151_1907}>
        <View style={styles.View_151_1908} />
        <View style={styles.View_151_1909}>
          <View style={styles.View_151_1910} />
          <View style={styles.View_151_1914}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1dd3923-4252-429a-a69a-f1056ba286a5"
              }}
              style={styles.ImageBackground_151_1915}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efcfacb7-9043-46d6-a152-0605d97f470b"
              }}
              style={styles.ImageBackground_151_1924}
            />
            <View style={styles.View_151_1928}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5dd351aa-d215-4ef7-93bf-cff7f33a1d79"
                }}
                style={styles.ImageBackground_151_1931}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e70c6ed-c129-47af-a1b1-a2ab1ff98592"
                }}
                style={styles.ImageBackground_151_1936}
              />
              <View style={styles.View_151_1937} />
            </View>
          </View>
          <View style={styles.View_151_1938} />
          <View style={styles.View_151_1940}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf728671-a01e-4383-84b8-6777daa5bdf4"
              }}
              style={styles.ImageBackground_151_1941}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_151_1943}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("139_2783"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8421c5d6-4284-42aa-9811-7572457e6a2d"
            }}
            style={styles.ImageBackground_151_1944}
          />
          <View style={styles.View_151_1945}>
            <Text style={styles.Text_151_1945}>GH</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_151_1946}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11504c93-5897-4544-92c1-e175461bf27e"
            }}
            style={styles.ImageBackground_151_1947}
          />
          <View style={styles.View_151_1948}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4530f39d-a548-4753-87f5-5945076436a5"
              }}
              style={styles.ImageBackground_I151_1948_2_318}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/842aec5c-d8c4-4b3d-8d48-cafae5efdabd"
              }}
              style={styles.ImageBackground_I151_1948_2_319}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc258756-2c70-4030-a5a9-25a786eb7339"
              }}
              style={styles.ImageBackground_I151_1948_2_321}
            />
          </View>
        </View>
        <View style={styles.View_151_1949}>
          <TouchableOpacity
            style={styles.TouchableOpacity_151_1950}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("144_1532"))
            }
          >
            <View style={styles.View_I151_1950_133_1444}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0b325b5-04fa-4b6d-8f91-9ee88f4da550"
                }}
                style={styles.ImageBackground_I151_1950_133_1445}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/683dda77-8c35-4b43-b4a6-201c11ae5604"
                }}
                style={styles.ImageBackground_I151_1950_133_1627}
              />
            </View>
            <View style={styles.View_I151_1950_133_1439}>
              <Text style={styles.Text_I151_1950_133_1439}>All</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_151_1951}>
            <View style={styles.View_I151_1951_133_1455}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a30dff1-8bae-49d0-89c2-e315c5719584"
                }}
                style={styles.ImageBackground_I151_1951_133_1456}
              />
              <View style={styles.View_I151_1951_133_1457}>
                <Text style={styles.Text_I151_1951_133_1457}>DG</Text>
              </View>
            </View>
            <View style={styles.View_I151_1951_133_1458}>
              <Text style={styles.Text_I151_1951_133_1458}>Daily Graphic</Text>
            </View>
          </View>
          <View style={styles.View_151_1952}>
            <View style={styles.View_I151_1952_133_1455}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b74fa16d-9a48-46eb-a282-7951106b355d"
                }}
                style={styles.ImageBackground_I151_1952_133_1456}
              />
              <View style={styles.View_I151_1952_133_1457}>
                <Text style={styles.Text_I151_1952_133_1457}>P</Text>
              </View>
            </View>
            <View style={styles.View_I151_1952_133_1458}>
              <Text style={styles.Text_I151_1952_133_1458}>Publisher</Text>
            </View>
          </View>
          <View style={styles.View_151_1953}>
            <View style={styles.View_I151_1953_133_1455}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79b86889-0aa2-4757-89b7-98db66851fb9"
                }}
                style={styles.ImageBackground_I151_1953_133_1456}
              />
              <View style={styles.View_I151_1953_133_1457}>
                <Text style={styles.Text_I151_1953_133_1457}>P</Text>
              </View>
            </View>
            <View style={styles.View_I151_1953_133_1458}>
              <Text style={styles.Text_I151_1953_133_1458}>Ghanaian Times</Text>
            </View>
          </View>
          <View style={styles.View_151_1954}>
            <View style={styles.View_I151_1954_133_1455}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55bf0be0-38be-4400-b657-e436fc2df82b"
                }}
                style={styles.ImageBackground_I151_1954_133_1456}
              />
              <View style={styles.View_I151_1954_133_1457}>
                <Text style={styles.Text_I151_1954_133_1457}>P</Text>
              </View>
            </View>
            <View style={styles.View_I151_1954_133_1458}>
              <Text style={styles.Text_I151_1954_133_1458}>The Custodian</Text>
            </View>
          </View>
          <View style={styles.View_151_1955}>
            <View style={styles.View_I151_1955_133_1455}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4b51b20-39e5-4541-9cd7-83ac522ab24a"
                }}
                style={styles.ImageBackground_I151_1955_133_1456}
              />
              <View style={styles.View_I151_1955_133_1457}>
                <Text style={styles.Text_I151_1955_133_1457}>P</Text>
              </View>
            </View>
            <View style={styles.View_I151_1955_133_1458}>
              <Text style={styles.Text_I151_1955_133_1458}>Daily Dispatch</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_151_1956}>
          <View style={styles.View_151_1957}>
            <Text style={styles.Text_151_1957}>Welcome</Text>
          </View>
          <View style={styles.View_151_1958}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e05df809-c6cd-4ef1-b5cb-3009bb702270"
              }}
              style={styles.ImageBackground_151_1959}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22df52ca-431d-49f1-8519-2f2ba5bc56c9"
              }}
              style={styles.ImageBackground_151_1960}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b0a1087-7f02-46f8-9cb9-ff5e9e897732"
              }}
              style={styles.ImageBackground_151_1961}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e0973e8-0c58-43f2-b123-5e6e918b4241"
              }}
              style={styles.ImageBackground_151_1962}
            />
            <View style={styles.View_151_1963}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4bb317a-8a4c-4997-90be-6360d38bbfcf"
                }}
                style={styles.ImageBackground_151_1964}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/797c473f-832e-46a3-b495-4c09f9c717f6"
                }}
                style={styles.ImageBackground_151_1965}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e65d8255-aff1-4dea-b856-437e3e63dcde"
                }}
                style={styles.ImageBackground_151_1966}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b14f2635-8567-464f-830a-d8fe7dbb47fd"
                }}
                style={styles.ImageBackground_151_1967}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/101a81a8-836c-493d-8b0b-2ae6222042b4"
                }}
                style={styles.ImageBackground_151_1968}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ced3869-71a1-4e54-9389-b8bb74866cbc"
                }}
                style={styles.ImageBackground_151_1971}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc7c976e-05eb-48a4-8d86-c9015e6bcf34"
                }}
                style={styles.ImageBackground_151_1972}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b2d0abe-b4f4-40b0-a0b0-3345532e682b"
                }}
                style={styles.ImageBackground_151_1973}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7e6f11f-d3af-45d4-8ebe-a353d058f177"
                }}
                style={styles.ImageBackground_151_1974}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38f45d0a-a575-42f7-b1b3-01a286843035"
                }}
                style={styles.ImageBackground_151_1977}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5ec4514-a886-43fd-bbac-52a59afe3443"
                }}
                style={styles.ImageBackground_151_1978}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94bee998-c187-4f26-b6f3-34c0811e3d83"
                }}
                style={styles.ImageBackground_151_1979}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9679011-edd3-449e-9dc7-ee68720c19ef"
                }}
                style={styles.ImageBackground_151_1980}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4971fc26-afd8-434c-aa94-b0782084fbd6"
                }}
                style={styles.ImageBackground_151_1981}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e802b02e-7a18-4d05-9cd2-1ba975bdf0b2"
                }}
                style={styles.ImageBackground_151_1982}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e49054db-955d-4c60-bbed-c1953f8a7681"
                }}
                style={styles.ImageBackground_151_1983}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0242241-cc5b-4796-b346-62f2a597032e"
                }}
                style={styles.ImageBackground_151_1984}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b1184d9-45bb-4265-ad75-2a6e38f55c33"
                }}
                style={styles.ImageBackground_151_1985}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48c41997-eb90-47aa-9ffa-178b5fa60489"
                }}
                style={styles.ImageBackground_151_1986}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_151_1987}>
          <TouchableOpacity
            style={styles.TouchableOpacity_151_1988}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_1712"))
            }
          >
            <View style={styles.View_I151_1988_139_1105}>
              <Text style={styles.Text_I151_1988_139_1105}>Trending today</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cedc02f4-0015-4a49-9c21-e41961a25c7e"
              }}
              style={styles.ImageBackground_I151_1988_139_1106}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_151_1989}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_1710"))
            }
          >
            <View style={styles.View_I151_1989_139_1108}>
              <Text style={styles.Text_I151_1989_139_1108}>
                Recently viewed
              </Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I151_1989_139_1109}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_151_1990}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_1710"))
            }
          >
            <View style={styles.View_I151_1990_139_1108}>
              <Text style={styles.Text_I151_1990_139_1108}>Politics</Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I151_1990_139_1109}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_151_1991}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_1710"))
            }
          >
            <View style={styles.View_I151_1991_139_1108}>
              <Text style={styles.Text_I151_1991_139_1108}>Sports</Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I151_1991_139_1109}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_151_1992}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_1710"))
            }
          >
            <View style={styles.View_I151_1992_139_1108}>
              <Text style={styles.Text_I151_1992_139_1108}>Business</Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I151_1992_139_1109}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_151_1993}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_1710"))
            }
          >
            <View style={styles.View_I151_1993_139_1108}>
              <Text style={styles.Text_I151_1993_139_1108}>Entertainment</Text>
            </View>
            <View
              source={{ uri: "null" }}
              style={styles.View_I151_1993_139_1109}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  View_151_1779: {
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
  View_151_1780: {
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
  View_151_1781: {
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
  View_I151_1781_139_1253: {
    flexGrow: 1,
    width: wp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I151_1781_139_1253: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1781_139_1265: {
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
  View_I151_1781_139_1254: {
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
  Text_I151_1781_139_1254: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1781_139_1260: {
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
  View_I151_1781_139_1260_3125_33776: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I151_1781_139_1260_3120_35525: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_151_1782: {
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
  View_151_1783: {
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
  View_151_1784: {
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
  ImageBackground_151_1785: {
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
  ImageBackground_151_1786: {
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
  View_151_1787: {
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
  View_151_1788: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_1788_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_1788_133_1456: {
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
  View_I151_1788_133_1457: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1788_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1788_133_1458: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1788_133_1458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1789: {
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
  View_151_1790: {
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
  View_151_1791: {
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
  View_151_1792: {
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
  View_151_1793: {
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
  Text_151_1793: {
    color: "rgba(253, 253, 253, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1795: {
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
  Text_151_1795: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1796: {
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
  Text_151_1796: {
    color: "rgba(253, 253, 253, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1797: {
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
  View_151_1799: {
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
  Text_151_1799: {
    color: "rgba(253, 253, 253, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1800: {
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
  ImageBackground_151_1801: {
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
  ImageBackground_151_1802: {
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
  View_151_1803: {
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
  View_151_1804: {
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
  View_I151_1804_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_1804_133_1456: {
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
  View_I151_1804_133_1457: {
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
  Text_I151_1804_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1804_133_1458: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1804_133_1458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1805: {
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
  View_151_1806: {
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
  View_151_1807: {
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
  View_151_1808: {
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
  View_151_1809: {
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
  Text_151_1809: {
    color: "rgba(253, 253, 253, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1811: {
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
  Text_151_1811: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1812: {
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
  Text_151_1812: {
    color: "rgba(253, 253, 253, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1813: {
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
  View_151_1815: {
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
  Text_151_1815: {
    color: "rgba(253, 253, 253, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1816: {
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
  ImageBackground_151_1817: {
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
  ImageBackground_151_1818: {
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
  View_151_1819: {
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
  View_151_1820: {
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
  View_151_1821: {
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
  View_151_1822: {
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
  View_151_1823: {
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
  View_151_1824: {
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
  Text_151_1824: {
    color: "rgba(253, 253, 253, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1826: {
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
  Text_151_1826: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1827: {
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
  Text_151_1827: {
    color: "rgba(253, 253, 253, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1828: {
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
  View_151_1830: {
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
  Text_151_1830: {
    color: "rgba(253, 253, 253, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1831: {
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
  View_I151_1831_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_1831_133_1456: {
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
  View_I151_1831_133_1457: {
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
  Text_I151_1831_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1831_133_1458: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1831_133_1458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_151_1832: {
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
  View_151_1838: {
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
  View_151_1839: {
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
  View_I151_1839_139_2076: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I151_1839_139_2076: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1839_139_2077: {
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
  View_I151_1839_139_2078: {
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
  Text_I151_1839_139_2078: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1839_139_2079: {
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
  View_I151_1839_139_2079_3125_33776: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I151_1839_139_2079_3120_35525: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_151_1840: {
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
  View_151_1841: {
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
  View_I151_1841_139_2130: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I151_1841_139_2131: {
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
  View_I151_1841_139_2132: {
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
  View_I151_1841_139_2133: {
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
  Text_I151_1841_139_2133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1841_139_2134: {
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
  View_I151_1841_139_2135: {
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
  Text_I151_1841_139_2135: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1841_139_2136: {
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
  Text_I151_1841_139_2136: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1841_139_2137: {
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
  View_I151_1841_139_2139: {
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
  Text_I151_1841_139_2139: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1842: {
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
  View_I151_1842_139_2130: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I151_1842_139_2131: {
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
  View_I151_1842_139_2132: {
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
  View_I151_1842_139_2133: {
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
  Text_I151_1842_139_2133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1842_139_2134: {
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
  View_I151_1842_139_2135: {
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
  Text_I151_1842_139_2135: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1842_139_2136: {
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
  Text_I151_1842_139_2136: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1842_139_2137: {
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
  View_I151_1842_139_2139: {
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
  Text_I151_1842_139_2139: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1843: {
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
  View_I151_1843_139_2130: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I151_1843_139_2131: {
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
  View_I151_1843_139_2132: {
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
  View_I151_1843_139_2133: {
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
  Text_I151_1843_139_2133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1843_139_2134: {
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
  View_I151_1843_139_2135: {
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
  Text_I151_1843_139_2135: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1843_139_2136: {
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
  Text_I151_1843_139_2136: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1843_139_2137: {
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
  View_I151_1843_139_2139: {
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
  Text_I151_1843_139_2139: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1844: {
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
  View_I151_1844_139_2130: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I151_1844_139_2131: {
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
  View_I151_1844_139_2132: {
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
  View_I151_1844_139_2133: {
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
  Text_I151_1844_139_2133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1844_139_2134: {
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
  View_I151_1844_139_2135: {
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
  Text_I151_1844_139_2135: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1844_139_2136: {
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
  Text_I151_1844_139_2136: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1844_139_2137: {
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
  View_I151_1844_139_2139: {
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
  Text_I151_1844_139_2139: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1845: {
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
  View_151_1846: {
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
  View_I151_1846_151_1649: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I151_1846_151_1649: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1847: {
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
  View_151_1848: {
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
  View_151_1849: {
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
  View_I151_1849_151_1613: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1849_151_1613: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1850: {
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
  View_I151_1850_151_1618: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1850_151_1618: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1851: {
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
  View_I151_1851_151_1618: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1851_151_1618: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1852: {
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
  View_I151_1852_151_1618: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1852_151_1618: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1853: {
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
  View_I151_1853_151_1618: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1853_151_1618: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1854: {
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
  View_I151_1854_151_1618: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1854_151_1618: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1855: {
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
  View_I151_1855_151_1618: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1855_151_1618: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1856: {
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
  View_151_1857: {
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
  View_151_1858: {
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
  ImageBackground_151_1859: {
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
  View_151_1860: {
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
  View_151_1861: {
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
  View_I151_1861_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_1861_133_1456: {
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
  View_I151_1861_133_1457: {
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
  Text_I151_1861_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1861_133_1458: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1861_133_1458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1862: {
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
  View_151_1863: {
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
  Text_151_1863: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1864: {
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
  Text_151_1864: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1865: {
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
  View_151_1867: {
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
  Text_151_1867: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1868: {
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
  View_151_1869: {
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
  ImageBackground_151_1870: {
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
  View_151_1871: {
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
  View_151_1872: {
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
  View_I151_1872_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_1872_133_1456: {
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
  View_I151_1872_133_1457: {
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
  Text_I151_1872_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1872_133_1458: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1872_133_1458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1873: {
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
  View_151_1874: {
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
  Text_151_1874: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1875: {
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
  Text_151_1875: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1876: {
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
  View_151_1878: {
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
  Text_151_1878: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1879: {
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
  View_151_1880: {
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
  ImageBackground_151_1881: {
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
  View_151_1882: {
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
  View_151_1883: {
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
  View_I151_1883_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_1883_133_1456: {
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
  View_I151_1883_133_1457: {
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
  Text_I151_1883_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1883_133_1458: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1883_133_1458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1884: {
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
  View_151_1885: {
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
  Text_151_1885: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1886: {
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
  Text_151_1886: {
    color: "rgba(68, 70, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1887: {
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
  View_151_1889: {
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
  Text_151_1889: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1890: {
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
  View_151_1891: {
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
  View_151_1892: {
    width: wp("27%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "flex-start"
  },
  Text_151_1892: {
    color: "rgba(68, 124, 252, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1907: {
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
  View_151_1908: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(232, 236, 247, 1)"
  },
  View_151_1909: {
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
  View_151_1910: {
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
  View_151_1914: {
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
  ImageBackground_151_1915: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_1924: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_151_1928: {
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
  ImageBackground_151_1931: {
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
  ImageBackground_151_1936: {
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
  View_151_1937: {
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
  View_151_1938: {
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
  View_151_1940: {
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
  ImageBackground_151_1941: {
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  TouchableOpacity_151_1943: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_151_1944: {
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
  View_151_1945: {
    width: wp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_151_1945: {
    color: "rgba(0, 33, 137, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1946: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("7%")
  },
  ImageBackground_151_1947: {
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
  View_151_1948: {
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
  ImageBackground_I151_1948_2_318: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_I151_1948_2_319: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_1948_2_321: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_151_1949: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_151_1950: {
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
  View_I151_1950_133_1444: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_1950_133_1445: {
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
  ImageBackground_I151_1950_133_1627: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I151_1950_133_1439: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1950_133_1439: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1951: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_1951_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_1951_133_1456: {
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
  View_I151_1951_133_1457: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1951_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1951_133_1458: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1951_133_1458: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1952: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_1952_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_1952_133_1456: {
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
  View_I151_1952_133_1457: {
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
  Text_I151_1952_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1952_133_1458: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1952_133_1458: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1953: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_1953_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_1953_133_1456: {
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
  View_I151_1953_133_1457: {
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
  Text_I151_1953_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1953_133_1458: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1953_133_1458: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1954: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("127%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_1954_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_1954_133_1456: {
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
  View_I151_1954_133_1457: {
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
  Text_I151_1954_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1954_133_1458: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1954_133_1458: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1955: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("165%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_1955_133_1455: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I151_1955_133_1456: {
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
  View_I151_1955_133_1457: {
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
  Text_I151_1955_133_1457: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1955_133_1458: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1955_133_1458: {
    color: "rgba(1, 21, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1956: {
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
  View_151_1957: {
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
  Text_151_1957: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1958: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_151_1959: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_1960: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_1961: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_151_1962: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_151_1963: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_1964: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_151_1965: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_151_1966: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_151_1967: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_151_1968: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_1971: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_151_1972: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_151_1973: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_151_1974: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_151_1977: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_151_1978: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_151_1979: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_151_1980: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_151_1981: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_151_1982: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_151_1983: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_151_1984: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_151_1985: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_151_1986: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_151_1987: {
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
  TouchableOpacity_151_1988: {
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
  View_I151_1988_139_1105: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1988_139_1105: {
    color: "rgba(241, 60, 93, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I151_1988_139_1106: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%")
  },
  TouchableOpacity_151_1989: {
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
  View_I151_1989_139_1108: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1989_139_1108: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1989_139_1109: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%")
  },
  TouchableOpacity_151_1990: {
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
  View_I151_1990_139_1108: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1990_139_1108: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1990_139_1109: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%")
  },
  TouchableOpacity_151_1991: {
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
  View_I151_1991_139_1108: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1991_139_1108: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1991_139_1109: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%")
  },
  TouchableOpacity_151_1992: {
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
  View_I151_1992_139_1108: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1992_139_1108: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1992_139_1109: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%")
  },
  TouchableOpacity_151_1993: {
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
  View_I151_1993_139_1108: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_1993_139_1108: {
    color: "rgba(114, 125, 152, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1993_139_1109: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
