/**
 * @author Andy Francisco Olarte Cardona
 * @email andy.olarte@mredb.ee
 * @create date 2023-10-04 10:04:48
 */

import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';

import useStyles from './styles';

const ProductImages = ({images}: any) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.mainImageProduct}>
        <FastImage
          style={styles.mainImage}
          resizeMode="cover"
          source={{uri: images[0]?.image}}
        />
        <View style={styles.ribbonsGroupContainer}>
          {images.map((item: any) => (
            <View key={`ribbon-${item.id}`} style={styles.ribbon} />
          ))}
        </View>
      </View>
      <View style={styles.thumbnailImages}>
        {images.map((item: any) => (
          <View
            key={`thumbnail-image-${item.id}`}
            style={[
              styles.thumbnail,
              item.selected && styles.thumbnailSelected,
            ]}>
            <FastImage
              style={styles.imageThumbnail}
              resizeMode="cover"
              source={{uri: item.image}}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default ProductImages;
