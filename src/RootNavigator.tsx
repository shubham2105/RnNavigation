import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import StackNavigatorDemo from './Screens/Stack/StackNavigatorDemo';
import TabNavigatorDemo from './Screens/Tab/TabNavigationDemo';
import DrawerNavigationDemo from './Drawer/DrawerNavigation';

export type RootStackParamList = {
    Home: undefined,
    StackNavigationDemo : undefined,
    TabNavigatorDemo: undefined,
    DrawerNavigationDemo: undefined,
}
// Creating a stack navigatior
const Stack = createStackNavigator();
const RootNavigator : React.FC = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="StackNavigationDemo" component={StackNavigatorDemo} options={{headerShown:false}}/>
            <Stack.Screen name="TabNavigatorDemo" component={TabNavigatorDemo} options={{headerShown:false}}/>
            <Stack.Screen name="DrawerNavigationDemo" component={DrawerNavigationDemo}/>
        </Stack.Navigator>
    );
};

export default RootNavigator;
