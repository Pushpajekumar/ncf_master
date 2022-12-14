import React from "react";
import * as Screens from "../screens";
import { View, Text } from "react-native";
import NavigationString from "../constants/NavigationString";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../theme/Color";

const TabRoute = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={NavigationString.HOME}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 55,
        },
      }}
    >
      <Tab.Screen
        name={NavigationString.HOME}
        component={Screens.Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Feather
                name="menu"
                size={25}
                color={focused ? colors.black : colors.gray}
              />
              <Text style={{ color: focused ? colors.black : colors.gray }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={NavigationString.LOCATION}
        component={Screens.Location}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Ionicons
                name="location-sharp"
                size={25}
                color={focused ? colors.black : colors.gray}
              />
              <Text style={{ color: focused ? colors.black : colors.gray }}>
                Location
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={NavigationString.BUZZ}
        component={Screens.Buzz}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  backgroundColor: colors.primary,
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bottom: 10,
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: colors.secondary,
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="bulb1" size={25} color={colors.primary} />
                </View>
              </View>
              <Text
                style={{ color: focused ? "black" : "gray", marginTop: 30 }}
              >
                Buzz
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={NavigationString.NOTIFICATION}
        component={Screens.Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Ionicons
                name="notifications"
                size={25}
                color={focused ? "black" : "gray"}
              />
              <Text style={{ color: focused ? "black" : "gray" }}>
                Notificati
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={NavigationString.PROFILE}
        component={Screens.Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <FontAwesome
                name="user"
                size={25}
                color={focused ? "black" : "gray"}
              />
              <Text style={{ color: focused ? "black" : "gray" }}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoute;
