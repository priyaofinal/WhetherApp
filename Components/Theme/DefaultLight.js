import {colors, radius, fontSize, fontFamily} from '../Constants/index';

const DEFAULT_LIGHT_COLOR_THEME = {
  white: colors.DarkWhite,
  black: colors.Black,
  dimBlack: colors.dimBlack,
  primaryColor: colors.skyBlue,
  mixBlue: colors.mixBlue,
  grey: colors.grey,
};

const FONT_FAMILY = {
  regular: fontFamily.regular,
  bold: fontFamily.bold,
  medium: fontFamily.medium,
  semiBold: fontFamily.semiBold,
  DMreg: fontFamily.DMreg,
  popinsXBold: fontFamily.popinsXBold,
};

const FONT_SIZE = {
  xSmall: fontSize.extraSmall,
  avgSmall: fontSize.avgSmall,
  regSmall: fontSize.regSmall,
  small: fontSize.small,
  statusSize: fontSize.statusSize,
  medium: fontSize.medium,
  large: fontSize.large,
  mLarge: fontSize.mediumLarge,
  xLarge: fontSize.extraLarge,
  max: fontSize.superLarge,
  xxLarge: fontSize.doubleXLarge,
};

const BORDER_RADIUS = {
  radius1: radius.radius1, //5
  radius2: radius.radius2, //10
  radius3: radius.radius3, //15
  radius4: radius.radius4, //20
  radius5: radius.radius5, //90
};

export const DEFAULT_LIGHT_THEME_ID = 'default-light';

export const DEFAULT_LIGHT_THEME = {
  id: DEFAULT_LIGHT_THEME_ID,
  color: DEFAULT_LIGHT_COLOR_THEME,
  family: FONT_FAMILY,
  radius: BORDER_RADIUS,
  size: FONT_SIZE,
};
