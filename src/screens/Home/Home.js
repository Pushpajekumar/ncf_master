import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, StatusBar } from "react-native";
import Header from "../../components/Header";
import EventCategories from "./components/EventCategories";
import HeroBanner from "./components/HeroBanner";
import { homeScreen } from "../../../assets/data/Data";
import MiddleBanner from "./components/MiddleBanner";
import SubscriptionPlanCard from "./components/SubscriptionPlanCard";
import Leaders from "./components/Leaders";
import MiddleBanner2 from "./components/MiddleBanner2";

const Home = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Header />
        <HeroBanner />
        <EventCategories details={homeScreen.eventCategory} />
        <MiddleBanner />
        <SubscriptionPlanCard details={homeScreen.plans} />
        <Leaders details={homeScreen.eventCategory} />
        <MiddleBanner2 />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
