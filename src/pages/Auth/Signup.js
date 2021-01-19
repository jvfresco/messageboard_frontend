import React, { useState } from 'react';

import Input from '../../components/Form/Input/Input';
import Button from '../../components/Button/Button';
import { required, length, email } from '../../util/validators';
import Auth from './Auth';

const Signup = (props) => {
  const [state, setState] = useState({
    signupForm: {
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
      name: {
        value: '',
        valid: false,
        touched: false,
        validators: [required]
      },
      formIsValid: false
    }
  });

  const inputChangeHandler = (input, value) => {
    setState(prevState => {
      let isValid = true;
      for (const validator of prevState.signupForm[input].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState.signupForm,
        [input]: {
          ...prevState.signupForm[input],
          valid: isValid,
          value: value
        }
      };
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }
      return {
        signupForm: updatedForm,
        formIsValid: formIsValid
      };
    });
  };

  const inputBlurHandler = input => {
    setState(prevState => {
      return {
        signupForm: {
          ...prevState.signupForm,
          [input]: {
            ...prevState.signupForm[input],
            touched: true
          }
        }
      };
    });
  };

  
    return (
      <Auth>
        <form onSubmit={e => props.onSignup(e, state)}>
          <Input
            id="email"
            label="Your E-Mail"
            type="email"
            control="input"
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
            value={state.signupForm['email'].value}
            valid={state.signupForm['email'].valid}
            touched={state.signupForm['email'].touched}
            placeholder={"YOUR EMAIL"}
          />
          <Input
            id="name"
            label="Your Name"
            type="text"
            control="input"
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
            value={state.signupForm['name'].value}
            valid={state.signupForm['name'].valid}
            touched={state.signupForm['name'].touched}
            placeholder={"YOUR NAME"}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            control="input"
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
            value={state.signupForm['password'].value}
            valid={state.signupForm['password'].valid}
            touched={state.signupForm['password'].touched}
            placeholder={"PASSWORD"}
          />
          <Button design="raised" type="submit" loading={props.loading}>
            Signup
          </Button>
        </form>
      </Auth>
    );
  
}

export default Signup;
