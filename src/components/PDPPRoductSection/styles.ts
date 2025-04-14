import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

export default CreateResponsiveStyle({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageLeft: {
    width: 40,
    height: 40,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: theme.colors.feta,
  },
  imageRight: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  text: {
    fontSize: theme.fonts.fontSize.smallRegular,
    fontFamily: theme.fonts.OpenSans.Regular,
    color: theme.colors.outer_space,
    marginLeft: 0,
  },
  patherContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 58,
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: theme.colors.white,
  },
});
