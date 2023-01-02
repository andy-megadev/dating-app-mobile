export enum Screens {
  AnotherGender = 'AnotherGender',
  Login = 'Login',
  Onboarding = 'Onboarding',
  Register = 'Register'
}

export type IAuthStackParamList = {
  [Screens.AnotherGender]: undefined;
  [Screens.Login]: undefined;
  [Screens.Onboarding]: undefined;
  [Screens.Register]: undefined;
};
