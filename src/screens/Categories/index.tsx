import React, {useCallback, useEffect} from 'react';
import {FlatList, ListRenderItemInfo, SafeAreaView} from 'react-native';

import PDPProductSection from '@app/components/PDPPRoductSection/index';
import {useAppDispatch, useAppSelector} from '@app/redux/hooks';
import {fetchCategories} from '@app/redux/categories/categoriesSlice';
import {Routes} from '@app/navigation/types';
import {CategoryItem} from '@app/types/components/Category';
import {Navigation} from '@app/types/navigation';
import {ParamsNavigationSubCategory} from '@app/types/components/PDPProductSection';

import useStyles from './styles';

const Categories = ({navigation}: Navigation) => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const {categoriesList} = useAppSelector(state => state.categories);

  const handlePressCategory = useCallback(
    ({data: {categories}, headerTitle}: ParamsNavigationSubCategory) => {
      !!categories &&
        categories.length &&
        navigation.navigate(Routes.SUBCATEGORY, {
          categories,
          headerTitle,
        });
    },
    [navigation],
  );

  const renderItem = ({item}: ListRenderItemInfo<CategoryItem>) => (
    <PDPProductSection
      isCategory
      key={item.id}
      data={item}
      onPress={handlePressCategory}
    />
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList<CategoryItem>
        data={categoriesList}
        renderItem={renderItem}
        keyExtractor={item => `key-${item.id}`}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Categories;
