import React, { forwardRef, useEffect, useState } from 'react';
import { observer, inject } from 'mobx-react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
// import { applyToGig } from '../services/applyToGig';
// import { authReducer } from '../reducers/authReducers';
import { IconButton, makeStyles, Snackbar } from '@material-ui/core';
// import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
// import { green } from '@material-ui/core/colors';


import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Typography from '@material-ui/core/Typography';
import UpdateIcon from '@material-ui/icons/Update';
import { action } from 'mobx';

// import MuiDialogContent from '@material-ui/core/DialogContent';
// import Dialog from '@material-ui/core/Dialog';




// const Transition = forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

const UpdateFinish = inject("gigList", "profileList", "profile","theme")(observer((props) => {

    const [snackBarOpen, setSnackBarOpen] = useState(false)
    const [snackBarMsg, setSnackBarMsg] = useState("")

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleBack = () => {
        setOpen(false);
    };
    
    // const handleUpdate = () => {
    //     alert("ya man")
    // };
    

    const handleUpdate = async () => {
        // console.log(props.gig)
        await props.gigList.finishStatus(props.gig.id);
        setTimeout(() => {
            setSnackBarMsg(`Gig completed!`)
            setSnackBarOpen(true)
        }, 1)
        // // alert("your gig now")
        setOpen(false);
    };

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
            width: '20px',
            fontSize: "12px",
            fontWeight: "700",
            color: '#7920A6',

        },
        darkPos: {
            width: '20px',
            fontSize: "12px",
            fontWeight: "700",
            color:"#73bfb8",

        },
        location: {
            display: 'inline-block'
        },
    });
    const classes = useStyle();

    const snackBarClose = (event) => {
        setSnackBarOpen(false)
    }
    // console.log(props.gig)
    let ppp = props.gig.dueDate ? props.gig.dueDate.indexOf("T") : props.gig.expirationDate.indexOf("T")
    let jjj = props.gig.dueDate ? props.gig.dueDate.slice(0, ppp) : props.gig.expirationDate.slice(0, ppp)
    
    
    return (
        <div className={classes.location}  >
            {/* <CheckCircleOutlinedIcon className={classes.checkIcon} style={{ color: green[500] }}/> */}
            <Button className={props.theme.theme ? classes.darkPos : classes.pos}  onClick={handleClickOpen}>
            <UpdateIcon fontSize="small"  />

                
               </Button>
            {/* variant="outlined" */}
            {/* className={classes.root} */}
            <Dialog
                open={open}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    <UpdateIcon  color="primary" />
                    Update Status
                    </DialogTitle>
                    <DialogContent dividers>
                    <Typography>
                        Did you finsh the Gig?
                        {/* Category: {props.gig.category}
                        <br></br>
                        {props.gig.dueDate ?
                         "Due Date: "+jjj : "Expiration Date: "+jjj}
                        <br></br>
                        Cost: {props.gig.cost}
                        <br></br>
                         Location: {props.gig.locationName}
                        <br></br>
                        <br></br>
                        Description:
                        <br></br>
                         {props.gig.description}
                         */}

                    </Typography>

                    </DialogContent>
                {/* {props.gigStore.description} */}
                <DialogActions>
                    <Button onClick={action(handleUpdate)} color="primary">Yes!</Button>
                    <Button onClick={handleBack} color="primary">back</Button>
                    {/* <Button onClick={handleTakeGig} color="primary">Take Gig</Button> */}
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
export default UpdateFinish;