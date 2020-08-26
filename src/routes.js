import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './screens/Main';
import {colors, fonts} from './styles';

const Stack = createStackNavigator();

const routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initalRouteName="Main"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: colors.colorPrimary,
          headerStyle: {
            backgroundColor: colors.colorTextPrimary,
          },
          headerTitleStyle: {
            color: colors.colorTextPrimary,
            fontSize: fonts.regular,
          },
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Main"
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default routes;
