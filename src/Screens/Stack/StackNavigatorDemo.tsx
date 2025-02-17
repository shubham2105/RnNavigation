import { createStackNavigator } from '@react-navigation/stack';
import StackScreen1 from './StackScreen1';
import StacksScreen2 from './StacksScreen2';

export type StackParamsList = {
    StackScreen1: undefined,
    StackScreen2: undefined,
};
const Stack = createStackNavigator<StackParamsList>();

const StackNavigatorDemo = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="StackScreen1" component={StackScreen1} options={{headerShown:false}}/>
            <Stack.Screen name="StackScreen2" component={StacksScreen2} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
};

export default StackNavigatorDemo;
