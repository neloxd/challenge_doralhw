import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

export default CreateResponsiveStyle({
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: theme.fonts.OpenSans.Regular,
    fontSize: theme.fonts.fontSize.small,
    textAlign: 'left',
    color: theme.colors.gray,
  },
  description: {
    fontFamily: theme.fonts.OpenSans.Regular,
    fontSize: theme.fonts.fontSize.large,
    textAlign: 'justify',
    color: theme.colors.outer_space,
  },
});
