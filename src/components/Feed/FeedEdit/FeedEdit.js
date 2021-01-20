import React, { Fragment, useEffect, useReducer, useRef } from 'react';

import Backdrop from '../../Backdrop/Backdrop';
import Modal from '../../Modal/Modal';
import Input from '../../Form/Input/Input';
import FilePicker from '../../Form/Input/FilePicker';
import { required, length } from '../../../util/validators';


function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const reducer = (state, action) => {
  switch (action.type){
    case 'POST_SELECTION':
      return {...state, postForm: action.postForm, formIsValid: true}
    case 'INPUT_CHANGE': 
      return {...state, postForm: action.updatedForm, formIsValid: action.formValid}
    case 'INPUT_ONBLUR':
      return {
        ...state,
        postForm: {
          ...state.postForm,
          [action.input.target.id]: {
            ...state.postForm[action.input.target.id],
            touched: true,
          },
        },
      };
    case 'EDIT_CANCEL':
      return {...state, postForm: POST_FORM, formIsValid: false}
    case 'EDIT_SUBMIT':
      return {...state, postForm: POST_FORM, formIsValid: false}
    default:
      return null
  }
}

const POST_FORM = {
  title: {
    value: '',
    valid: false,
    touched: false,
    validators: [required, length({ min: 5 })]
  },
  content: {
    value: '',
    valid: false,
    touched: false,
    validators: [required, length({ min: 5 })]
  }
};

const FeedEdit = props => {
  const [{postForm, formIsValid}, dispatch] = useReducer(reducer, {
    postForm: POST_FORM,
    formIsValid: false,
  })

  const prevProps = usePrevious(props)
  const prevState = usePrevious({postForm, formIsValid})
  useEffect(() => {
    if (
      props.editing &&
      prevProps.editing !== props.editing &&
      prevProps.selectedPost !== props.selectedPost
    ) {
      const postForm = {
        title: {
          ...prevState.postForm.title,
          value: props.selectedPost.title,
          valid: true
        },
        content: {
          ...prevState.postForm.content,
          value: props.selectedPost.content,
          valid: true
        }
      };
      dispatch({type:'POST_SELECTION', postForm})
    }
  },[props.editing, props.selectedPost])

  const postInputChangeHandler = (input, value) => {
    let isValid = true;
    for (const validator of postForm[input].validators) {
      isValid = isValid && validator(value);
    }
    
    const updatedForm = {
      ...postForm,
      [input]: {
        ...postForm[input],
        valid: isValid,
        value: value
      }
    };
    let formValid = true;
    
    for (const inputName in updatedForm) {
      formValid = formValid && updatedForm[inputName].valid;
    }
    
    dispatch({type: 'INPUT_CHANGE', updatedForm, formValid})
  };

  const inputBlurHandler = (input) => {
    
    dispatch({
      type: "INPUT_ONBLUR",
      input,
    });
  };

  const cancelPostChangeHandler = () => {
    dispatch({type: 'EDIT_CANCEL'})
    props.onCancelEdit();
  };

  const acceptPostChangeHandler = () => {
    const post = {
      title: postForm.title.value,
      content: postForm.content.value
    };
    props.onFinishEdit(post);
    dispatch({type: 'EDIT_SUBMIT'})
  };

  
    return props.editing ? (
      <Fragment>
        <Backdrop onClick={cancelPostChangeHandler} />
        <Modal
          title="New Post"
          acceptEnabled={formIsValid}
          onCancelModal={cancelPostChangeHandler}
          onAcceptModal={acceptPostChangeHandler}
          isLoading={props.loading}
        >
          <form>
            <Input
              id="title"
              label="Title"
              control="input"
              onChange={postInputChangeHandler}
              onBlur={inputBlurHandler}
              valid={postForm['title'].valid}
              touched={postForm['title'].touched}
              value={postForm['title'].value}
              placeholder={"TITLE"}
              
            />
            
            <Input
              id="content"
              label={"Content"}
              control="textarea"
              rows="5"
              onChange={postInputChangeHandler}
              onBlur={inputBlurHandler}
              valid={postForm['content'].valid}
              touched={postForm['content'].touched}
              value={postForm['content'].value}
              
            />
          </form>
        </Modal>
      </Fragment>
    ) : null;
  }


export default FeedEdit;
