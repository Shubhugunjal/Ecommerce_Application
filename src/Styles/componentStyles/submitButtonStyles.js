import {StyleSheet} from 'react-native';
import {COLORS} from '../colorTheme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.normalTextColor,
    height: 40,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  text: {
    color: COLORS.btnTextColor,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default styles;
