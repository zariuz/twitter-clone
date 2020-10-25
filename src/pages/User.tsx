import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { BackButton } from '../components/BackButton';
import { useHomeStyles } from './theme';

export const UserPage = () => {
  const classes = useHomeStyles();

  return (
    <Paper className={classes.tweetsWrapper} variant='outlined'>
      <Paper className={classes.tweetsHeader} variant='outlined'>
        <BackButton />

        <div>
          <Typography variant='h6'>Nechetov Evgeniy</Typography>
          <Typography variant='caption' display='block' gutterBottom>
            108 твитов
          </Typography>
        </div>
      </Paper>
    </Paper>
  );
};
