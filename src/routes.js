import React from 'react';
import { Image, StyleSheet } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import logo from './assets/images/horizontal-logo.png';
import vector from './assets/images/levelSelection/vector.png';
import Congratulations from './screens/Congratulations';
import Exercises from './screens/Exercises';
import LevelSelection from './screens/LevelSelection';
import Main from './screens/Main';
import ScreenAbout from './screens/ScreenAbout';
import {colors, metrics} from './styles';


const styles = StyleSheet.create({
  logo: {
    resizeMode:'contain',
    width:140,
    height:50,
  },
  vector:{
    margin: metrics.baseMargin,
  }
});


const Stack = createStackNavigator();

function Vector() {
  return (
    <Image
      style={styles.vector}
      source={vector}
    />
  );
}

function LogoTitle() {
  return (
    <Image
      style={styles.logo}
      source={logo}
    />
  );
}


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
            title: 'Sobre',
            headerTitleStyle: {
              fontFamily: 'Poppins-Bold',
            },
          }}
        />
        <Stack.Screen
          name="LevelSelection"
          component={LevelSelection}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerLeft: null,
            headerRight: (props) => <Vector {...props} />
          }}
        />
        <Stack.Screen
          name="Exercises"
          component={Exercises}
          options={{
            headerTitleStyle: {
              fontFamily: 'Poppins-Bold',
            },
            headerLeft: null,

          }}

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
