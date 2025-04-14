import theme from '@app/theme/theme';
import {CreateResponsiveStyle} from 'rn-responsive-styles';

export default CreateResponsiveStyle({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 16,
    borderWidth: 0.25,
    borderColor: theme.colors.iron,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: theme.colors.rolling_stone,
    elevation: 4,
  },
});
