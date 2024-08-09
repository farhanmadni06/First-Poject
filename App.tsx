import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home1 from './src/screen/Home1'
import Splash from './src/screen/Splash'

const Stack = createNativeStackNavigator();


const App = () => {

  const [splash, setsplash] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setsplash(false)
    }, 3000);
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
     {splash?
        <Stack.Screen name='Splash' component={Splash} />
      :  
        <Stack.Screen name='Home1' component={Home1} />
     }
      </Stack.Navigator>
    </NavigationContainer>
    // <Splash/>
  );
};

export default App