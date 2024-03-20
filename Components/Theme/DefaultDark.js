import {colors, radius, fontSize, fontFamily} from '../Constants/index';

const DEFAULT_DARK_COLOR_THEME = {
  primaryColor: colors.Dark_Blue,
  bacgroundColor: colors.white,
  cartColor: colors.navyBlue,
  textOrange: colors.orangecolor,
  textBlack: colors.Black,
  textWhite: colors.white,
  textRed: colors.Red,
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
  small: fontSize.small,
  medium: fontSize.medium,
  large: fontSize.large,
  xLarge: fontSize.extraLarge,
};

const BORDER_RADIUS = {
  radius1: radius.radius1, //5
  radius2: radius.radius2, //10
  radius3: radius.radius3, //15
  radius4: radius.radius4, //20
  radius5: radius.radius5, //90
};

export const DEFAULT_DARK_THEME_ID = 'default-dark';

export const DEFAULT_DARK_THEME = {
  id: DEFAULT_DARK_THEME_ID,
  color: DEFAULT_DARK_COLOR_THEME,
  family: FONT_FAMILY,
  radius: BORDER_RADIUS,
  size: FONT_SIZE,
};
