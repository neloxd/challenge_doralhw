import React from 'react';
import {View, Text} from 'react-native';
import AddressArrow from '@app/assets/icons/AddressArrow.svg';

import useStyles from './styles';

function AddressHeaderComponent() {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.adressTextTop}>Recibe en...</Text>
      <View style={styles.rowContainer}>
        <Text style={styles.adressTextBottom}>Agregar dirección</Text>
        <AddressArrow />
      </View>
    </View>
  );
}

export default AddressHeaderComponent;
