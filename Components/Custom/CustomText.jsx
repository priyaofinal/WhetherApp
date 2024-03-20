import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useThemeAwareObject} from '../Theme';

const CustomText = props => {
  const styles = useThemeAwareObject(createStyle);
  return (
    <Text
      numberOfLines={props.numberOfLines ?? null}
      allowFontScaling={false}
      style={props.style ?? styles.textContainer}>
      {props.children}
    </Text>
  );
};

export default CustomText;

const createStyle = theme => {
  return StyleSheet.create({
    textContainer: {
      color: theme.color.black,
      fontSize: hp(2),
      // fontFamily: 'Poppins-Regular',
    },
  });
};
