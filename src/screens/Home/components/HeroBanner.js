import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";
import Video_uri from "../../../../assets/videos/heroBanner.mp4";

const HeroBanner = () => {
  return (
    <View style={styles.videoContainer}>
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: ResizeMode.COVER,

          source: {
            uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          },
        }}
        fullscreen={{
          visible: false,
        }}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height / 3.2,
        }}
        slider={{
          visible: true,
        }}
        timeVisible={false}
      />
    </View>
  );
};

export default HeroBanner;

const styles = StyleSheet.create({
  videoContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
