import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import { Image } from 'react-native'

const Stack = createNativeStackNavigator()
function HomeNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{
                headerStyle: {backgroundColor: "#5C3EBC"},
                headerTitleAlign: 'center',
                headerTitle: () => (
                    <Image source={require("../../assets/getirlogo.png")} style={{width: 70, height: 30}} />
                )
            }}
        />
    </Stack.Navigator>
  )
}

export default HomeNavigator