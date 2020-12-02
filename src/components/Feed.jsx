
import { Avatar, Box, Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { Copyright } from '@material-ui/icons';
import { Email } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
// import { authReducer } from '../reducers/authReducers';
// import { signUp } from '../services/signup'


const Feed = () => {
  const [check, setCheck]= useState(false)

  const handleSub=()=>{
    localStorage.setItem('auth-token', '')
    setCheck(true)

  }
  // useEffect(()=>{

  // },[check])
 
  return (
    <div className="App">
      
     <h1>hello</h1>
     <Button
     onClick={handleSub}>
       Log Out
     </Button>
    </div>
  );
}

export default Feed;
