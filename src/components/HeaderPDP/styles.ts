import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

export default CreateResponsiveStyle({
  container: {
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    height: 60,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  title: {
    width: '70%',
    fontSize: theme.fonts.fontSize.regular,
    paddingHorizontal: 15,
    fontFamily: theme.fonts.Poppins.Bold,
    color: theme.colors.black,
  },
  text: {
    textAlign: 'center',
    fontSize: theme.fonts.fontSize.small,
    fontFamily: theme.fonts.OpenSans.Regular,
    color: theme.colors.black,
  },
});
