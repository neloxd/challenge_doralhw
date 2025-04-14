import {CreateResponsiveStyle} from 'rn-responsive-styles';
import theme from '@app/theme/theme';

export default CreateResponsiveStyle({
  container: {
    flex: 1,
    padding: 20,
  },
  containerList: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  card: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  viewedCard: {
    backgroundColor: '#e0e0e0',
  },
  thumbnail: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
    fontSize: 16,
  },
  separator: {
    margin: 16,
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
},
});
