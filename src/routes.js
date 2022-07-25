import React from 'react';
import { Image, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import logo from './assets/images/horizontal-logo.png';
import Congratulations from './screens/Congratulations';
import Exercises from './screens/Exercises';
import HelpScreen from './screens/HelpScreen';
import LevelSelection from './screens/LevelSelection';
import Main from './screens/Main';
import ScreenAbout from './screens/ScreenAbout';
import {colors} from './styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          if (route.name === 'Sobre') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Ajuda') {
            iconName = focused ? 'help-circle' : 'help-circle-outline';
          }else if(route.name === 'Fases'){
            iconName = focused ? 'home' : 'home-outline';
          }

          return (<View style={focused ? styles.container : styles.containerStateTwo}><Icon name={iconName} size={size} color={colors.colorSecondary} /></View>);

        },
        tabBarStyle:{
          padding: 5,
          height: 64,
        },
        tabBarLabelStyle:{
          color: colors.colorTextPrimary,
          fontFamily: 'Poppins-Regular',
        }


    })}>
      <Tab.Screen options={{ headerTitle: (props) => <LogoTitle {...props} />, headerTitleAlign: 'center'}} name='Fases' component={LevelSelection}  />
      <Tab.Screen options={{headerTitle: 'AJUDA', headerTitleStyle: {fontFamily: 'Poppins-Bold', color: colors.colorSecondary}, headerTitleAlign: 'center'}} name='Ajuda' component={HelpScreen}  />
      <Tab.Screen options={{headerTitle: 'SOBRE', headerTitleStyle: {fontFamily: 'Poppins-Bold', color: colors.colorSecondary}, headerTitleAlign: 'center'}} name='Sobre' component={ScreenAbout} />
    </Tab.Navigator>
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

Icon.loadFont();

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
              fontFamily: 'Poppins-Bold',
            },
          }}
        />
        <Stack.Screen
          name="HelpScreen"
          component={HelpScreen}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="LevelSelection"
          component={Tabs}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="Exercises"
          component={Exercises}
          options={{
            headerShown:true,
          }}
        />
        <Stack.Screen
          name="Congratulations"
          component={Congratulations}
          options={{
            headerShown:false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default routes;

const styles = StyleSheet.create({
  logo: {
    resizeMode:'contain',
    width:140,
    height:50,
  },
  vector: {
    margin: 10,
  },
  container: {
    flex: 1,
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.colorPrimary
  },
  containerStateTwo: {
    backgroundColor: colors.colorAccent
  }
});