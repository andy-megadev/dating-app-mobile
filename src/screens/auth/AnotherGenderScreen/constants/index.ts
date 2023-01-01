import i18n from 'src/i18n';

import { IntersexTraits, ShowTo } from '../types';

export const SHOW_TO_OPTIONS = [
  { title: i18n.t('anotherGender.toLookingForWomen'), value: ShowTo.W },
  { title: i18n.t('anotherGender.toLookingForMen'), value: ShowTo.M }
];

export const INTERSEX_TRAITS_OPTIONS = [
  { title: i18n.t('common.yes'), value: IntersexTraits.Y },
  { title: i18n.t('common.no'), value: IntersexTraits.N },
  { title: i18n.t('anotherGender.idRatherNotSay'), value: IntersexTraits.S }
];
