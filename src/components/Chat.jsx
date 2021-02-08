
import { Button, ThemeProvider } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { observer, inject } from 'mobx-react'
import io from 'socket.io-client';

let socket


const Chat = inject('gigList', "profileList", "profile","theme")(observer((props) => {

    // useEffect(() => {
    //     socket = io("localhost:3001/api/")
    // },[])

    const handleClick = () => {
        socket.emit('join_room', "boomTesthahaha")
    }

    return (
        <div >
            <h2 className="CHat">
                Chat room
      </h2>
            <Button onClick={handleClick}></Button>


        </div>
    );
}))

export default Chat;


