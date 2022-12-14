import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { colors } from "../../../theme/Color";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../../../components/Button";
import Circle from "../../../components/Circle";
const EventCategories = ({ details }) => {
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
            Event Categories
          </Text>
        </View>
        <Button title="More Events" />
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
                borderRadius: 10,
                backgroundColor: colors.primary,
                marginHorizontal: 5,
              }}
            >
              <Image
                source={element.item.image}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
              <View
                style={{
                  position: "absolute",
                  bottom: -15,
                  left: "22%",
                  width: 100,
                  height: 40,
                  backgroundColor: colors.gray,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                  }}
                >
                  {element.item.name}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default EventCategories;

const styles = StyleSheet.create({
  categoryContainer: {
    height: 280,
    width: "100%",
    backgroundColor: colors.lightgray,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
