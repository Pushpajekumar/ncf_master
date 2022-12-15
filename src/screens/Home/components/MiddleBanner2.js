import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../../../theme/Color";
import Circle from "../../../components/Circle";
import { AntDesign } from "@expo/vector-icons";

const MiddleBanner = () => {
  return (
    <View style={styles.middlebanner}>
      <Image
        source="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600"
        style={{
          width: "50%",
          height: "100%",
        }}
        resizeMode="cover"
      />
      <View
        style={{
          backgroundColor: colors.black,
          paddingHorizontal: 10,
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Circle icon={<AntDesign name="star" size={25} color="black" />} />
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: colors.primary,
              marginHorizontal: 10,
            }}
          >
            Event
          </Text>
        </View>
        <Text
          style={{
            color: colors.primary,
            paddingHorizontal: 10,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Circle icon={<AntDesign name="play" size={25} color="black" />} />
          <Text
            style={{
              color: colors.primary,
              fontSize: 15,
              fontWeight: "bold",
              marginHorizontal: 10,
            }}
          >
            Watch Video
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MiddleBanner;

const styles = StyleSheet.create({
  middlebanner: {
    width: "100%",
    height: 200,
    flexDirection: "row",
    backgroundColor: colors.lightgray,
  },
});
