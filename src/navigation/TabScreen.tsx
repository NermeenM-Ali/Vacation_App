import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabBar from './navigationComponents/TabBarComponent';
import FillRequestScreen from '../screens/Home/FillRequestScreen';
import AllRequestsScreen from '../screens/Home/AllRequestsScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const VacationRequestStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="FillRequestScreen" component={FillRequestScreen} />
        </Stack.Navigator>
    )
}



const AllRequestsStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AllRequestsScreen" component={AllRequestsScreen} />
        </Stack.Navigator>
    )
}




const TabScreen = ({ navigation }: any) => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props: any) => <MyTabBar {...props} />} >
            <Tab.Screen
                name="VacationRequestStack"
                component={VacationRequestStack}
                options={{ tabBarLabel: "Fill Request", }} />
            <Tab.Screen
                name="AllRequestsStack"
                component={AllRequestsStack}
                options={{ tabBarLabel: "All Requests", }} />
        </Tab.Navigator>
    )
}

export default TabScreen;


