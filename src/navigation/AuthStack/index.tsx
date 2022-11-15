import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../screens/auth/LoginScreen';
import RegisterScreen from '../../screens/auth/RegisterScreen';
import OnboardingScreen from '../../screens/auth/OnboardingScreen';
import { IAuthStackParamList, Screens } from '../types';

const Stack = createStackNavigator<IAuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.Login} component={LoginScreen} />
      <Stack.Screen name={Screens.Register} component={RegisterScreen} />
      <Stack.Screen name={Screens.Onboarding} component={OnboardingScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
