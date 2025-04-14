import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import useStyles from './styles';

interface LanguageSelectorProps {
    languageSelected?: string;
    onSelectLanguage: (language: string) => void;
  }

export const LanguageSelector = ( props:LanguageSelectorProps) => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
        <Text style={styles.label}>Select Language:</Text>
        <Picker
            selectedValue={props.languageSelected}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => props.onSelectLanguage(itemValue)}>
            <Picker.Item label="Arabic" value="ar" />
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Spanish" value="es" />
        </Picker>

        <Text style={styles.label}>Selected Language: {props.languageSelected && props.languageSelected}</Text>
    </View>
  );
};