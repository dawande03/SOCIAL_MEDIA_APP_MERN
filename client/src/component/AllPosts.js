import React from 'react'
import { Link } from 'react-router-dom'
import { HeartFilled,HeartOutlined, CommentOutlined , DeleteOutlined , EditOutlined} from "@ant-design/icons";

import moment from 'moment'
const AllPosts = ({post}) => {
  console.log(post);
  return (
    <div className="bs1 p-2">
      <div className="d-flex justify-content-between align-item-center bs1">
        <div className="d-flex align-items-center"> 
        {post.user.profilePicUrl == ""?(<span className="profilepic1">{post.user.username[0]}</span>):<img src={post.user.profilePicUrl}/>}
        <Link  style={{paddingLeft: 13, textDecoration: 'none'}}>{post.user.username }</Link>
        </div>
        <div>
        <p>{moment(post.createdAt).format('MMM DD yyyy')}</p>
        </div>
      </div>
      <img src={post.image} className="postimage" alt="" />

      <p className='className="mt1 mb-1 text-left'>{post.description}</p>

      <div className='d-flex align-item-center'>
        <div>
        <HeartOutlined />
        
        </div>
        <div>
        <CommentOutlined />
      
        </div>
      </div>
    </div>

    
  )
}

export default AllPosts
