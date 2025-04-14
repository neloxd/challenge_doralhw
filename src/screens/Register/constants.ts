import {KeyboardTypeOptions} from 'react-native';
import * as Yup from 'yup';

export interface IRegister {
  name: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface Field {
  label: string;
  valueKey: keyof IRegister;
  keyboardType: KeyboardTypeOptions;
  phoneEntry?: boolean;
}

const createField = (
  label: string,
  valueKey: keyof IRegister,
  keyboardType: KeyboardTypeOptions,
  phoneEntry?: boolean,
) => {
  return {
    label,
    valueKey,
    keyboardType,
    phoneEntry,
  };
};

export const FIELDS_FORM: Field[] = [
  createField('Nombres', 'name', 'default'),
  createField('Apellidos', 'lastName', 'default'),
  createField('Email', 'email', 'email-address'),
  createField('Telefono', 'phone', 'phone-pad', true),
];

const getDefaultRequiredError = (field: string): string =>
  `El campo ${field} es obligatorio`;

const getSizeNameError = (
  prefix: string,
  type: 'short' | 'long',
): {message: string} => {
  const errorsDefault = {
    long: 'ingresados son muy extensos',
    short: 'ingresado es demasiado corto',
  };
  return {
    message: `${prefix} ${errorsDefault[type]}`,
  };
};

const createNameValidation = (fieldName: string, fieldLabel: string) =>
  Yup.string()
    .required(getDefaultRequiredError(fieldLabel))
    .test({
      name: `validate-${fieldName}`,
      skipAbsent: true,
      test(value, ctx) {
        const namesSplited = value.split(' ');
        if (namesSplited.length > 3 || value.length > 25)
          return ctx.createError(getSizeNameError(`Los ${fieldName}`, 'long'));

        if (value.length < 3)
          return ctx.createError(getSizeNameError(`El ${fieldName}`, 'short'));

        return true;
      },
    });

export const REGISTER_VALIDATION_SCHEMA = Yup.object().shape({
  name: createNameValidation('name', 'Nombres'),
  lastName: createNameValidation('lastName', 'Apellidos'),
  email: Yup.string()
    .required(getDefaultRequiredError('Email'))
    .email('El email ingresado no es válido'),
  phone: Yup.string()
    .required(getDefaultRequiredError('Teléfono'))
    .matches(/^[0-9]{10}$/, 'El teléfono ingresado no es válido'),
});
