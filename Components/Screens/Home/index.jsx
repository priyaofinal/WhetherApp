import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useThemeAwareObject} from '../../Theme';
import createStyle from './styles';
import {useDispatch} from 'react-redux';
import {Icon} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Text from '../../Custom/CustomText';
import Header from '../../Custom/CustomHeader';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {setWeather} from '../../redux/slices/userSlice';
import {apiKey, BaseURL} from '../../NetworkCalls/index';

const Home = ({navigation}) => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const styles = useThemeAwareObject(createStyle);

  useEffect(() => {
    fetchWeatherData('Pakistan');
  }, []);

  const fetchWeatherData = async cityName => {
    try {
      const response = await BaseURL.get(
        `/weather?q=${cityName}&appid=${apiKey}`,
      );
      setWeatherData(response?.data);
      dispatch(setWeather(response?.data));
      console.log('🚀 ~ fetchWeatherData ~ response:', response?.data);
    } catch (error) {
      console.error('Error fetching weather data:', error?.message);
    }
  };

  const handleSearchInputChange = text => {
    setSearchInput(text.trim());

    if (text.trim() === '') {
      fetchWeatherData('Pakistan');
    } else {
      fetchWeatherData(text);
    }
  };

  const convertKelvinToCelsius = kelvin => {
    return kelvin - 273.15;
  };

  return (
    <View style={{flexGrow: 1, paddingTop: insets.top}}>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.backgroundImage}>
        <View>
          <Header
            heading="Weather App"
            searchInputs={searchInput}
            onSearchInputChange={handleSearchInputChange}
          />
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            {weatherData && (
              <>
                <Text style={styles.text}>Place: {weatherData.name}</Text>
                <Text style={styles.text}>
                  Temperature:{' '}
                  {convertKelvinToCelsius(weatherData.main.temp).toFixed(2)} °C
                </Text>
                <Text style={styles.text}>
                  Humidity: {weatherData.main.humidity}%
                </Text>
                <Text style={styles.text}>
                  Weather: {weatherData.weather[0].description}
                </Text>
                <Text style={styles.text}>
                  Wind Speed: {weatherData.wind.speed} m/s
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Setting');
                  }}>
                  <Text>See Details</Text>
                  <Icon
                    name="arrow-forward"
                    type="Ionicons"
                    size={wp(7)}
                    color={'blue'}
                  />
                </TouchableOpacity>
              </>
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Home;
