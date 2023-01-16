import { Col, Row } from 'antd'
import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Headerbar from '../component/Headerbar'

const Profile = () => {
  const params = useParams()
  //console.log(params);
  const { users } = useSelector(state => state.usersReducer)
  const user = users.find((item) => item._id === params.userid
  )
  console.log(user);
  return (
    <div>
      <Headerbar>
        {users.length > 0 &&(<Row justify='center'>
          <Col lg={24} sm={24} xs={24}>
            <div className='bs1 m-2 p-2'>
              <div className='flex align-items-center'>
              {user.profilePicUrl == "" ? (
                        <p className="profilepic2 text-left">{user.username[0]}</p>
                      ) : (
                        <img src={user.profilePicUrl} height='60' width='60' style={{borderRadius:'50%'}}/>
                      )}
                      <div className='text-left'>
                        <p>{user.username}</p>
                        <p>{moment(user.createdAt).format('MMM DD yyyy')}</p>
                      </div>
              </div>
              <p>{user.bio}</p>
            </div>
          </Col>
        </Row>)}
      </Headerbar>
    </div>
  )
}

export default Profile
