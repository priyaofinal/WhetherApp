import {StyleSheet} from 'react-native';

const createStyle = theme => {
  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    text: {
      fontSize: theme.size.statusSize,
      fontWeight: 'bold',
      color: theme.color.black,
    },
  });
  return styles;
};

export default createStyle;
