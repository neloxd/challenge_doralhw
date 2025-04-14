import * as contentful from 'contentful';
export type ContentfulResponse = {
  contentTypeId: string;
  fields: {
    blocks: {
      fields: {
        image: contentful.Asset;
        name: string;
        targetId: string;
        targetType: string;
        type: string;
      };
    }[];
  };
};
