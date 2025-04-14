import React, {memo, useCallback} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';

import ArrowLeft from '@app/assets/icons/navigation.svg';

import useStyles from './styles';

const CustomHeader = ({navigation, options}: any) => {
  const styles = useStyles();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.content}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backBtn}>
          <ArrowLeft />
        </TouchableOpacity>
        <Text style={styles.title}>{options.headerTitle}</Text>
      </View>
    </SafeAreaView>
  );
};

export default memo(CustomHeader);
