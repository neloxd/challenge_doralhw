import React, {useCallback, useEffect, useState} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {Animated, View, ImageSourcePropType} from 'react-native';

import themes from '@app/theme/theme';
import {SCREEN_WIDTH} from '@app/constants/platform';
import useContentful from '@app/context/useContentful';
import {ContentfulResponse} from '@app/types/contenful';

import BannerPage from './page';
import useStyles from './styles';

export const AnimatedCarouselIndicator = ({
  selection,
  index,
}: {
  selection: number | null;
  index: number;
}) => {
  const styles = useStyles();
  const [width] = useState(new Animated.Value(10));
  const [animation] = useState(new Animated.Value(0));
  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [themes.colors.iron, themes.colors.apple],
  });

  const duration = 200;

  const startAnimation = () => {
    Animated.timing(width, {
      toValue: 20,
      duration,
      useNativeDriver: false,
    }).start();
    Animated.timing(animation, {
      toValue: 1,
      duration,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (selection === index) {
      startAnimation();
    } else {
      Animated.timing(width, {
        toValue: 6,
        duration,
        useNativeDriver: false,
      }).start();
      Animated.timing(animation, {
        toValue: 0,
        duration,
        useNativeDriver: false,
      }).start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection, index]);

  return (
    <Animated.View
      style={{...styles.indicatorSelected, width, backgroundColor}}
    />
  );
};

export const HomeCarousel = () => {
  const styles = useStyles();
  const [selection, setSelection] = useState<number | null>(0);

  const getData = async () => {
    try {
      const entries = await contentfulClient.getEntry<ContentfulResponse>(
        '52sYkheOHH8NvLLXgbmW2b',
      );
      const sanitizedEntries = (entries.fields.blocks as any[]).map(item => {
        return item.fields.image.fields.file.url;
      });
      return sanitizedEntries;
    } catch (err) {
      console.error(`Error fetching getData: ${err}`);
    }
  };

  const {contentfulClient} = useContentful();

  const [imgData, setImgData] = useState<ImageSourcePropType[]>([]);

  useEffect(() => {
    getData().then(response => {
      if (Array.isArray(response)) {
        const imageSources = response.map(uri => ({
          uri: `https:${uri}`,
        }));
        setImgData(imageSources);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSnap = (index: any) => {
    setSelection(index);
  };

  const handleRender = useCallback(
    ({item}: any) => (
      <View style={styles.pageContainer}>
        <BannerPage image={item} />
      </View>
    ),
    [],
  );

  return (
    <View
      style={{
        width: SCREEN_WIDTH,
      }}>
      <Carousel
        loop={false}
        onProgressChange={(_, absoluteProgress) => {
          handleSnap(Math.round(absoluteProgress));
        }}
        width={SCREEN_WIDTH}
        height={200}
        data={imgData}
        renderItem={handleRender}
      />
      <View style={[styles.container]}>
        <View style={styles.content}>
          {imgData.map((_, index) => (
            <AnimatedCarouselIndicator
              key={`indicator-home-${index}`}
              selection={selection}
              index={index}
            />
          ))}
        </View>
      </View>
    </View>
  );
};
