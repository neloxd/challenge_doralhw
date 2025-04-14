import {createClient} from 'contentful';
import Config from 'react-native-config';

const useContentful = () => {
  const contentfulClient = createClient({
    space: Config.CONTENTFUL_SPACE_ID!,
    accessToken: Config.CONTENTFUL_PREVIEW_API_ACCESS_TOKEN!,
    host: Config.CONTENTFUL_HOST,
    environment: Config.CONTENTFUL_ENVIRONTMENT,
  });

  return {contentfulClient};
};

export default useContentful;
