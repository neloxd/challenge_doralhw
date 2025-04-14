import {View, Text} from 'react-native';
import React from 'react';
import {BlankStateProps} from '@app/types/components/BlankStateView';
import Margin from '@app/components/Margin';

import useStyles from './styles';

const BlankStateView = (props: BlankStateProps) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      {props.icon}
      <Margin bottom={10} />
      <Text style={styles.title}>{props.title}</Text>
      <Margin bottom={20} />
      <Text style={styles.description}>{props.description}</Text>
    </View>
  );
};

export default BlankStateView;
