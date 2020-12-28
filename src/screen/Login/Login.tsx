import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormControl, FormHelperText } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { LoginReq } from 'shared/type/user.type';
import { login } from 'redux/action/user.action';
import { useHistory } from 'react-router-dom';
import { userMockup } from 'shared/constant/user.constant';
import { setError } from 'redux/action/error.action';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Must be least 8 characters')
    .required('Required'),
});

type FieldType = {
  name: keyof LoginReq;
  field: TextFieldProps;
};

const fields: FieldType[] = [
  {
    name: 'email',
    field: {
      id: 'email',
      label: 'Email Address',
      name: 'email',
      autoComplete: 'email',
      autoFocus: true,
      type: 'email',
    },
  },
  {
    name: 'password',
    field: {
      id: 'password',
      label: 'Password',
      name: 'password',
      autoComplete: 'current-password',
      type: 'password',
    },
  },
];

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik<LoginReq>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      if (
        values.email === userMockup.email &&
        values.password === userMockup.password
      ) {
        dispatch(login(values));
        history.replace('/');
      } else {
        dispatch(setError(['User does not exist!']));
      }
    },
  });

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={formik.handleSubmit}
        >
          {fields.map(({ field, name }) => (
            <FormControl key={`form-${name}`} fullWidth>
              <TextField
                {...field}
                variant='outlined'
                margin='normal'
                fullWidth
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
                error={formik.touched[name] && Boolean(formik.errors[name])}
              />
              {formik.touched[name] && formik.errors[name] ? (
                <FormHelperText id='component-error-text'>
                  {formik.errors[name]}
                </FormHelperText>
              ) : null}
            </FormControl>
          ))}
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
        <Typography variant='caption'>
          test@gmail.com - 12345678
        </Typography>
      </div>
    </Container>
  );
}
