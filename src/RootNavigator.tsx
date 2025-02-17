import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import StackNavigatorDemo from './Screens/Stack/StackNavigatorDemo';

export type RooStackParamList = {
    Home: undefined,
    StackNavigationDemo : undefined,
}
// Creating a stack navigatior
const Stack = createStackNavigator();
const RootNavigator : React.FC = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name='StackNavigationDemo' component={StackNavigatorDemo} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
};

export default RootNavigator;
