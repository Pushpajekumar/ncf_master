import { StyleSheet, ScrollView, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import Header from "../../components/Header";
import FilterButton from "./components/FilterButton";
import Event from "./components/Event";

const Location = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Header />
        <FilterButton />
        <Event />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
