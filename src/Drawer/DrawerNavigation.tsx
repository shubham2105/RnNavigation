import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import { Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native';

export type DrawerNavigationParamsList = {
    DrawerScreen1: undefined,
    DrawerScreen2: undefined,
    Home: undefined,
}

const Drawer = createDrawerNavigator<DrawerNavigationParamsList>();

type DrawerScreen1Params = {
    navigation: DrawerNavigationProp<DrawerNavigationParamsList, 'DrawerScreen1'>
}

type DrawerScreen2Params = {
    navigation: DrawerNavigationProp<DrawerNavigationParamsList, 'DrawerScreen2'>
}
const DrawerScreen1:React.FC<DrawerScreen1Params> = ({navigation}) =>{
    return(
        <View>
            <Text>DrawerScreen 1</Text>
            <Button title="Open Drawer" onPress={()=>navigation.openDrawer()}/>
        </View>
    );
};
const DrawerScreen2:React.FC<DrawerScreen2Params> = ({navigation}) =>{
    return(
        <View>
            <Text>DrawerScreen 2</Text>
            <Button title="Open Drawer" onPress={()=>navigation.openDrawer()}/>
        </View>
    );
};
const DrawerNavigationDemo = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <Drawer.Screen name="DrawerScreen1" component={DrawerScreen1} options={{headerShown:false}}/>
            <Drawer.Screen name="DrawerScreen2" component={DrawerScreen2} options={{headerShown:false}}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigationDemo;
