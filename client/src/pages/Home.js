import React from 'react'

import {useSelector} from 'react-redux'
import { Col, Row } from 'antd'
import Post from '../component/AllPosts'
import Headerbar from '../component/Headerbar'

function Home() {
    const {users} = useSelector(state=>state.usersReducer)
    const {posts} = useSelector(state=>state.postsReducer)
    return (
        <Headerbar>
              <Row justify='center'>
                
                  <Col lg={12} xs={24}>

                      {posts.map(post=>{
                          return <Post post={post}/>
                      })}
                  
                  </Col>

              </Row>
              </Headerbar>
    )
}

export default Home

