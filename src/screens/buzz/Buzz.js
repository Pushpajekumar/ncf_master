import { ScrollView, StatusBar, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { homeScreen } from "../../../assets/data/Data";
import EventBanner from "./components/EventBanner";
import EventInfo from "./components/EventInfo";

const Buzz = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Header />
        <EventBanner />
        <EventInfo details={homeScreen.eventCategory} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Buzz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
