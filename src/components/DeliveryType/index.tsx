import {View} from 'react-native';
import React from 'react';
import DeliveryIcon from '../DeliveryIcon';
import RecipeRequired from '@app/assets/icons/receta_requerida.svg';
import Recipe from '@app/assets/icons/receta_no_requerida.svg';
import PharmacyPickup from '@app/assets/icons/retiro_farmacia.svg';
import PharmacyPickupFalse from '@app/assets/icons/retiro_farmacia_false.svg';
import Delivery from '@app/assets/icons/despacho_domicilio.svg';
import DeliveryFalse from '@app/assets/icons/despacho_domicilio_false.svg';
import {DeliveryTypeProps} from '@app/types/components/DeliveryType';
import {SCREEN_WIDTH} from '@app/constants/platform';

import useStyles from './styles';

const DeliveryTypePDP = ({
  delivery = false,
  pickup = false,
  prescription = false,
}: DeliveryTypeProps) => {
  const styles = useStyles();
  return (
    <View style={[styles.container, {width: SCREEN_WIDTH}]}>
      <DeliveryIcon
        icon={delivery ? <Delivery /> : <DeliveryFalse />}
        text="Despacho a Domicilio"
      />
      <DeliveryIcon
        icon={pickup ? <PharmacyPickup /> : <PharmacyPickupFalse />}
        text="Retiro en Farmacia"
      />
      <DeliveryIcon
        icon={prescription ? <RecipeRequired /> : <Recipe />}
        text={prescription ? 'Receta Requerida' : 'Sin Receta'}
      />
    </View>
  );
};

export default DeliveryTypePDP;
