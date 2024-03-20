import React, {useState} from 'react';
import {View, TouchableOpacity, ImageBackground} from 'react-native';
import {useThemeAwareObject} from '../../Theme';
import createStyle from './styles';
import {useSelector} from 'react-redux';
import Header from '../../Custom/CustomHeader';
import Text from '../../Custom/CustomText';
import {Icon} from 'react-native-elements';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Setting = ({navigation}) => {
  const getWeatherData = useSelector(state => state?.user?.weatherData);
  console.log('🚀 ~ Home ~ getWeatherData:', getWeatherData);
  const styles = useThemeAwareObject(createStyle);

  const convertKelvinToCelsius = kelvin => {
    return kelvin - 273.15;
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      style={styles.backgroundImage}>
      <View>
        <Header heading="Weather Details" />
      </View>
      <View style={styles.container}>
        {getWeatherData && (
          <>
            <Text style={styles.text}>
              Pressure: {getWeatherData?.main?.pressure}
            </Text>
            <Text style={styles.text}>
              Max Temperature:{' '}
              {convertKelvinToCelsius(getWeatherData?.main?.temp_max)?.toFixed(
                2,
              )}{' '}
              °C
            </Text>
            <Text style={styles.text}>
              Min Temperature:{' '}
              {convertKelvinToCelsius(getWeatherData?.main?.temp_min)?.toFixed(
                2,
              )}{' '}
              °C
            </Text>
            <Text style={styles.text}>
              Country Name: {getWeatherData?.sys?.country}
            </Text>
            <Text style={styles.text}>
              Visibility: {getWeatherData?.visibility}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Text>Go Back</Text>
              <Icon
                name="arrow-back"
                type="Ionicons"
                size={wp(7)}
                color={'blue'}
              />
            </TouchableOpacity>
          </>
        )}
      </View>
    </ImageBackground>
  );
};

export default Setting;
