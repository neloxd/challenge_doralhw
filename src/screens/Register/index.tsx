import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Formik} from 'formik';

import Margin from '@app/components/Margin';
import CustomButton from '@app/components/CustomButton';
import CustomTextInput from '@app/components/CustomTextInput';
import CustomCheckBox from '@app/components/CustomCheckBox';
import TermsAndConditionsLabel from '@app/components/TermsAndConditions';

import {
  IRegister,
  REGISTER_VALIDATION_SCHEMA,
  FIELDS_FORM,
  Field,
} from './constants';
import useStyles from './styles';

const Register = () => {
  const styles = useStyles();
  const [isCheck, setIsCheck] = useState<boolean>(false);

  const initialValues: IRegister = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
  };

  const handleSubmit = (values: IRegister) => {
    //TODO: In this function you have to add the validation and redirection to the password creation view.
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Regístrate</Text>
        <Margin bottom={16} />
        <Formik
          initialValues={initialValues}
          validationSchema={REGISTER_VALIDATION_SCHEMA}
          onSubmit={handleSubmit}
          validateOnChange={true}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
            dirty,
          }) => (
            <>
              <ScrollView showsVerticalScrollIndicator={false}>
                {FIELDS_FORM.map((field: Field) => (
                  <CustomTextInput
                    key={field.label}
                    label={field.label}
                    value={values[field.valueKey]}
                    onChange={handleChange(field.valueKey)}
                    onBlur={handleBlur(field.valueKey)}
                    showError={
                      touched[field.valueKey] && !!errors[field.valueKey]
                    }
                    error={errors[field.valueKey]}
                    phoneEntry={field.phoneEntry}
                    valid={touched[field.valueKey] && !errors[field.valueKey]}
                    keyboardType={field.keyboardType}
                    style={styles.field}
                  />
                ))}
                <Margin bottom={14} />
                <CustomCheckBox
                  label={<TermsAndConditionsLabel />}
                  isCheck={isCheck}
                  setIsCheck={setIsCheck}
                />
                <Margin bottom={30} />
              </ScrollView>
              <CustomButton
                title="Continuar"
                primary
                onPress={handleSubmit}
                disabled={!dirty || !isValid || !isCheck}
              />
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default Register;
