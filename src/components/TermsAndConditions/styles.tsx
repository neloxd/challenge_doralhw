import theme from '@app/theme/theme';
import {CreateResponsiveStyle} from 'rn-responsive-styles';

export default CreateResponsiveStyle({
  container: {
    width: 28,
    height: 28,
  },
  normalText: {
    fontFamily: theme.fonts.OpenSans.Regular,
    fontSize: theme.fonts.fontSize.small,
    color: theme.colors.rolling_stone,
  },
  expoText: {
    fontFamily: theme.fonts.OpenSans.Regular,
    fontSize: theme.fonts.fontSize.small,
    color: theme.colors.apple,
  },
  viewText: {
    flexDirection: 'row',
  },
});
