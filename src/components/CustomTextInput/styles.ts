import theme from '@app/theme/theme';
import {CreateResponsiveStyle} from 'rn-responsive-styles';

export default CreateResponsiveStyle({
  container: {
    marginBottom: 5,
    height: 90,
  },
  label: {
    marginBottom: 4,
    fontSize: theme.fonts.fontSize.smallRegular,
    fontFamily: theme.fonts.OpenSans.Regular,
  },
  phone: {
    color: theme.colors.rolling_stone,
    fontSize: theme.fonts.fontSize.smallRegular,
    fontFamily: theme.fonts.OpenSans.Regular,
    marginRight: 16,
  },
  inputContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.iron,
    borderRadius: 8,
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    width: '100%',
  },
  bottomBorderRedOrange: {
    borderColor: theme.colors.red_orange,
  },
  bottomBorderApple: {
    borderColor: theme.colors.apple,
  },
  inputStyle: {
    fontSize: theme.fonts.fontSize.smallRegular,
    fontFamily: theme.fonts.OpenSans.Regular,
    color: theme.colors.outer_space,
    padding: 0,
    margin: 0,
    flex: 1,
  },
  containerIcons: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  descriptionContainer: {
    marginTop: 2,
  },
  rules: {
    color: theme.colors.rolling_stone,
    fontSize: theme.fonts.fontSize.small,
    fontFamily: theme.fonts.OpenSans.Regular,
  },
  error: {
    color: theme.colors.red_orange,
  },
});
