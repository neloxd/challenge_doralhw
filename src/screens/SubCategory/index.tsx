import React, {useLayoutEffect, useCallback} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {SafeAreaView, FlatList, ListRenderItemInfo} from 'react-native';
import PDPProductSection from '@app/components/PDPPRoductSection';
import {Routes} from '@app/navigation/types';
import {RootStackParams} from '@app/navigation/RootStackParams';
import {CategoryItem} from '@app/types/components/Category';

import useStyles from './styles';

interface SubCategoryProps
  extends StackScreenProps<RootStackParams, Routes.SUBCATEGORY> {}

const SubCategory = ({route, navigation}: SubCategoryProps) => {
  const styles = useStyles();
  const {categories, headerTitle} = route.params;

  const handlePress = useCallback(
    ({data: {id: cgid}, headerTitle}: any) => {
      !!cgid &&
        navigation.navigate(Routes.PRODUCTS, {
          cgid,
          headerTitle,
        });
    },
    [navigation],
  );

  const renderItem = ({item}: ListRenderItemInfo<CategoryItem>) => (
    <PDPProductSection data={item} key={item.id} onPress={handlePress} />
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle,
    });
  }, [navigation, headerTitle]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList<CategoryItem>
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => `key-${item.id}`}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default SubCategory;
