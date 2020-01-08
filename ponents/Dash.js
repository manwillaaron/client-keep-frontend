import React, { useEffect, useState } from "react";
import { Button, View, Text} from "react-native";

const Dash = props => {
  // const { user, path } = props.navigation.state.params;
  const { navigate } = props.navigation;

  return (
    <View>
      {/* {path === "/login" && <Text>{`Welcome back ${user.name}!`}</Text>}
      {path === "/register" && (
        <Text>{`Hi ${user.name}! Thanks for signing up.`}</Text>
      )} */}
      {/* <Text></Text> */}
      <Button title='Patient Search' onPress={()=> navigate("ClientSearch", { path: "/ClientSearch" })}/>
    </View>
  );
};

Dash.navigationOptions = {
  title: "your dashboard"
};

export default Dash;
