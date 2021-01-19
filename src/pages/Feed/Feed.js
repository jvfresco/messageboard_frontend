import React, { Fragment, useEffect, useReducer, useState } from 'react';
import openSocket from 'socket.io-client'
import Post from '../../components/Feed/Post/Post';
import Button from '../../components/Button/Button';
import FeedEdit from '../../components/Feed/FeedEdit/FeedEdit';
import Input from '../../components/Form/Input/Input';
import Paginator from '../../components/Paginator/Paginator';
import Loader from '../../components/Loader/Loader';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';
import './Feed.css';

const reducer = (state, action) => {
  switch(action.type){
    case 'POST_ADD':{
        const updatedPosts = [...state.posts];
        if (state.postPage === 1) {
          if (state.posts.length >= 2) {
            updatedPosts.pop();
          }
          updatedPosts.unshift(action.post);
        }
        return {
          ...state,
          posts: updatedPosts,
          totalPosts: state.totalPosts + 1,
        };
    }
    case 'POST_UPDATE': {
        const updatedPosts = [...state.posts];
        const updatedPostIndex = updatedPosts.findIndex(
          (p) => p._id === action.post._id
        );
        if (updatedPostIndex > -1) {
          updatedPosts[updatedPostIndex] = action.post;
        }
        return {
          ...state,
          posts: updatedPosts,
        };
    }
    case 'POSTS_DIRECTION': {
      if(action.page){
        return {...state, postsLoading: true, posts: [], postPage: action.page }
      } else {
        return {...state, postsLoading: true, posts: []}
      }
    }
    case 'POSTS_LOAD':{
      return {
        ...state,
        posts: action.resData.posts,
        totalPosts: action.resData.totalItems,
        postsLoading: false,
      }
    }
    case 'DELETE_START': 
      return {...state, postsLoading: true }
    case 'DELETE_ERROR':
      return {...state, postsLoading: false }
    default:
      return null
  }
}

const editReducer = (state, action) => {
  switch (action.type){
    case 'EDIT_NEW_POST':
      return {...state, isEditing: true}
    case 'EDIT_POST': {
      const loadedPost = { ...action.posts.find((p) => p._id === action.postId) };
      return {
          ...state,
          isEditing: true,
          editPost: loadedPost,
      };
    }
    case 'EDIT_CANCEL':
      return {...state, isEditing: false, editPost: null};
    case 'EDIT_LOADING':
      return {...state, editLoading: true};
    case 'EDIT_FINISH':
      return {...state, isEditing: false, editPost: null, editLoading: false};
    default: 
      return null
  }
}

const Feed = props => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    totalPosts: 0,
    postPage: 1,
    postsLoading: true,
  });
  const [editState, editDispatch] = useReducer(editReducer, {
    isEditing: false,
    editPost: null,
    editLoading: false,
  })
  const [status, setStatus] = useState("")
  const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://jvfresco-messageboard.herokuapp.com/auth/status", {
          headers: {
            Authorization: "Bearer " + props.token,
          },
        });
        if (res.status !== 200) {
          throw new Error("Failed to fetch user status.");
        }
        const resData = await res.json();
        setStatus(resData.status)
      } catch (err) {
        catchError(err);
      }
    })()
    loadPosts();
    const socket = openSocket("https://jvfresco-messageboard.herokuapp.com");
    socket.on("posts", (data) => {
      if (data.action === "create") {
        addPost(data.post);
      } else if (data.action === "update") {
        updatePost(data.post);
      } else if (data.action === "delete") {
        loadPosts();
      }
    });
  },[])

  const addPost = (post) => {
    dispatch({type: 'POST_ADD', post})
  };

  const updatePost = (post) => {
    dispatch({type: 'POST_UPDATE', post})
  };

  const loadPosts = async (direction) => {
    let page = state.postPage
    if(!direction){
      dispatch({type:'POSTS_DIRECTION'})
    } else {
      if(direction === "next"){
        page++
      }
      if (direction === "previous"){
        page--
      }
      dispatch({type:'POSTS_DIRECTION', page})
    }
    
    try {
      const res = await fetch("https://jvfresco-messageboard.herokuapp.com/feed/posts?page=" + page, {
        headers: {
          Authorization: "Bearer " + props.token,
        },
      });
      if (res.status !== 200) {
        throw new Error("Failed to fetch posts.");
      }
      const resData = await res.json();
      dispatch({type: 'POSTS_LOAD', resData})
    } catch (err) {
      catchError(err);
    }
  };

  const statusUpdateHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("https://jvfresco-messageboard.herokuapp.com/auth/status", {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + props.token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: status,
        }),
      });
      if (res.status !== 200 && res.status !== 201) {
        throw new Error("Can't update status!");
      }
      const resData = await res.json();
    } catch (err) {
      catchError(err);
    }
  };

  const newPostHandler = () => {
    editDispatch({type: 'EDIT_NEW_POST'})
  };

  const startEditPostHandler = (postId) => {
    editDispatch({type: 'EDIT_POST', postId, posts: state.posts})
  };

  const cancelEditHandler = () => {
    editDispatch({type: 'EDIT_CANCEL'})
  };

  const finishEditHandler = async (postData) => {
    editDispatch({type:'EDIT_LOADING'})
    let url = "https://jvfresco-messageboard.herokuapp.com/feed/post";
    let method = "POST";
    if (editState.editPost) {
      url = "https://jvfresco-messageboard.herokuapp.com/feed/post/" + editState.editPost._id;
      method = "PUT";
    }
    try {
      const res = await fetch(url, {
        method: method,
        headers: {
          Authorization: "Bearer " + props.token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: postData.title,
          content: postData.content
        }),
      });

      if(res.status === 403){
        throw new Error("Not authorized")
      }else if (res.status !== 200 && res.status !== 201) {
        throw new Error("Creating or editing a post failed!");
      }
      const resData = await res.json();
      const post = {
        _id: resData.post._id,
        title: resData.post.title,
        content: resData.post.content,
        creator: resData.post.creator,
        createdAt: resData.post.createdAt,
      };
      editDispatch({type:'EDIT_FINISH'})
    } catch (err) {
      console.log(err);
      catchError(err)
      editDispatch({type:'EDIT_FINISH'})
    }
  };

  const statusInputChangeHandler = (input, value) => {
    setStatus(value)
  };

  const deletePostHandler = async (postId) => {
    dispatch({type: 'DELETE_START'})
    try {
      const res = await fetch("https://jvfresco-messageboard.herokuapp.com/feed/post/" + postId, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + props.token,
        },
      });
      if (res.status === 403){
        throw new Error('This post is not yours to delete')
      }else if (res.status !== 200 && res.status !== 201) {
        throw new Error("Deleting a post failed!");
      }
      const resData = res.json();
      loadPosts();
    } catch (err) {
      catchError(err);
      console.log(err)
      dispatch({type: 'DELETE_ERROR'})
    }
  };

  const errorHandler = () => {
    setError(null)
  };

  const catchError = (error) => {
    setError(error)
  };

  
    return (
      <Fragment>
        <ErrorHandler error={error} onHandle={errorHandler} />
        <FeedEdit
          editing={editState.isEditing}
          selectedPost={editState.editPost}
          loading={editState.editLoading}
          onCancelEdit={cancelEditHandler}
          onFinishEdit={finishEditHandler}
        />
        <section className="feed__status">
          <form onSubmit={statusUpdateHandler}>
            <Input
              type="text"
              placeholder="Your status"
              control="input"
              onChange={statusInputChangeHandler}
              value={status}
            />
            <Button mode="flat" type="submit">
              Update
            </Button>
          </form>
        </section>
        <section className="feed__control">
          <Button mode="raised" design="accent" onClick={newPostHandler}>
            New Post
          </Button>
        </section>
        <section className="feed">
          {state.postsLoading && (
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Loader />
            </div>
          )}
          {state.posts.length <= 0 && !state.postsLoading ? (
            <p style={{ textAlign: "center" }}>No posts found.</p>
          ) : null}
          {!state.postsLoading && (
            <Paginator
              onPrevious={() => loadPosts("previous")}
              onNext={() => loadPosts("next")}
              lastPage={Math.ceil(state.totalPosts / 2)}
              currentPage={state.postPage}
            >
              {state.posts.map((post) => (
                <Post
                  key={post._id}
                  id={post._id}
                  author={post.creator.name}
                  date={new Date(post.createdAt).toLocaleDateString("en-US")}
                  title={post.title}
                  content={post.content}
                  isOwner={post.creator._id === props.userId ? true : false}
                  onStartEdit={() => startEditPostHandler(post._id)}
                  onDelete={() => deletePostHandler(post._id)}
                />
              ))}
            </Paginator>
          )}
        </section>
      </Fragment>
    );
}


export default Feed;
