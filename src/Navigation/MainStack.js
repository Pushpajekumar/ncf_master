import React from "react";
import NavigationString from "../constants/NavigationString";
import TabRoute from "./TabRoute";

const MainStack = (Stack) => {
  return (
    <Stack.Screen name={NavigationString.TAB_ROUTES} component={TabRoute} />
  );
};

export default MainStack;
