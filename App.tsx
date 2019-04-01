import React from "react";
import { Component } from 'react';
import { View, Text, ViewPagerAndroidBase } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomepageView from "./Code/View/HomepageView";
import LoginView from "./Code/View/LoginView";
import CamerasEdit from "./Code/View/CamerasEdit";
import CamerasEdit2 from "./Code/View/CamerasEdit2";



const AppNavigator = createStackNavigator(
	{
		Login: { screen: LoginView },
		Home: { screen: HomepageView },
		CamerasEdit: { 
			screen: CamerasEdit
			},
		CamerasEdit2: { 
			screen: CamerasEdit2 
			}
	},
	{
		defaultNavigationOptions:{ header: null },
	}
);

const AppContainer = createAppContainer(AppNavigator);


	
export default class App extends Component<any, object> {

	render() {
		return (
			<AppContainer />
		)
	}
}