import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './CustomText';
import { Icon, SearchBar } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useThemeAwareObject } from '../Theme/ThemeAwareObjectHook';

const CustomHeader = (props) => {
  const styles = useThemeAwareObject(createStyle);
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <View style={styles.topView}>
      {!showSearch && <Text style={styles.heading}>{props.heading}</Text>}
      <TouchableOpacity
        style={[
          !showSearch && { marginLeft: wp(34) },
          showSearch && { marginLeft: wp(0) },
        ]}
        onPress={toggleSearch}>
        {showSearch ? (
          <SearchBar
            placeholder="By name or phone"
            containerStyle={[
              styles.searchBarContainerStyle,
              showSearch && { width: wp(80) },
            ]}
            inputContainerStyle={styles.searchBarInputContainerStyle}
            inputStyle={styles.searchBarInputStyle}
            leftIconContainerStyle={styles.searchBarLeftIconContainerStyle}
            rightIconContainerStyle={styles.searchBarRightIconContainerStyle}
            value={props.searchInputs}
            onChangeText={(text) => props.onSearchInputChange(text)} // Call the handler passed from Home component
          />
        ) : (
          <Icon name="search" type="Ionicons" size={wp(7)} color={'white'} />
        )}
      </TouchableOpacity>
      {showSearch && (
        <TouchableOpacity onPress={toggleSearch}>
          <Icon name="cross" type="entypo" size={wp(7)} color={'silver'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const createStyle = (theme) => {
  return StyleSheet.create({
    topView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: wp(2),
      width: wp(100),
      alignSelf: 'center',
      backgroundColor: theme.color.primaryColor,
    },
    heading: {
      color: theme.color.white,
      fontFamily: theme.family.medium,
      fontSize: theme.size.statusSize,
      fontWeight: '600',
    },
    searchBarContainerStyle: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
      borderTopWidth: 0,
    },
    searchBarInputContainerStyle: {
      backgroundColor: theme.color.white,
      elevation: 3,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
      shadowColor: theme.color.black,
    },
    searchBarInputStyle: {
      fontSize: theme.size.small,
      color: theme.color.black,
    },
    searchBarLeftIconContainerStyle: {
      paddingLeft: wp(2),
    },
    searchBarRightIconContainerStyle: {},
  });
};

export default CustomHeader;