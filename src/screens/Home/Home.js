import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Header from "../../components/Header";
import EventCategories from "./components/EventCategories";
import HeroBanner from "./components/HeroBanner";
import { homeScreen } from "../../../assets/data/Data";

const Home = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Header />
        <HeroBanner />
        <EventCategories details={homeScreen.eventCategory} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 18,
  },
});
