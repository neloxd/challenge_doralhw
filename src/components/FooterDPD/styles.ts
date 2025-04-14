import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

export default CreateResponsiveStyle({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 33,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
    alignSelf: 'flex-end',
  },
  priceContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  price: {
    fontFamily: theme.fonts.OpenSans.Regular,
    fontSize: theme.fonts.fontSize.regular,
    color: theme.colors.rolling_stone,
    textDecorationLine: 'line-through',
  },
  priceOfferContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceOffer: {
    fontFamily: theme.fonts.Poppins.Bold,
    fontSize: theme.fonts.fontSize.large,
    color: theme.colors.carnation,
    marginRight: 4,
  },
  priceOfferTagContainer: {
    backgroundColor: theme.colors.azure_radiance,
    paddingHorizontal: 4,
    paddingVertical: 3,
    borderRadius: 4,
  },
  priceOfferTag: {
    color: theme.colors.white,
    fontFamily: theme.fonts.OpenSans.Semi_Bold,
  },
});
