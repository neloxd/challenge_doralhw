import React, {useEffect, useRef, useState} from 'react';
import {View, TextInput, Modal} from 'react-native';
import theme from '@app/theme/theme';
import SearchIcon from '@app/assets/icons/SearchIcon.svg';
import SearchView from '@app/components/SearchBar';

import useStyles from './styles';

function SearchBarComponent() {
  const styles = useStyles();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const searchRef = useRef<TextInput | null>(null);

  useEffect(() => {
    if (!isModalVisible) {
      searchRef.current?.blur();
    }
  }, [isModalVisible]);

  const handleOnPress = () => {
    setIsModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.shadowEffect}>
        <View style={styles.searchBar}>
          <SearchIcon />
          <TextInput
            ref={searchRef}
            style={styles.searchBarInput}
            placeholder="Buscar en Yza"
            placeholderTextColor={theme.colors.rolling_stone}
            onPressIn={handleOnPress}
          />
        </View>
      </View>
      <Modal visible={isModalVisible}>
        <SearchView setIsModalVisible={setIsModalVisible} />
      </Modal>
    </View>
  );
}

export default SearchBarComponent;
