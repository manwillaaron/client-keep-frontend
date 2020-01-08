import React, { Component } from "react";
import { Button, View, Text, TextInput, StyleSheet } from "react-native";
import axios from "react-native-axios";

function HomeScreen(props) {
  const { navigate } = props.navigation;
  return (
    <View>
      <Text></Text>
      <Button 
      title="login" onPress={() => navigate("Login")} />
      <Button
        title="register"
        onPress={() => {
          navigate("Register");
        }}
      />
    </View>
  );
}


HomeScreen.navigationOptions = {
  title: "Client Keep"
};

export default HomeScreen;
