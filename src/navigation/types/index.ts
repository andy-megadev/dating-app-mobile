export enum Screens {
  Login = 'Login',
  Register = 'Register',
  Onboarding = 'Onboarding'
}

export type IAuthStackParamList = {
  [Screens.Login]: undefined;
  [Screens.Register]: undefined;
  [Screens.Onboarding]: undefined;
};
