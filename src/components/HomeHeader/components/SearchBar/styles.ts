import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';
import {isIos} from '@app/constants/platform';

export default CreateResponsiveStyle({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  shadowEffect: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    shadowColor: theme.colors.san_juan,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    padding: 2,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingLeft: 8,
    flex: 1,
    backgroundColor: theme.colors.alabaster,
    fontSize: 14,
    fontWeight: '600',
    padding: isIos ? 10 : 4,
  },
  searchBarInput: {
    fontSize: 14,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 8,
  },
});
