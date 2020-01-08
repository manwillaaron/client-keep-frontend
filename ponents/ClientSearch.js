import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "react-native-axios";

const ClientSearch = props => {
  const [patients, setPatients] = useState({ filtered: [], all: [] });
  const [input, setState] = useState({ emailInput: "", passwordInput: "" });
  useEffect(() => {
    fetch("http://localhost:4321/api/patients", {
      method: "GET",
      credentials: "include"
    })
    .then(res => res.json())
    .then(data => {
      setPatients({ ...patients, all: data, filtered: data });
    });
  }, []);

  
  function onChange(e) {
    const { name, value } = e.target;
    setState(ps => ({ ...ps, [name]: value }));
  }

  const { user } = props.navigation.state.params;
  return (
    <View>
       <TextInput
        placeholder="Lookup by Name"
        onChange={e => onChange(e)}
        value={input.nameInput}
        name="emailInput"
      />
      {patients.filtered.map(pat => (
        <Text key={pat.id}>{pat.firstname}</Text>
      ))}
    </View>
  );
};

ClientSearch.navigationOptions = {
  title: "Patient Search"
};

export default ClientSearch;
