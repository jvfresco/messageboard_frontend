import React, { useState, useEffect, Fragment } from 'react';
import './SinglePost.css';
import {NavLink} from 'react-router-dom'
import Button from '../../../components/Button/Button'
const SinglePost = (props) => {
  const [post, setPost] = useState({
    title: '',
    author: '',
    date: '',
    content: ''
  })

  useEffect(() => {
    const postId = props.match.params.postId;
    (async () => {
      try {
      const postData = await fetch('https://jvfresco-messageboard.herokuapp.com/feed/post/' + postId, {
        headers: {
          Authorization: 'Bearer ' + props.token
        }
      })
      if (postData.status !== 200){
        throw new Error('Failed to fetch status');
      }
      const resData = await postData.json()
      setPost({
        title: resData.post.title,
        author: resData.post.creator.name,
        date: new Date(resData.post.createdAt).toLocaleDateString('en-US'),
        content: resData.post.content
      });
      }catch(err){
        console.log(err);
      };
    })()
  },[]) 

    return (

        <section className="single-post">
          <h1>{post.title}</h1>
          <h2>
            Created by {post.author} on {post.date}
          </h2>
          <p>{post.content}</p>
          <br />
          <br />
          <NavLink to="/">
           <Button design="flat">Back</Button>
          </NavLink>
        </section>
 
    );
  
}

export default SinglePost;
