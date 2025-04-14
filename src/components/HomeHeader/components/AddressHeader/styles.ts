import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

export default CreateResponsiveStyle({
  container: {
    paddingLeft: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  adressTextTop: {
    color: theme.colors.rolling_stone,
    fontSize: 12,
    fontWeight: '400',
  },
  adressTextBottom: {
    color: theme.colors.black,
    fontSize: 12,
    fontWeight: '600',
    paddingRight: 4,
  },
});
