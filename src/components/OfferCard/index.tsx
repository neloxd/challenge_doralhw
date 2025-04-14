/**
 * @author Andy Francisco Olarte Cardona
 * @email andy.olarte@mredb.ee
 * @create date 2023-10-03 8:34:21
 * @desc Offers Card component
 */

import {Image, Pressable, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {Props} from '@app/types/components/OfferCard';
import useStyles from './styles';

const OfferCard = ({
  productImage,
  productImageBackgroundColor,
  campaignName,
  campaignTag,
  campaignDiscount,
  campaignDescription,
  campaignExpirationDate,
  campaignTextColor,
  campaignColorButton,
  onPress,
}: Props) => {

  const styles = useStyles();

  const handlePress = useCallback(() => {
    if (onPress) {
      onPress();
    }
  }, [onPress]);

  const colorTagTextStyles = {
    color: campaignTextColor
  };

  const colorTagBackgroundStyles = {
    backgroundColor: campaignColorButton
  };

  const colorImageBackgroundStyles = {
    backgroundColor: productImageBackgroundColor
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <View style={styles.imageContainer}>
    <Image
          style={[styles.imageBackground, colorImageBackgroundStyles]}
          source={{uri: productImage}} />
      </View>
      <View style={styles.infoContainer}>
        <View style={[styles.campaignTag, colorTagBackgroundStyles]}>
          <Text style={[styles.uppercarseTransform, styles.campaignTagText, colorTagTextStyles]}>
            {campaignTag}
          </Text>
        </View>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.uppercarseTransform, styles.campaignName]}>
          {campaignName}
        </Text>
        <View style={styles.discountContainer}>
          <View style={styles.discountValue}>
            <View>
              <Text
                style={[
                  styles.textWhite,
                  styles.uppercarseTransform,
                  styles.untilText,
                ]}>
                Hasta
              </Text>
              <Text style={[styles.textWhite, styles.campaignDiscount]}>
                {campaignDiscount}
              </Text>
            </View>
            <View>
              <Text style={[styles.textWhite, styles.percentage]}>%</Text>
              <Text style={[styles.textWhite, styles.dcto]}>DCTO</Text>
            </View>
          </View>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.discountDescription}>
            {campaignDescription}
          </Text>
        </View>
        <Text
          style={[
            styles.textWhite,
            styles.uppercarseTransform,
            styles.untilText,
          ]}>
          {campaignExpirationDate}
        </Text>
      </View>
    </Pressable>
  );
};

export default OfferCard;
