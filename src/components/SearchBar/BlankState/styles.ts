import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

export default CreateResponsiveStyle({
  container: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fonts.OpenSans.Semi_Bold,
    fontSize: theme.fonts.fontSize.regular,
    color: theme.colors.outer_space,
  },
  description: {
    fontFamily: theme.fonts.OpenSans.Semi_Bold,
    fontSize: theme.fonts.fontSize.smallRegular,
    color: theme.colors.rolling_stone,
  },
});
