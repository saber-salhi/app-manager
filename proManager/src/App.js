/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ThemeProvider } from 'react-native-elements';
import WelcomeScreen from './containers';
import SignUpScreen from './containers/signup';
import SignInScreen from './containers/signIn';

const AppNavigator = createStackNavigator(
  {
    Home: WelcomeScreen,
    SignUp: SignUpScreen,
    SignIn: SignInScreen
  },
  {
    initialRouteName: 'Home'
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
}
