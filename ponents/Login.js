import React, { useState } from "react";
import { Button, View, Text, TextInput, StyleSheet } from "react-native";
// import axios from "react-native-axios";

export default function Login(props) {
  const [input, setState] = useState({ emailInput: "", passwordInput: "" });

  async function submitCredentials() {
    const { navigate } = props.navigation;
    console.log(input)
    const res = await fetch("http://localhost:4321/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input)
      ,
      credentials: 'include',
    })
    const data = await res.json()
    console.log(data)
    navigate("Dash", { user: data, path: "/login" });
     
      // .then(res => {
      //   return res.json()
      //   console.log("success login", res);
    
      // })
      // .then(data => {
      //   navigate("Dash", { user: data, path: "/login" });
      //   console.log(data)
      // })
      // .catch(err => console.log({ err }, "Unable to login"));
  }

  function onChange(e) {
    const { name, value } = e.target;
    setState(ps => ({ ...ps, [name]: value }));
  }

  return (
    <View>
      <Text>login</Text>
      <TextInput
        placeholder="Email"
        style={styles.lrButtons}
        onChange={e => onChange(e)}
        value={input.emailInput}
        name="emailInput"
      />
      <TextInput
        placeholder="Password"
        style={styles.lrButtons}
        onChange={e => onChange(e)}
        value={input.passwordInput}
        name="passwordInput"
      />
      <Button title="Submit" onPress={() => submitCredentials()} />
    </View>
  );
}

Login.navigationOptions = {
  title: "Login"
};

const styles = StyleSheet.create({
  lrButtons: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    alignSelf: "center"
  }
});
