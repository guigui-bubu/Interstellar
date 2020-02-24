import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

export default function App() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#191919" }}>
      <View
        style={{
          backgroundColor: "#393939",
          padding: 10,
          marginBottom: 15,
          marginTop: 40
        }}
      >
        <Image
          style={{
            height: 50,
            width: 60,
            borderRadius: 6,
            resizeMode: "stretch"
          }}
          source={require("./assets/img/logo3.jpg")}
        ></Image>
      </View>
      <View style={{ backgroundColor: "#212121" }}>
        <Text
          style={{
            fontSize: 39,
            color: "#FFFFFF",
            marginBottom: 15,
            paddingLeft: 10
            /*backgroundColor: "green"*/
          }}
        >
          Interstellar
        </Text>
        <View
          style={{
            flexDirection: "row",
            paddingBottom: 20,
            paddingLeft: 7
            /*backgroundColor: "red"*/
          }}
        >
          <Text style={{ color: "#797979" }}> 2014</Text>
          <Text style={{ color: "#797979" }}> PG-13</Text>
          <Text style={{ color: "#797979" }}> 2h 49min</Text>
          <Text style={{ color: "#797979" }}> Adventure, Drama, Sci-Fi </Text>
        </View>
        <View style={{ flexDirection: "row", paddingLeft: 10 }}>
          <Image
            style={{ height: 150, width: 100 }}
            source={require("./assets/img/interstellar.jpg")}
          />
          <View
            style={{
              flexDirection: "column",
              flex: 1,
              paddingLeft: 20,
              paddingRight: 15
            }}
          >
            <Text style={{ fontSize: 15, color: "#FFFFFF", paddingBottom: 15 }}>
              A team of explorers travel through a wormhole in space in an
              attempt to ensure humanity's survival.
            </Text>
            <TouchableOpacity
              onPress={() => {
                alert("ICI C'EST PARIS");
              }}
              style={{
                marginTop: 5,
                backgroundColor: "#0277BD",
                height: 33,
                borderRadius: 4,
                justifyContent: "center",
                alignItems: "center",
                width: "95%"
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",

                  fontWeight: "bold"
                }}
              >
                + ADD TO WATCHLIST
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20
          }}
        >
          <View
            style={{
              alignItems: "center"
            }}
          >
            <Image
              style={{ height: 38, width: 38 }}
              source={require("./assets/img/etoilejaune.png")}
            />
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "bold" }}
              >
                8.6
              </Text>
              <Text style={{ color: "#FFFFFF" }}>/10</Text>
            </View>

            <Text style={{ fontSize: 10, color: "#797979" }}>1.1 M</Text>
          </View>
          <View
            style={{
              alignItems: "center"
            }}
          >
            <Image
              style={{ height: 38, width: 38 }}
              source={require("./assets/img/etoileblanche.png")}
            />
            <Text
              style={{ color: "#FFFFFF", marginTop: 5, fontWeight: "bold" }}
            >
              RATE THIS
            </Text>
          </View>
          <View
            style={{
              alignItems: "center"
            }}
          >
            <Image
              style={{ height: 22, width: 22, marginTop: 10 }}
              source={require("./assets/img/score.png")}
            />
            <Text
              style={{ color: "#FFFFFF", marginTop: 10, fontWeight: "bold" }}
            >
              Metascore
            </Text>
            <Text style={{ fontSize: 11, color: "#797979" }}>
              46 critic reviews
            </Text>
          </View>
        </View>
      </View>
      <ScrollView horizontal={true}>
        <View style={{ backgroundColor: "#212121", marginTop: 13 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10
            }}
          >
            <Text style={{ fontSize: 23, color: "#FFFFFF", marginLeft: 3 }}>
              Top Billed Cast
            </Text>
            <Text
              style={{
                color: "#0277BD",
                fontWeight: "bold",
                paddingTop: 10,
                marginRight: 7
              }}
            >
              SEE ALL
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ backgroundColor: "#2A2A2A", marginRight: 14 }}>
              <Image
                style={{ height: 210, width: 150 }}
                source={require("./assets/img/Matthew.jpg")}
              />
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 12,
                  fontWeight: "bold",
                  paddingLeft: 5,
                  paddingTop: 10
                }}
              >
                Matthew McCon...
              </Text>
              <Text
                style={{
                  color: "#797979",
                  fontSize: 13,
                  paddingLeft: 5,
                  paddingBottom: 5
                }}
              >
                Cooper
              </Text>
            </View>
            <View style={{ backgroundColor: "#2A2A2A", marginRight: 14 }}>
              <Image
                style={{ height: 200, width: 150 }}
                source={require("./assets/img/Anne2.jpg")}
              />
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 13,
                  fontWeight: "bold",
                  paddingLeft: 5,
                  paddingTop: 10
                }}
              >
                Anne Halthaway
              </Text>

              <Text
                style={{
                  color: "#797979",
                  fontSize: 12,

                  paddingLeft: 5
                }}
              >
                Brand
              </Text>
            </View>
            <View style={{ backgroundColor: "#2A2A2A", marginRight: 14 }}>
              <Image
                style={{ height: 200, width: 150 }}
                source={require("./assets/img/Jessica.jpg")}
              />
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 13,
                  fontWeight: "bold",
                  paddingLeft: 5,
                  paddingTop: 10
                }}
              >
                Jessica Chastain
              </Text>

              <Text
                style={{
                  color: "#797979",
                  fontSize: 12,

                  paddingLeft: 5
                }}
              >
                Murph
              </Text>
            </View>
            <View style={{ backgroundColor: "#2A2A2A", marginRight: 14 }}>
              <Image
                style={{ height: 200, width: 150 }}
                source={require("./assets/img/Ellen.jpg")}
              />
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 13,
                  fontWeight: "bold",
                  paddingLeft: 5,
                  paddingTop: 10
                }}
              >
                Ellen Burstyn
              </Text>

              <Text
                style={{
                  color: "#797979",
                  fontSize: 12,
                  paddingLeft: 5
                }}
              >
                Old Murph
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ marginTop: 20, marginLeft: 15 }}>
        <Text style={{ color: "#FFFFFF", fontSize: 15, fontWeight: "bold" }}>
          Director
        </Text>
        <Text style={{ fontSize: 13, color: "#797979", fontWeight: "bold" }}>
          Christopher Nolan
        </Text>

        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 15,
            fontWeight: "bold",
            marginTop: 15
          }}
        >
          Writer
        </Text>
        <Text style={{ fontSize: 13, color: "#797979", fontWeight: "bold" }}>
          Jonathan Nolan (written by) and Christopher Nolan (written by)
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
