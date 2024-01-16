import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Star from "./Star";

function Screen01({ navigation, route }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 10,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flex: 6 }}>
        <Image
          source={require(`./assets/vs_${route.params?.color || "blue"}.png`)}
          style={{ width: 290, height: 350, alignSelf: "center" }}
        />
        <View style={{ flex: 1, justifyContent: "space-evenly" }}>
          <Text style={{ color: "#000", fontSize: 15, fontWeight: 400 }}>
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
          <Star></Star>
          <View style={{ fontSize: 18, fontWeight: 700, flexDirection: "row" }}>
            <Text style={{ fontSize: 15, fontWeight: 700 }}>1.790.000 đ</Text>
            <Text
              style={{
                color: "rgba(0, 0, 0, 0.58)",
                textDecorationLine: "line-through",
                textDecorationColor: "#000",
                marginHorizontal: 60,
              }}
            >
              1.790.000 đ
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "#FA0000", fontSize: 12, fontWeight: 700 }}>
              Ở ĐÂU RẺ HƠN HOÀN TIỀN
            </Text>
            <Image
              source={require("./assets/img_1.png")}
              style={{ width: 20, height: 20, marginHorizontal: 8 }}
            />
          </View>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "rgba(0, 0, 0, 0.46)",
              backgroundColor: "rgba(196, 196, 196, 0.00)",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 4,
              paddingHorizontal: 102,
              paddingVertical: 8,
            }}
            onPress={() => {
              navigation.navigate("Screen02");
            }}
          >
            <Text style={{ fontSize: 15 }}>4 MÀU-CHỌN MÀU</Text>
            <Image
              source={require("./assets/Vector.png")}
              style={{
                position: "absolute",
                right: 15,
                top: 10,
                width: 11.5,
                height: 14,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 13 }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: 110,
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#CA1536",
            backgroundColor: "#EE0A0A",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 4,
          }}
        >
          <Text style={{ color: "#F9F2F2", fontSize: 20, fontWeight: 700 }}>
            CHỌN MUA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Screen02({ navigation }) {
  const [color, setColor] = useState("blue");
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        width: "100%",
        justifyContent: "space-between",
        paddingTop:5
      }}
    >
      <View style={{ flex: 2, flexDirection: "row" }}>
        <Image
          source={require(`./assets/vs_${color}.png`)}
          style={{ width: 112, height: 132, marginLeft: 4 }}
        />
        <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 400 }}>
          Điện Thoại Vsmart Joy 3{"\n"}Hàng chính hãng
        </Text>
      </View>
      <View
        style={{
          flex: 6,
          justifyContent: "space-between",
          paddingVertical: 10,
          paddingHorizontal: 17,
          backgroundColor: "#C4C4C4",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 400 }}>
          Chọn một màu bên dưới:
        </Text>
        <View style={{ alignItems: "center", justifyContent: "space-around" }}>
          <TouchableOpacity
            onPress={() => setColor("silver")}
            style={[
              {
                width: 85,
                height: 80,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
              },
              { backgroundColor: "#C5F1FB" },
            ]}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => setColor("red")}
            style={[
              {
                width: 85,
                height: 80,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
              },
              { backgroundColor: "#F30D0D", marginTop: 10 },
            ]}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => setColor("black")}
            style={[
              {
                width: 85,
                height: 80,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
              },
              { backgroundColor: "#000", marginTop: 10 },
            ]}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => setColor("blue")}
            style={[
              {
                width: 85,
                height: 80,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
              },
              { backgroundColor: "#234896", marginTop: 10 },
            ]}
          ></TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            paddingHorizontal: 135,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
            borderColor: "#CA1536",
            backgroundColor: "rgba(25, 82, 226, 0.58)",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
          }}
          onPress={() => {
            navigation.navigate("Screen01", {
              color: color,
            });
          }}
        >
          <Text style={{ color: "#F9F2F2", fontSize: 20, fontWeight: 700 }}>
            XONG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default function App() {
  var Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen01"
          component={Screen01}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen02"
          component={Screen02}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
