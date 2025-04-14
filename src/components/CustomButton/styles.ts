import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

const iconSize = 24;

export default CreateResponsiveStyle({
  container: {
    flexDirection: 'row',
    height: 52,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  leftIconContainer: {
    height: iconSize,
    width: iconSize,
    marginRight: 4,
  },
  title: {
    fontSize: theme.fonts.fontSize.regular,
    fontFamily: theme.fonts.OpenSans.Regular,
  },
  disabled: {
    backgroundColor: theme.colors.silver_sand,
  },
  primary: {
    backgroundColor: theme.colors.apple,
  },
  primaryText: {
    color: theme.colors.white,
  },
  secondary: {
    backgroundColor: theme.colors.feta,
  },
  secondaryText: {
    color: theme.colors.apple,
  },
});
