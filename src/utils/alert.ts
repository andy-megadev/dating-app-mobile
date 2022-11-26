import { Alert, AlertButton, AlertOptions } from 'react-native';

export interface IAlertConfig {
  title: string;
  message?: string;
  buttons?: AlertButton[];
  options?: AlertOptions;
}

type IGenerateAlertConfig = (
  title: IAlertConfig['title'],
  message?: IAlertConfig['message'],
  buttons?: IAlertConfig['buttons'],
  options?: IAlertConfig['options']
) => IAlertConfig;

export const generateAlertConfig: IGenerateAlertConfig = (
  title,
  message,
  buttons,
  options
) => ({
  title,
  message,
  buttons,
  options
});

export const alert = (config: IAlertConfig) => {
  const { title, message, buttons, options } = config;
  return Alert.alert(title, message, buttons, options);
};
