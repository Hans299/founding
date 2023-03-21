import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home.jsx';
import Profile from './views/Profile.jsx';


const Stack = createNativeStackNavigator();
const options = { headerShown: false };

class Navigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={options}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Profile" component={Profile} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigator;