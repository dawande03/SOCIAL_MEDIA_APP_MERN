import axios from "axios";
import {message} from 'antd'

export const userRegister =(values)=>async dispatch=>{
    
    console.log(values);
    dispatch({type:'LOADING' , payload:true})

    try {
        await axios.post('http://localhost:8005/api/users/register', values)
        dispatch({type:'LOADING' , payload:false})
        message.success('User registered successfully')
        window.location.href='/login'
    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING' , payload:false})
        message.error('something went wrong')
    }

}

export const userLogin =(values)=>async dispatch=>{
    console.log(values);
    dispatch({type:'LOADING' , payload:true})

    try {
        const response = await axios.post('http://localhost:8005/api/users/login',values)
        console.log("result",response);
        dispatch({type:'LOADING' , payload:false})
        message.success('Login success')
        localStorage.setItem('user', JSON.stringify(response.data))
        window.location.href='/home'
    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING' , payload:false})
        message.error('Invalid credentials')
    }

}

export const getAllUsers = (values) =>async dispatch=>{
    dispatch({type:'LOADING' , payload:true})

    try {
        const response = await axios.get('http://localhost:8005/api/users/getallusers')
        dispatch({type:'LOADING' , payload:false})
        dispatch({type:'GET_ALL_USERS' , payload:response.data})
        
    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING' , payload:false})
        message.error('something went wrong')
    }

}

export const followUser = (values) =>async dispatch=>{
    dispatch({type:'FOLLOW_LOADING' , payload:true})

    try {
        const response = await axios.post('http://localhost:8005/api/users/followuser' ,values)
        dispatch({type:'FOLLOW_LOADING' , payload:false})
        message.success('Hi Shubham Followed successfully')
        
    } catch (error) {
        console.log(error)
        dispatch({type:'FOLLOW_LOADING' , payload:false})
        message.error('something went wrong')
    }

}


export const unfollowUser = (values) =>async dispatch=>{
    dispatch({type:'UNFOLLOW_LOADING' , payload:true})

    try {
        const response = await axios.post('http://localhost:8005/api/users/unfollowuser' ,values)
        dispatch({type:'UNFOLLOW_LOADING' , payload:false})
        message.success('UnFollowed successfully')
        
    } catch (error) {
        console.log(error)
        dispatch({type:'UnFOLLOW_LOADING' , payload:false})
        message.error('something went wrong')
    }

}

