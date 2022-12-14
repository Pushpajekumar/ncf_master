import React from "react";
import { colors } from "../theme/Color";
import { View, Text, StyleSheet, Image } from "react-native";
import Logo from "../../assets/image/logo.jpeg";
import Circle from "./Circle";
import { EvilIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Circle
        icon={<EvilIcons name="search" size={28} color={colors.black} />}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    width: "100%",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 50,
  },
});
