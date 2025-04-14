import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

export default CreateResponsiveStyle({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
