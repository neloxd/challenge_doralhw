import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

export default CreateResponsiveStyle({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    width: '100%',
    paddingVertical: 16,
  },
  mainImage: {
    backgroundColor: theme.colors.iron,
    height: '80%',
    width: '60%',
  },
  mainImageProduct: {
    alignItems: 'center',
    height: 261,
    justifyContent: 'center',
    marginBottom: 16,
    position: 'relative',
    width: '100%',
  },
  ribbon: {
    backgroundColor: theme.colors.iron,
    height: 40,
    width: 40,
  },
  ribbonsGroupContainer: {
    gap: 4,
    position: 'absolute',
    right: 18,
    top: 18,
    width: 40,
  },
  thumbnailImages: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    width: '100%',
  },
  thumbnail: {
    width: 42,
    height: 42,
    backgroundColor: theme.colors.iron,
  },
  imageThumbnail: {
    width: 40,
    height: 40,
  },
  thumbnailSelected: {
    borderWidth: 1,
    borderColor: theme.colors.apple,
  },
});
