import {CreateResponsiveStyle} from 'rn-responsive-styles';
import {isIos} from '@app/constants/platform';

export default CreateResponsiveStyle({
  container: {
    flexDirection: 'row',
    alignContent: 'space-between',
    padding: 16,
    paddingTop: isIos ? 0 : 16,
  },
  spacer: {
    flex: 1,
  },
});
