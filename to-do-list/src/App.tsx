import ToDoList from './ToDoList';
import './App.css'
import { createNativeStackNavigator } from '@react-navigator';

function App() {
  return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen
				name="MyModal"
				component={ModalScreen}
				options={{
					presentation: 'modal',
				}}
			/>
		</Stack.Navigator>
  )
}

export default App
