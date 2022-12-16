import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const EventBanner = () => {
  return (
    <View style={styles.eventBanner}>
      <Image
        source="https://images.pexels.com/photos/1926335/pexels-photo-1926335.jpeg?auto=compress&cs=tinysrgb&w=600"
        style={{
          width: "100%",
          height: "100%",
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export default EventBanner;

const styles = StyleSheet.create({
  eventBanner: {
    width: "100%",
    height: 200,
  },
});
