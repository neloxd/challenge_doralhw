/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @author Andy Francisco Olarte Cardona
 * @email andy.olarte@mredb.ee
 * @create date 2023-10-03 8:40:58
 * @desc Offers Section with list
 */

import React, {useCallback, useEffect, useState} from 'react';
import { FlatList, View } from 'react-native';
import TitleSection from '@app/components/TitleSection';
import OfferCard from '@app/components/OfferCard';
import useContentful from '@app/context/useContentful';
import * as contentful from 'contentful'


import useStyles from './styles';

const OffersSection = () => {

  //#region invoke contentfull section
  const {contentfulClient} = useContentful();
  const [titleSource, setTitleSource] = useState<string>("");
  const [campaign, setCampaign] = useState<any[]>([]);

  
  type ContentfulResponse = {
    contentTypeId: string;
    name: contentful.EntryFieldTypes.Text;
    fields: {
      name: contentful.EntryFieldTypes.Text,
      blocks: {
        fields: {
          image: contentful.Asset;
          name: contentful.EntryFieldTypes.Text;
          targetId: contentful.EntryFieldTypes.Text;
          targetType: contentful.EntryFieldTypes.Text;
          type: contentful.EntryFieldTypes.Text;
          description: contentful.EntryFieldTypes.Text;
          backgroundColor: contentful.EntryFieldTypes.Text;
          campaignText: contentful.EntryFieldTypes.Text;
          campaignTextColor: contentful.EntryFieldTypes.Text;
          campaignColorButton: contentful.EntryFieldTypes.Text;
          campaignName: contentful.EntryFieldTypes.Text;
          campaignDescription: contentful.EntryFieldTypes.Text;
          campaignDiscount: contentful.EntryFieldTypes.Text;
          campaignTag: contentful.EntryFieldTypes.Text;
          campaignExpirationDate: contentful.EntryFieldTypes.Text;
          campaignBackgroundColor: contentful.EntryFieldTypes.Text;
        };
      }[];
    };
  };

  const getData = async () => {
    try {
      return await contentfulClient.getEntry<ContentfulResponse>("38e15pfRy8TIo1a4qo20fM");
    } catch (err) {
      console.log(`Error fetching getData: ${err}`);
    }
  };

  useEffect(() => {
    getData().then(response => {
      setTitleSource(response!.fields.name);

      const newArr: any[] = [];
      (response!.fields.blocks as any[]).map(item => {

        const url =  item.fields.image.fields.file.url;
        const campaignBackgroundColor: string = item.fields.backgroundColor;
        const campaignName: string = item.fields.campaignName;
        const campaignDate: string = item.fields.campaignDate;
        const campaignDescription: string = item.fields.campaignDescription;
        const campaignDiscount: number = item.fields.campaignDiscount;
        const campaignText: string = item.fields.campaignText;
        const campaignTextColor: string = item.fields.campaignTextColor;
        const campaignColorButton: string = item.fields.campaignColorButton;

        const obj = {
          productImage: `https://${url}`,
          productImageBackgroundColor: campaignBackgroundColor,
          campaignName: campaignName,
          campaignTag: campaignText,
          campaignDiscount: campaignDiscount,
          campaignDescription: campaignDescription,
          campaignExpirationDate: campaignDate,
          campaignTextColor: campaignTextColor,
          campaignColorButton: campaignColorButton,
        }

        newArr.push(obj);
      });

      setCampaign(newArr);
      return newArr;
    });
  }, []);

  //#endregion

  const styles = useStyles();

  const renderItem = ({item}: any) => (
    <OfferCard
      productImage={item.productImage}
      productImageBackgroundColor={item.productImageBackgroundColor}
      campaignName={item.campaignName}
      campaignTag={item.campaignTag}
      campaignDiscount={item.campaignDiscount}
      campaignDescription={item.campaignDescription}
      campaignExpirationDate={item.campaignExpirationDate}
      campaignTextColor={item.campaignTextColor}
      campaignColorButton={item.campaignColorButton}
    />
  );

  const ItemSeparator = useCallback(() => {
    return <View style={styles.separator} />;
  }, []);

  return (
    <View style={styles.container}>
      <TitleSection title={titleSource} hasArrow />
      <FlatList
        data={campaign}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => `key-${item.campaignTag}-${item.campaignName}`}
        ItemSeparatorComponent={ItemSeparator}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default OffersSection;