import React, { useState } from "react";
import { Button, View, Text, TextInput, StyleSheet } from "react-native";
import axios from "react-native-axios";

function Register(props) {
  const [input, setState] = useState({
    emailInput: "",
    passwordInput: "",
    passCheckInput: "",
    nameInput: ""
  });

  function onChange(e) {
    const { name, value } = e.target;
    setState(ps => ({ ...ps, [name]: value }));
  }

  function submitCredentials() {
    const { emailInput, passwordInput, passCheckInput, nameInput } = input;
    const { navigate } = props.navigation;
    axios
      .post("http://192.168.1.49:4321/auth/register", {
        email: emailInput,
        password: passwordInput,
        passCheck: passCheckInput,
        name: nameInput
      })
      .then(res => navigate("Dash", { user: res.data, path: "/register" }))
      .catch(err => console.log({ err }, "Unable to login"));
  }

  return (
    <View>
      <TextInput
        style={styles.lrButtons}
        onChange={e => onChange(e)}
        value={input.nameInput}
        name="nameInput"
        placeholder="Name"
      />
      <TextInput
        style={styles.lrButtons}
        onChange={e => onChange(e)}
        value={input.emailInput}
        name="emailInput"
        placeholder="Email"
      />
      <TextInput
        style={styles.lrButtons}
        onChange={e => onChange(e)}
        value={input.passwordInput}
        name="passwordInput"
        placeholder="Password"
      />
      <TextInput
        style={styles.lrButtons}
        onChange={e => onChange(e)}
        value={input.passCheckInput}
        name="passCheckInput"
        placeholder="Re-enter Password"
      />
      <Button title="Submit" onPress={() => submitCredentials()} />
    </View>
  );
}

Register.navigationOptions = {
  title: 'Register'
}



const styles = StyleSheet.create({
  lrButtons: {
    color: 'red',
    marginTop: 20,
    padding: 20,
    backgroundColor: 'green'
  },
  buttons:{
    height:40,
    width:100
  }
});

export default Register;
