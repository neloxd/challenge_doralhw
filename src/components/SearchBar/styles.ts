import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

export default CreateResponsiveStyle({
  inputText: {
    fontFamily: theme.fonts.OpenSans.Regular,
    fontSize: theme.fonts.fontSize.small,
    color: theme.colors.outer_space,
  },
  container: {
    borderBottomWidth: 1,
    borderWidth: 1,
    height: 40,
  },
  disableButton: {
    color: theme.colors.apple,
    fontFamily: theme.fonts.OpenSans.Regular,
    fontSize: theme.fonts.fontSize.small,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  clearIcon: {
    width: 16,
    height: 16,
  },
  resultsContainer: {
    shadowColor: theme.colors.iron,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4.0,
    padding: 16,
    borderWidth: 0.5,
    borderColor: theme.colors.iron,
    flexDirection: 'row',
    width: '100%',
  },
  textResult: {
    color: theme.colors.outer_space,
    fontFamily: theme.fonts.OpenSans.Regular,
    fontSize: theme.fonts.fontSize.small,
  },
  textSearch: {
    color: theme.colors.apple,
    fontFamily: theme.fonts.OpenSans.Regular,
    fontSize: theme.fonts.fontSize.small,
  },
  safeArea: {
    paddingTop: 20,
  },
  cardsContainer: {
    paddingHorizontal: 16,
    marginBottom: 80,
  },
});
