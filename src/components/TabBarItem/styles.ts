import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

export default CreateResponsiveStyle({
  container: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
    paddingVertical: 16,
    justifyContent: 'center',
    gap: 4,
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: theme.colors.white_lilac,
  },
  containerStatusActive: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    justifyContent: 'center',
    gap: 4,
    flexShrink: 0,
    borderRadius: 8,
  },
  selected: {
    fontWeight: '700',
    color: 'unset',
    webkitBackgroundClip: 'text',
    webkitTextFillColor: 'transparent',
  },
  root: {
    width: 58,
    height: 46,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    flexShrink: 0,
    borderRadius: 8,
  },
  rootStatusActive: {
    height: 50,
    backgroundColor: theme.colors.white_lilac,
  },
  label: {
    alignSelf: 'stretch',
    color: theme.colors.rolling_stone,
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontSize: 8,
    fontStyle: 'normal',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  labelStatusActive: {
    color: theme.colors.navy_blue,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
