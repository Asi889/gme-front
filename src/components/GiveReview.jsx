import React, { useState } from 'react';
import { observer, inject } from 'mobx-react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton, makeStyles, Snackbar, Input, TextField, Typography } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import RateReviewIcon from '@material-ui/icons/RateReview';
import Rating from '@material-ui/lab/Rating';
import {givereview} from './componentStyles/givereview'



const GiveReiview = inject("gigList", "profileList", "profile","theme")(observer((props) => {
    const useStyle1 =givereview
    let ppp = props.gig.dueDate ? props.gig.dueDate.indexOf("T") : props.gig.expirationDate.indexOf("T");
    let jjj = props.gig.dueDate ? props.gig.dueDate.slice(0, ppp) : props.gig.expirationDate.slice(0, ppp);

    const [snackBarOpen, setSnackBarOpen] = useState(false);
    const [snackBarMsg, setSnackBarMsg] = useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(2);
    const [review, setReview] = useState("");

    const classes = useStyle1();

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleValue = (e) => {
        setValue(e.target.value)
    };

    const handleBack = () => {
        setOpen(false)
    };

    const handelReview = (e) => {
        setReview(e.target.value)
    };
    const handleRev = async () => {
        await props.profile.addNewReview(props.gig.gigMakerID, value, review)
        setOpen(false)
    };

    const snackBarClose = (event) => {

    }

    return (
        <div className={classes.location}  >
            {/* <CheckCircleOutlinedIcon className={classes.checkIcon} style={{ color: green[500] }}/> */}
            <Button className={props.theme.theme ? classes.darkPos : classes.pos}  onClick={handleClickOpen}>
                <RateReviewIcon fontSize="small"/>


            </Button>
            <Dialog
                open={open}
                // TransitionComponent={Transition}
                keepMounted
                // onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                className={classes.dialogContent}
            >
                <DialogTitle id="alert-dialog-slide-title" className={classes.title}>
                    <InfoOutlinedIcon color="primary" />
                    Give review
                    </DialogTitle>
                <DialogContent >

                    <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        label="Description"
                        value={review}
                        multiline
                        rows={4}
                        variant="outlined"
                        color="primary"
                        className={classes.editText1}
                        onChange={handelReview}

                    />
                    <div className={classes.rateingpos}>

                        <Typography component="legend">Rate</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={ (event,newValue) => { setValue(newValue) }}
                        />
                    </div>


                </DialogContent>
                {/* {props.gigStore.description} */}
                <DialogActions>
                    <Button onClick={handleBack} color="primary">back</Button>
                    <Button onClick={handleRev} color="primary">Rate Him!</Button>
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
export default GiveReiview;