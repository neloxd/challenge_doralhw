import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import useStyles from './styles';

const TermsAndConditionsLabel = () => {
  const styles = useStyles();
  return (
    <View>
      <View style={styles.viewText}>
        <Text style={styles.normalText}>Acepto los </Text>
        <TouchableOpacity>
          <Text style={styles.expoText}>Términos y Condiciones </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewText}>
        <Text style={styles.normalText}>y las </Text>
        <TouchableOpacity>
          <Text style={styles.expoText}>Politicas de Privacidad</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TermsAndConditionsLabel;
