import React from "react";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./ponents/HomeScreen"
import Login from './ponents/Login'
import Register from './ponents/Register'
import Dash from './ponents/Dash'
import ClientSearch from './ponents/ClientSearch'

const MainNavigator = createStackNavigator({
 Home: {screen: HomeScreen},
 Login:{screen: Login},
 Register: {screen: Register},
 Dash : {screen: Dash},
 ClientSearch: {screen: ClientSearch}
});

const Nav = createAppContainer(MainNavigator);

export default Nav;