import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import AddAssetScreen from './screens/AddAssetsScreen';
import TransitionScreen from './screens/TransitionScreen';
import StatsScreen from './screens/TransactionScreen';

const Tab = createBottomTavNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Add Assets" component={AddAssetsScreen} />
				<Tab.Screen name="Transaction" component={TransactionScreen} />
				<Tab.Screen name="Stats" component={StatsScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}
