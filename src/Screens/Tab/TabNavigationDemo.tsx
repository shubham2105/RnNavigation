import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabScreen1 from './TabScreen1';
import TabScreen2 from './TabScreen2';

export type TabParamsList = {
    TabScreen1: undefined,
    TabScreen2: undefined,
}

const Tab = createBottomTabNavigator<TabParamsList>();

const TabNavigatorDemo = () =>{
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name='TabScreen1' component={TabScreen1}/>
            <Tab.Screen name='TabScreen2' component={TabScreen2}/>
        </Tab.Navigator>
    );
};

export default TabNavigatorDemo;
