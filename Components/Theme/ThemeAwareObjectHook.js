import React, { useMemo } from 'react';
import {useTheme} from './Theme';

export const useThemeAwareObject = fn => {
  const {theme} = useTheme();
  const ThemeAwareObject = useMemo(() => fn(theme), [fn, theme]);
  return ThemeAwareObject;
};
