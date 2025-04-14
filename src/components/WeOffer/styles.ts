import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';
import {isIos} from '@app/constants/platform';

export default CreateResponsiveStyle({
  container: {
    paddingHorizontal: 16,
  },
  card: {
    height: 136,
    width: 96,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 5,
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    alignItems: 'center',
    margin: 20,
  },
  greenLine: {
    width: 30,
    height: 3,
    borderRadius: 2,
    marginLeft: 15,
    backgroundColor: theme.colors.apple,
    marginTop: isIos ? 0 : -2,
  },

  image: {
    height: 64,
    width: 64,
  },
  title: {
    fontSize: theme.fonts.fontSize.large,
    paddingHorizontal: 15,
    fontFamily: theme.fonts.Poppins.Bold,
    color: theme.colors.navy_blue,
  },
  text: {
    textAlign: 'center',
    fontSize: theme.fonts.fontSize.small,
    fontFamily: theme.fonts.OpenSans.Regular,
    color: theme.colors.black,
  },
  row: {
    flexDirection: 'row',
  },
  scrollView: {
    backgroundColor: theme.colors.transparent,
    paddingVertical: 16,
  },
});
