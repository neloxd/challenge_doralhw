import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

export default CreateResponsiveStyle({
  container: {
    width: 67,
    height: 76,
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
  },
  text: {
    fontFamily: theme.fonts.OpenSans.Regular,
    fontSize: theme.fonts.fontSize.small,
    textAlign: 'center',
    color: theme.colors.outer_space,
  },
});
