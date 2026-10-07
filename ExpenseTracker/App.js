// Main entry point for the Expense Tracker React Native app
// Sets up bottom tab navigation and stack navigation for transactions
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Provides navigation context
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // For bottom tab navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // For stack navigation within tabs
// Import screen components (each displays its own screen name)
import HomeScreen from './screens/HomeScreen';
import AddAssetsScreen from './screens/AddAssetsScreen';
import TransactionScreen from './screens/TransactionScreen';
import StatsScreen from './screens/StatsScreen';
import TransactionDetailScreen from './screens/TransactionDetailScreen';
// Create navigators
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
//Stack navigator for the Transaction tab
// Allows navigation from the transaction list to transaction details
function TransactionStack() {
   return (
    <Stack.Navigator>
      <Stack.Screen name="Transactions" component={TransactionScreen} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add Assets" component={AddAssetsScreen} />
        <Tab.Screen name="Transaction" component={TransactionStack} />
        <Tab.Screen name="Stats" component={StatsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
