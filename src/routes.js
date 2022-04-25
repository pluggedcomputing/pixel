import React from 'react';
import { Image, StyleSheet } from 'react-native';
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


const styles = StyleSheet.create({
  logo: {
    resizeMode:'contain',
    width:140,
    height:50,
  }
});

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Sobre') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Ajuda') {
            iconName = focused ? 'help-circle' : 'help-circle-outline';
          }else if(route.name === 'Fases'){
            iconName = focused ? 'home' : 'home';
          }

          return <Icon name={iconName} size={size} color={color} />;

        },

    })}>
      <Tab.Screen options={{headerShown:false}} name='Fases' component={LevelSelection} />
      <Tab.Screen options={{headerShown:false}} name='Ajuda' component={HelpScreen}  />
      <Tab.Screen options={{headerShown:false}} name='Sobre' component={ScreenAbout} />
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
            title: 'AJUDA',
            headerTitleStyle: {
              fontFamily: 'Poppins-Bold',
            },
          }}
        />
        <Stack.Screen
          name="LevelSelection"
          component={Tabs}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
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
