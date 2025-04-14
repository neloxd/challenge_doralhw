import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

export default CreateResponsiveStyle({
  tabsContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  rootStatusActive: {
    backgroundColor: theme.colors.white_lilac,
  },
  label: {
    alignSelf: 'stretch',
    color: theme.colors.rolling_stone,
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontSize: '8rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '10rem /* 125% */',
    textTransform: 'uppercase',
  },
  labelStatusActive: {
    color: 'unset',
    backgroundColor: theme.colors.navy_blue,
    backgroundClip: 'text',
    webkitBackgroundClip: 'text',
    webkitTextFillColor: 'transparent',
  },
});
