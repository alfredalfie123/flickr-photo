import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { clearError } from 'redux/action/error.action';

interface Props {
  messages?: string[];
}

const ErrorBox = (props: Props) => {
  const { messages = [] } = props;
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(clearError());
  };

  return (
    <Dialog
      open
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{'Error'}</DialogTitle>
      {messages.map((mess) => (
        <DialogContent style={{ width: 400 }}>
          <DialogContentText id='alert-dialog-description'>
            {mess}
          </DialogContentText>
        </DialogContent>
      ))}
      <DialogActions>
        <Button onClick={handleClose} color='primary' autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorBox;
