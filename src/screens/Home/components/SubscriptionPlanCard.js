import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { colors } from "../../../theme/Color";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../../../components/Button";
import Circle from "../../../components/Circle";
import { FontAwesome } from "@expo/vector-icons";

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
        <Button title="More Plans" />
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
                marginTop: 30,
                width: 180,
                height: 180,
                borderRadius: 10,
                backgroundColor: colors.primary,
                marginHorizontal: 5,
                paddingHorizontal: 10,
                justifyContent: "space-evenly",
                alignItems: "center",
                paddingTop: 30,
                paddingBottom: 10,
                shadowColor: colors.black,
                shadowOffset: {
                  width: 3,
                  height: 3,
                },
                shadowRadius: 10,
              }}
            >
              <Text> {element.item.months} Months</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome name="rupee" size={24} color="black" />
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "600",
                    marginHorizontal: 5,
                  }}
                >
                  {element.item.charge}
                </Text>
              </View>
              <Text>Inr / month</Text>
              <Text>{element.item.title}</Text>
              <Button title="Choose Your Plan" />

              <View
                style={{
                  position: "absolute",
                  top: -15,
                  left: "22%",
                }}
              >
                <Button title="Save Rs. 400" />
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
    paddingHorizontal: 10,
    marginTop: 10,
  },
});
