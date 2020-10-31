import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface NotificationProps {
  children: React.ReactElement;
}

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
};

export const Notification: React.FC<NotificationProps> = ({
  children,
}): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const [notificationText, setNotificationText] = useState<string>();

  const openNotification = (text: string) => {
    setNotificationText(text);
    setOpen(true);
  };

  return (
    <>
      {React.cloneElement(children, { openNotification })}
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity='success'>
          {notificationText}
        </Alert>
      </Snackbar>
    </>
  );
};
