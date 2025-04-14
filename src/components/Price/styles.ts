import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

export default CreateResponsiveStyle({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerVertical: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  priceLine: {
    fontFamily: theme.fonts.OpenSans.Regular,
    fontSize: theme.fonts.fontSize.medium,
    color: theme.colors.rolling_stone,
    textDecorationLine: 'line-through',
  },
  price: {
    fontFamily: theme.fonts.OpenSans.Regular,
    fontSize: theme.fonts.fontSize.medium,
    color: theme.colors.rolling_stone,
  },
  priceSmall: {
    fontSize: theme.fonts.fontSize.small,
  },
  priceOfferContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceOffer: {
    fontFamily: theme.fonts.Poppins.Bold,
    fontSize: theme.fonts.fontSize.large,
    color: theme.colors.carnation,
    paddingTop: 5,
    marginRight: 4,
  },
  priceOfferSmall: {
    fontSize: theme.fonts.fontSize.smallRegular,
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
    fontSize: theme.fonts.fontSize.small - 2,
  },
  priceOfferTagSmall: {
    fontSize: theme.fonts.fontSize.xsmall,
  },
});
