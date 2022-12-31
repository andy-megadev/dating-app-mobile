import i18n from 'src/i18n';

export const SHOW_TO_OPTIONS = [
  { title: i18n.t('anotherGender.toLookingForWomen'), value: 'woman' },
  { title: i18n.t('anotherGender.toLookingForMen'), value: 'man' }
];

export const INTERSEX_TRAITS_OPTIONS = [
  i18n.t('common.yes'),
  i18n.t('common.no'),
  i18n.t('anotherGender.idRatherNotSay')
];
