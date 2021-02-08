import React, { forwardRef, useEffect, useState } from 'react';
import { observer, inject } from 'mobx-react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { IconButton, makeStyles, Snackbar } from '@material-ui/core';
import { action } from 'mobx';



// const Transition = forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

const useStyle = makeStyles({
    // root: {

    //     borderRadius: 10,
    //     border: 0,
    //     color: '#02cab1',

    //     boxShadow: '0 1px 1px 1px rgba(83, 83, 83, 0.3)',
    //     left: "170px",
    //     top: "13px",
    //     fontSize: "10px",
    //     fontWeight: "700"
    // },
    checkIcon: {
        right: "40%"
    },
    pos: {
        width: '76px',
        fontSize: "12px",
        fontWeight: "700",
        color: '#7920A6',
    },
    darkPos:{
        width: '76px',
        fontSize: "12px",
        fontWeight: "700",
        color:'#73bfb8',
         // main #73bfb8
        //secondary "#7920A6
    },
    location: {
        display: 'inline-block',
    },
});

const TakeGig = inject("gigList", "profileList", "profile", "theme")(observer((props) => {

    const [snackBarOpen, setSnackBarOpen] = useState(false)
    const [snackBarMsg, setSnackBarMsg] = useState("")

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDisagree = () => {
        setOpen(false);
    };


    const handletake = async () => {
        await props.handleTakeGig(props.gig.id, props.profileList.user.id)
        // setTimeout(() => {
        //     setSnackBarMsg(`It's your gig now!`)
        //     setSnackBarOpen(true)
        // }, 1)
        // alert("your gig now")
        setOpen(false);
    }


    const classes = useStyle();

    const snackBarClose = (event) => {
        setSnackBarOpen(false)
    }

    return (
        <div className={classes.location}  >
            <Button className={props.theme.theme ? classes.darkPos : classes.pos} onClick={handleClickOpen}>Take Gig</Button>

            <Dialog
                open={open}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"want to take this Gig?"}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleDisagree} color="primary">Back</Button>
                    <Button onClick={action(handletake)} color="primary">Take Gig</Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={snackBarOpen}
                autoHideDuration={3000}
                onClose={snackBarClose}
                message={<span id="snackbar-msg">{snackBarMsg}</span>}
                action={
                    <IconButton
                        key="close"
                        arial-label="Close"
                        color="inherit"
                        onClick={snackBarClose}
                    >
                        x
              </IconButton>
                }
            />

        </div>
    );
}))
export default TakeGig;