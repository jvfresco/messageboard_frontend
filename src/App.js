import React, { Component, Fragment, useReducer, useEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Backdrop from './components/Backdrop/Backdrop';
import Toolbar from './components/Toolbar/Toolbar';
import MainNavigation from './components/Navigation/MainNavigation/MainNavigation';
import MobileNavigation from './components/Navigation/MobileNavigation/MobileNavigation';
import ErrorHandler from './components/ErrorHandler/ErrorHandler';
import FeedPage from './pages/Feed/Feed';
import SinglePostPage from './pages/Feed/SinglePost/SinglePost';
import LoginPage from './pages/Auth/Login';
import SignupPage from './pages/Auth/Signup';
import './App.css';
import auth from './pages/Auth/Auth';

const reducer = (state, action) => {
  switch (action.type){
    case 'AUTH_USER': 
    return {...state, isAuth: true, token: action.token, userId: action.userId}
    case 'MOBILE_NAV_HANDLE':
      return {...state, showMobileNav: action.isOpen, showBackdrop: action.isOpen}
    case 'BACKDROP_CLOSE':
      return {...state, showMobileNav: false, showBackdrop: false, error: null}
    case 'LOGOUT_HANDLER':
      return {...state, isAuth: false, token: null}
    case 'AUTH_LOADING':
      return {...state, authLoading: true}
    case 'LOGIN_SUCCESS':
      return {...state, isAuth: true, token: action.token, authLoading: false, userId: action.userId}
    case 'LOGIN_ERROR':
      return {...state, isAuth: false, authLoading: false, error: action.err}
    case 'SIGNUP_SUCCESS':
      return {...state, isAuth: false, authLoading: false}
    case 'SIGNUP_ERROR':
      return {...state, isAuth: false, authLoading: false, error: action.err}
    case 'ERROR':
      return {...state, error: null}
    default:
      return null
  }
}

const App = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    showBackdrop: false,
    showMobileNav: false,
    isAuth: false,
    token: null,
    userId: null,
    authLoading: false,
    error: null,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      logoutHandler();
      return;
    }
    const userId = localStorage.getItem("userId");
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    dispatch({type: 'AUTH_USER', token, userId})
    setAutoLogout(remainingMilliseconds);
  },[])

  const mobileNavHandler = (isOpen) => {
    dispatch({type: 'MOBILE_NAV_HANDLE', isOpen})
  };

  const backdropClickHandler = () => {
    dispatch({type:'BACKDROP_CLOSE'})
  };

  const logoutHandler = () => {
    dispatch({type: 'LOGOUT_HANDLER'})
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");
  };

  const loginHandler = async (event, authData) => {
    event.preventDefault();
    dispatch({type:'AUTH_LOADING'})
    try {
      const res = await fetch("https://jvfresco-messageboard.herokuapp.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: authData.email,
          password: authData.password,
        }),
      });
      if (res.status === 422) {
        throw new Error("Validation failed.");
      }
      if (res.status !== 200 && res.status !== 201) {
        console.log("Error!");
        throw new Error("Could not authenticate you!");
      }
      const resData = await res.json();
      dispatch({type:'LOGIN_SUCCESS', token: resData.token,userId: resData.userId,})
      localStorage.setItem("token", resData.token);
      localStorage.setItem("userId", resData.userId);
      const remainingMilliseconds = 60 * 60 * 1000;
      const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
      localStorage.setItem("expiryDate", expiryDate.toISOString());
      setAutoLogout(remainingMilliseconds);
    } catch (err) {
      console.log(err);
      dispatch({type:'LOGIN_ERROR', err})
    }
  };

  const signupHandler = async (event, authData) => {
    event.preventDefault();
    dispatch({type:'AUTH_LOADING'})
    try {
      const res = await fetch("https://jvfresco-messageboard.herokuapp.com/auth/signup", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: authData.signupForm.email.value,
          password: authData.signupForm.password.value,
          name: authData.signupForm.name.value,
        }),
      });
      if (res.status === 422) {
        throw new Error(
          "Validation failed. Make sure the email address isn't used yet!"
        );
      }
      if (res.status !== 200 && res.status !== 201) {
        console.log("Error!");
        throw new Error("Creating a user failed!");
      }
      const resData = await res.json();
      dispatch({type:'SIGNUP_SUCCESS'})
      props.history.replace("/");
    } catch (err) {
      console.log(err);
      dispatch({type:'SIGNUP_ERROR', err})
    }
  };

  const setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      logoutHandler();
    }, milliseconds);
  };

  const errorHandler = () => {
    dispatch({type:'ERROR'})
  };


    let routes = (
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <LoginPage
              {...props}
              onLogin={loginHandler}
              loading={state.authLoading}
            />
          )}
        />
        <Route
          path="/signup"
          exact
          render={(props) => (
            <SignupPage
              {...props}
              onSignup={signupHandler}
              loading={state.authLoading}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
    if (state.isAuth) {
      routes = (
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <FeedPage userId={state.userId} token={state.token} />
            )}
          />
          <Route
            path="/:postId"
            render={(props) => (
              <SinglePostPage
                {...props}
                userId={state.userId}
                token={state.token}
              />
            )}
          />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <Fragment>
        {state.showBackdrop && (
          <Backdrop onClick={backdropClickHandler} />
        )}
        <ErrorHandler error={state.error} onHandle={errorHandler} />
        <Layout
          header={
            <Toolbar>
              <MainNavigation
                onOpenMobileNav={mobileNavHandler}
                onLogout={logoutHandler}
                isAuth={state.isAuth}
              />
            </Toolbar>
          }
          mobileNav={
            <MobileNavigation
              open={state.showMobileNav}
              mobile
              onChooseItem={mobileNavHandler}
              onLogout={logoutHandler}
              isAuth={state.isAuth}
            />
          }
        />
        {routes}
      </Fragment>
    );
  
}

export default withRouter(App);
