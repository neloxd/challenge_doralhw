import React from 'react';
import {View, Pressable, Text} from 'react-native';
import {SvgProps} from 'react-native-svg';

import useStyles from './styles';

type TabBarItemProps = {
  sourceType: React.FC<SvgProps>;
  title: string;
  isSelected: boolean;
  onPress: () => void;
};

const TabBarItem = ({
  sourceType,
  title,
  isSelected,
  onPress,
}: TabBarItemProps) => {
  const styles = useStyles();
  return (
    <Pressable
      style={isSelected ? styles.container : styles.containerStatusActive}
      onPress={onPress}>
      <ImagePressable svg={sourceType} />
      <Text style={isSelected ? styles.labelStatusActive : styles.label}>
        {title}
      </Text>
    </Pressable>
  );
};

export default TabBarItem;

const ImagePressable = (props: any) => {
  return <View>{props.svg ? <props.svg /> : null}</View>;
};
