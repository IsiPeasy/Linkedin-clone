import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import InputOption from './InputOption';
import './Post.css'

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
  var firstLetter;
  if(name){
    firstLetter = name[0];
  }else{
    firstLetter = name;
  }
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{firstLetter}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOption Icon={ChatOutlined} title="Share" color="gray" />
        <InputOption Icon={ShareOutlined} title="Share" color="gray" />
        <InputOption Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </div>
  );
})

export default Post