import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import { ModalBlock } from '../../../components/ModalBlock';
import { useStylesSignIn } from '..';
import { AuthApi } from '../../../services/api/authApi';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export interface LoginFormProps {
  email: string;
  password: string;
}

const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Неверный E-Mail').required('Введите E-Mail'),
  password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),
});

export const LoginModal: React.FC<LoginModalProps> = ({
  open,
  onClose,
}): React.ReactElement => {
  const classes = useStylesSignIn();
  const { control, handleSubmit, errors } = useForm<LoginFormProps>({
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (data: LoginFormProps) => {
    try {
      const userData = await AuthApi.signIn(data);
    } catch (error) {}
  };

  return (
    <ModalBlock
      visible={open}
      onClose={onClose}
      classes={classes}
      title='Войти в аккаунт'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl className={classes.loginFormControl} component='fieldset' fullWidth>
          <FormGroup aria-label='position' row>
            <Controller
              as={TextField}
              control={control}
              name='email'
              className={classes.loginSideField}
              id='email'
              label='E-Mail'
              InputLabelProps={{
                shrink: true,
              }}
              variant='filled'
              type='email'
              defaultValue=''
              helperText={errors.email?.message}
              error={!!errors.email}
              autoFocus
              fullWidth
            />

            <Controller
              as={TextField}
              control={control}
              name='password'
              className={classes.loginSideField}
              id='password'
              label='Пароль'
              InputLabelProps={{
                shrink: true,
              }}
              variant='filled'
              type='password'
              defaultValue=''
              helperText={errors.password?.message}
              error={!!errors.password}
              autoFocus
              fullWidth
            />

            <Button type='submit' variant='contained' color='primary' fullWidth>
              Войти
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </ModalBlock>
  );
};
