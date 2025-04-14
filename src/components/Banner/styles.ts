import {CreateResponsiveStyle} from 'rn-responsive-styles';

export default CreateResponsiveStyle({
  texture: {
    borderRadius: 15,
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: 'gray',
  },
  indicatorSelected: {
    width: 20,
    height: 6,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    width: '100%',
    marginBottom: 10,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
  },
  pageContainer: {
    height: 180,
    marginTop: 20,
  },
});
