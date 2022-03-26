import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Congratulations from './screens/Congratulations';
import Exercises from './screens/Exercises';
import LevelSelection from './screens/LevelSelection';
import Main from './screens/Main';
import ScreenAbout from './screens/ScreenAbout';
import {colors, fonts} from './styles';

const Stack = createStackNavigator();

const routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initalRouteName="Main"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: colors.colorTextPrimary,
          headerStyle: {
            backgroundColor: colors.colorAccent,
          },
          headerTitleStyle:{
            fontFamily: 'Poppins-Bold',
          },
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Main"
          component={Main}
        />
        <Stack.Screen
          name="ScreenAbout"
          component={ScreenAbout}
          options={{
            title: 'SOBRE',
            headerTitleStyle: {
              fontSize: fonts.medium,
              fontFamily: 'Poppins-Bold',
            },
          }}
        />
        <Stack.Screen
          name="LevelSelection"
          component={LevelSelection}
          options={{
            title: 'FASES',
            headerTitleStyle: {
              fontSize: fonts.medium,
              fontFamily: 'Poppins-Bold',
            },
          }}
        />
        <Stack.Screen name="Exercises" component={Exercises} />

        <Stack.Screen
          options={{headerShown: false}}
          name="Congratulations"
          component={Congratulations}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default routes;
