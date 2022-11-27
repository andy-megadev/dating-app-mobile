import React, { useState } from 'react';
import {
  createStackNavigator,
  StackNavigationOptions
} from '@react-navigation/stack';

import {
  LoginScreen,
  OnboardingScreen,
  RegisterScreen
} from 'src/screens/auth';
import { IAuthStackParamList, Screens } from '../types';

const Stack = createStackNavigator<IAuthStackParamList>();

const AuthStack = () => {
  // const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(false);
  const isFirstLaunch = true;

  const screenOptions: StackNavigationOptions = {
    cardOverlayEnabled: true,
    presentation: 'card',
    animationEnabled: true,
    animationTypeForReplace: 'push',
    headerShown: false
  };

  return (
    <Stack.Navigator
      initialRouteName={isFirstLaunch ? Screens.Onboarding : Screens.Login}
      screenOptions={screenOptions}
    >
      <Stack.Screen name={Screens.Login} component={LoginScreen} />
      <Stack.Screen name={Screens.Register} component={RegisterScreen} />
      <Stack.Screen name={Screens.Onboarding} component={OnboardingScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
