import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

export default CreateResponsiveStyle({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: theme.fonts.fontSize.large,
    fontFamily: theme.fonts.Poppins.Bold,
  },
  field: {
    marginBottom: 16,
  },
});
