import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const TransactionDetailScreen = ({ route }) => {
  const { id } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TransactionDetailScreen for {id}</Text>
    </View>
  );
};

const TransactionScreen = ({navigation}) => {
	<View style={styles.container}>
		<Text>TransactionScreen</Text>
			<Button 
				title="View Transaction Detail"
				onPress={() => navigation.navigate('Transaction Detail', { id: 1 }}
			/>
	</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default TransactionDetailScreen;
