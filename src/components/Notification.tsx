import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert, { Color } from '@material-ui/lab/Alert';

interface NotificationProps {
  children: (callback: (text: string, type: Color) => void) => React.ReactElement;
}

export const Notification: React.FC<NotificationProps> = ({
  children,
}): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const [notificationText, setNotificationText] = useState<{
    text: string;
    type: Color;
  }>();

  const openNotification = (text: string, type: Color) => {
    setNotificationText({ text, type });
    setOpen(true);
  };

  return (
    <>
      {children(openNotification)}
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity={notificationText?.type}>
          {notificationText?.text}
        </Alert>
      </Snackbar>
    </>
  );
};
