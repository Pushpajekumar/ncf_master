import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { colors } from "../../../theme/Color";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../../../components/Button";
import Circle from "../../../components/Circle";
const Leaders = ({ details }) => {
  return (
    <View style={styles.categoryContainer}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Circle
            icon={<MaterialIcons name="event" size={25} color="black" />}
          />
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
      </View>
      <FlatList
        data={details}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={(element) => (
          <View>
            <View
              style={{
                marginTop: 15,
                width: 180,
                height: 180,
                borderRadius: 100,
                backgroundColor: colors.primary,
                marginHorizontal: 5,
              }}
            >
              <Image
                source={element.item.image}
                style={{ width: "100%", height: "100%", borderRadius: 100 }}
                resizeMode="cover"
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Leaders;

const styles = StyleSheet.create({
  categoryContainer: {
    height: 280,
    width: "100%",
    paddingHorizontal: 10,
  },
});
