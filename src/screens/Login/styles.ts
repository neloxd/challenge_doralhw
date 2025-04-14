import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

export default CreateResponsiveStyle({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  containerContet: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    marginBottom: 64,
  },
  containerButton: {
    gap: 16,
    width: '100%',
    padding: 16,
  },
  btnLinkContainer: {
    paddingVertical: 38,
  },
  btnLinkText: {
    color: theme.colors.apple,
  },
});
