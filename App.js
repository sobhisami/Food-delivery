import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import { Restaurant, OrderDelivery,SignUpScreen ,SignInScreen,ForgotPasswordScreen,NewPasswordScreen,ConfirmEmailScreen} from './screens'
import Tabs from './navigation/tabs'

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'SignInScreen'}
            >
                <Stack.Screen name='ConfirmEmailScreen' component={ConfirmEmailScreen}/>
                <Stack.Screen name='NewPasswordScreen' component={NewPasswordScreen}/>
                <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen}/>
              <Stack.Screen name='SignInScreen' component={SignInScreen}/>
               <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
                <Stack.Screen name="Home" component={Tabs} />
                <Stack.Screen name="Restaurant" component={Restaurant} />
                <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;