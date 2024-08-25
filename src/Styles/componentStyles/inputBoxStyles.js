import {StyleSheet} from 'react-native';
import {COLORS} from '../colorTheme';

const styles = StyleSheet.create({
  nameView: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
    color: COLORS.normalTextColor,
  },

  nameInputBox: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.normalTextColor,
    paddingLeft: 10,
    fontSize: 15,
  },
});
export default styles;
