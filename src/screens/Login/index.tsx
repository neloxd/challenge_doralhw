import React, {useCallback} from 'react';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';

import YzaLogo from '@app/assets/images/logo_yza.svg';
import CustomButton from '@app/components/CustomButton';
import {useAppDispatch} from '@app/redux/hooks';
import {setCurrentUser} from '@app/redux/user/userSlice';
import {Navigation} from '@app/types/navigation';
import {Routes} from '@app/navigation/types';

import useStyles from './styles';

const Login = ({navigation}: Navigation) => {
  const styles = useStyles();
  const dispatch = useAppDispatch();

  const handleMockLogin = useCallback(
    () =>
      dispatch(
        setCurrentUser({
          email: 'email@test.com',
          name: 'test',
        }),
      ),
    [dispatch, setCurrentUser],
  );

  const handlePressBtn = useCallback(() => ({}), []);

  const handleGoToRegister = useCallback(
    () => navigation.navigate(Routes.REGISTER),
    [navigation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerContet}>
        <View style={styles.containerLogo}>
          <YzaLogo />
        </View>
        <View style={styles.containerButton}>
          <CustomButton
            primary
            onPress={handlePressBtn}
            title="Ingresa con Email"
          />
          <CustomButton
            secondary
            onPress={handleGoToRegister}
            title="Regístrate"
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={handleMockLogin}
        style={[styles.btnLinkContainer]}>
        <Text style={styles.btnLinkText}>Ingresar Como Invitado</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
