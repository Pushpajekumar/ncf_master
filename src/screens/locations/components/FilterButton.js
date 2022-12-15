import { View, Text, StyleSheet } from "react-native";
import Button from "../../../components/Button";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Circle from "../../../components/Circle";
import { colors } from "../../../theme/Color";

const FilterButton = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Circle icon={<MaterialIcons name="event" size={25} color="black" />} />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            marginLeft: 5,
          }}
        >
          Leaders
        </Text>
      </View>
      <View style={styles.filter}>
        <Button title="All" />
        <Button title="Kids" />
        <Button title="Fitness" />
        <Button title="Party" />
        <Button title="Food" />
        <Button title="Sports/games" />
        <Button title="adventure/fun" />
        <Button title="Upskills/Learnings" />
        <Button title="Competstions" />
        <Button title="Stage" />
        <Button title="Festival/Culture" />
        <Button title="National/Intrest" />
      </View>
    </View>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  filter: {
    flexDirection: "row",
    paddingHorizontal: 10,
    flexWrap: "wrap",
    marginTop: 5,
  },
  container: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
});
