import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { ModalBlock } from '../../../components/ModalBlock';
import { useStylesSignIn } from '..';
import { Notification } from '../../../components/Notification';
import { Color } from '@material-ui/lab/Alert';
import { fetchSignIn } from '../../../store/ducks/user/actionCreators';
import { selectUserStatus } from '../../../store/ducks/user/selectors';
import { LoadingStatus } from '../../../store/types';

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
  const dispatch = useDispatch();
  const loadingStatus = useSelector(selectUserStatus);

  const { control, handleSubmit, errors } = useForm<LoginFormProps>({
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (
    openNotification: (text: string, type: Color) => void,
    data: LoginFormProps,
  ) => {
    try {
      dispatch(fetchSignIn(data));
      openNotification('Авторизация прошла успешна!', 'success');
    } catch (error) {
      openNotification('Неверный логин или пароль!', 'error');
    }
  };

  useEffect(() => {
    if (loadingStatus === LoadingStatus.SUCCESS) {
      openNotification('Авторизация прошла успешна!', 'success');
      onClose();
    } else if (loadingStatus === LoadingStatus.ERROR) {
      openNotification('Неверный логин или пароль!', 'error');
    }
  }, [loadingStatus]);

  return (
    <Notification>
      {(openNotification) => (
        <ModalBlock
          visible={open}
          onClose={onClose}
          classes={classes}
          title="Войти в аккаунт">
          <form onSubmit={handleSubmit(onSubmit.bind(null, openNotification))}>
            <FormControl
              className={classes.loginFormControl}
              component="fieldset"
              fullWidth>
              <FormGroup aria-label="position" row>
                <Controller
                  as={TextField}
                  control={control}
                  name="email"
                  className={classes.loginSideField}
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  defaultValue=""
                  helperText={errors.email?.message}
                  error={!!errors.email}
                  autoFocus
                  fullWidth
                />

                <Controller
                  as={TextField}
                  control={control}
                  name="password"
                  className={classes.loginSideField}
                  id="password"
                  label="Пароль"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  defaultValue=""
                  helperText={errors.password?.message}
                  error={!!errors.password}
                  autoFocus
                  fullWidth
                />

                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Войти
                </Button>
              </FormGroup>
            </FormControl>
          </form>
        </ModalBlock>
      )}
    </Notification>
  );
};
