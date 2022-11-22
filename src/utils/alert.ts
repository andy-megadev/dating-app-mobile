import { Alert, AlertButton, AlertOptions } from 'react-native';

export interface IAlertConfig {
  title: string;
  message?: string;
  buttons?: AlertButton[];
  options?: AlertOptions;
}

export const generateAlertConfig = (
  title: string,
  message?: string,
  buttons?: AlertButton[],
  options?: AlertOptions
): IAlertConfig => ({
  title,
  message,
  buttons,
  options
});

export const alert = (config: IAlertConfig) => {
  const { title, message, buttons, options } = config;
  return Alert.alert(title, message, buttons, options);
};
