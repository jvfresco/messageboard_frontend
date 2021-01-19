import React, { useState } from 'react';

import Input from '../../components/Form/Input/Input';
import Button from '../../components/Button/Button';
import { required, length, email } from '../../util/validators';
import Auth from './Auth';

const Login  = props => {
  const [state, setState] = useState({
    loginForm: {
      email: {
        value: '',
        valid: false,
        touched: false,
        validators: [required, email]
      },
      password: {
        value: '',
        valid: false,
        touched: false,
        validators: [required, length({ min: 5 })]
      },
      formIsValid: false
    }
  });

  const inputChangeHandler = (input, value) => {
    setState(prevState => {
      let isValid = true;
      for (const validator of prevState.loginForm[input].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState.loginForm,
        [input]: {
          ...prevState.loginForm[input],
          valid: isValid,
          value: value
        }
      };
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }
      return {
        loginForm: updatedForm,
        formIsValid: formIsValid
      };
    });
  };

  const inputBlurHandler = input => {
    setState(prevState => {
      return {
        loginForm: {
          ...prevState.loginForm,
          [input]: {
            ...prevState.loginForm[input],
            touched: true
          }
        }
      };
    });
  };

  
    return (
      <Auth>
        <form
          onSubmit={e =>
            props.onLogin(e, {
              email: state.loginForm.email.value,
              password: state.loginForm.password.value
            })
          }
        >
          <Input
            id="email"
            label="Your E-Mail"
            type="email"
            control="input"
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
            value={state.loginForm['email'].value}
            valid={state.loginForm['email'].valid}
            touched={state.loginForm['email'].touched}
            placeholder={"YOUR EMAIL"}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            control="input"
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
            value={state.loginForm['password'].value}
            valid={state.loginForm['password'].valid}
            touched={state.loginForm['password'].touched}
            placeholder={"PASSWORD"}
          />
          <Button design="raised" type="submit" loading={props.loading}>
            Login
          </Button>
        </form>
      </Auth>
    );
  
}

export default Login;
