import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

export default CreateResponsiveStyle({
  container: {
    borderRadius: 15,
    height: 215,
    width: 160,
  },
  textWhite: {
    color: theme.colors.white,
  },
  uppercarseTransform: {
    textTransform: 'uppercase',
  },
  imageContainer: {
    height: 85,
    //backgroundColor: 'pink',
  },
  imageBackground:{
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15, 
    width: '100%', 
    height: 95,
  },
  infoContainer: {
    height: 130,
    backgroundColor: theme.colors.navy_blue,
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  campaignTag: {
    color: theme.colors.navy_blue,
    //backgroundColor: theme.colors.link_water,
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignSelf: 'flex-start',
  },
  campaignTagText: {
    fontSize: theme.fonts.fontSize.xsmall,
    fontFamily: theme.fonts.OpenSans.Semi_Bold,
  },
  campaignName: {
    fontSize: theme.fonts.fontSize.small,
    fontFamily: theme.fonts.Poppins.Bold,
    color: theme.colors.white,
    marginVertical: 4,
    padding: 0,
    alignSelf: 'flex-start',
  },
  discountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  discountValue: {
    flexDirection: 'row',
    marginRight: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  untilText: {
    fontSize: theme.fonts.fontSize.xsmall,
    fontFamily: theme.fonts.Poppins.Bold,
  },
  campaignDiscount: {
    fontSize: theme.fonts.fontSize.extraLarge,
    fontFamily: theme.fonts.Poppins.Bold,
  },
  discountDescription: {
    flex: 1,
    fontSize: 10,
    color: theme.colors.white,
    fontFamily: theme.fonts.OpenSans.Regular,
  },
  percentage: {
    fontSize: theme.fonts.fontSize.regular,
    fontFamily: theme.fonts.Poppins.Bold,
  },
  dcto: {
    fontSize: theme.fonts.fontSize.xxsmall,
    fontFamily: theme.fonts.Poppins.Bold,
  },
});
