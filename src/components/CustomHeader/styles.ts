import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

const btnBackSize = 32;

export default CreateResponsiveStyle({
  safeAreaContainer: {
    flexDirection: 'row',
    borderColor: theme.colors.feta,
    borderWidth: 0.5,
    elevation: 1,
    shadowColor: theme.colors.silver_sand,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    backgroundColor: theme.colors.white,
  },
  content: {
    width: '100%',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: {
    width: btnBackSize,
    height: btnBackSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fonts.Poppins.Bold,
    fontSize: theme.fonts.fontSize.regular,
    paddingLeft: 16,
  },
});
