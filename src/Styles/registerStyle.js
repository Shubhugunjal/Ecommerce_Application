import {StyleSheet} from 'react-native';
import {COLORS} from './colorTheme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },

  text: {
    color: COLORS.titleColor,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
export default styles;
