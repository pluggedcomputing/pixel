import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Congratulations from './screens/Congratulations';
import Level1 from './screens/Exercises/Level1';
import Level2 from './screens/Exercises/Level2';
import Level3 from './screens/Exercises/Level3';
import Level4 from './screens/Exercises/Level4';
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
          headerTintColor: colors.colorTextSecondary,
          headerStyle: {
            backgroundColor: colors.colorPrimary,
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
            title: 'Sobre',
            headerTitleStyle: {
              fontSize: fonts.medium,
            },
          }}
        />
        <Stack.Screen
          name="LevelSelection"
          component={LevelSelection}
          options={{
            title: 'Escolha de níveis',
            headerTitleStyle: {
              fontSize: fonts.medium,
            },
          }}
        />
        <Stack.Screen
          options={{
            title: 'Nível 1',
            headerStyle: {
              elevation: 0,
              backgroundColor: colors.colorPrimary,
            },
            headerTitleStyle: {
              fontSize: fonts.medium,
            },
          }}
          name="Level1"
          component={Level1}
        />
        <Stack.Screen
          options={{
            title: 'Nível 2',
            headerStyle: {
              elevation: 0,
              backgroundColor: colors.colorPrimary,
            },
            headerTitleStyle: {
              fontSize: fonts.medium,
            },
          }}
          name="Level2"
          component={Level2}
        />
        <Stack.Screen
          options={{
            title: 'Nível 3',
            headerStyle: {
              elevation: 0,
              backgroundColor: colors.colorPrimary,
            },
            headerTitleStyle: {
              fontSize: fonts.medium,
            },
          }}
          name="Level3"
          component={Level3}
        />
        <Stack.Screen
          options={{
            title: 'Nível 4',
            headerStyle: {
              elevation: 0,
              backgroundColor: colors.colorPrimary,
            },
            headerTitleStyle: {
              fontSize: fonts.medium,
            },
          }}
          name="Level4"
          component={Level4}
        />
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
