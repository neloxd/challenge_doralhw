import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

export default CreateResponsiveStyle({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    minHeight: 30,
    paddingVertical: 5,
    position: 'relative',
    width: '100%',
  },
  title: {
    color: theme.colors.navy_blue,
    fontSize: theme.fonts.fontSize.large,
    fontFamily: theme.fonts.Poppins.Bold,
  },
  lineDecorator: {
    backgroundColor: theme.colors.apple,
    borderRadius: 15,
    bottom: 0,
    height: 2,
    left: 0,
    position: 'absolute',
    width: 30,
  },
  arrowRight: {
    height: 28,
    width: 28,
  },
});
