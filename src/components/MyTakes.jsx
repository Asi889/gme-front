import Button from '@material-ui/core/Button';
import { observer, inject } from 'mobx-react'
import React, { useEffect, useState } from 'react';
import { Avatar, Card, CardContent, Divider, makeStyles, Typography } from '@material-ui/core';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Grid from '@material-ui/core/Grid';
import InfoDialogMyPosts from './InfoDialogMyPosts';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import UpdateFinish from "./UpdateFinish";
// import UpdateIcon from '@material-ui/icons/Update';
import { myTakesStyles } from './componentStyles/myTakesStyles';
import { Image } from 'cloudinary-react';


const MyTakes = inject("gigList", "profileList", "profile", "theme")(observer((props) => {

    let gigMaker = props.profileList.allUserslist.find(i => i._id === props.gig.gigMakerID);
    let piccc= gigMaker?.picture ? gigMaker.picture : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"

    let locationNameShort = props.gig.locationName.substring(0, props.gig.locationName.indexOf(","))
    let doubleCehkLength =
        locationNameShort.length >= 11
            ?
            props.gig.locationName.substring(0, 10) + "..."
            :
            locationNameShort + "..."

    
            const myTakesStyles1 = myTakesStyles
    const classes1 = myTakesStyles1();

    return (
        <div>
            <Card className={classes1.rootc} >
                <CardContent className={props.theme.theme ? classes1.darkCardContent1 : classes1.cardContent1} >
                    <Grid container spacing={1}>

                        <Grid container className={classes1.leftContainer} >

                            <Grid container direction="column" className={classes1.leftContainerIcon}>
                                <Grid item>
                                    <LabelOutlinedIcon fontSize="small" className={props.theme.theme ? classes1.darkIcon : classes1.iconn} />
                                </Grid>

                                <Grid item>
                                    <LocationOnOutlinedIcon fontSize="small" className={props.theme.theme ? classes1.darkIcon : classes1.iconn} />
                                </Grid>

                                <Grid item>
                                    <AttachMoneyIcon fontSize="small" className={props.theme.theme ? classes1.darkIcon : classes1.iconn} />
                                </Grid>

                                <Grid item>
                                    <HourglassEmptyIcon fontSize="small" className={props.theme.theme ? classes1.darkIcon : classes1.iconn} />
                                </Grid>
                            </Grid>

                            <Grid container direction="column" className={props.theme.theme ? classes1.leftContainerContentDark : classes1.leftContainerContent}>
                                <Typography>
                                    {props.gig.category}
                                </Typography>

                                <Typography>
                                    {doubleCehkLength}
                                </Typography>

                                <Typography>
                                    {props.gig.cost}
                                </Typography>

                                <Typography>
                                    {props.gig.status}
                                </Typography>

                            </Grid>


                        </Grid>
                        <Grid container className={classes1.rightContainer} >

                            <Grid item >

                                <div className={classes1.picLoc}>
                                <Image
                                        className={classes1.pic}
                                        cloudName='dvdzjj8jo'
                                        publicId={piccc}
                                        alt=""
                                    />
                                    <br></br>
                                    <br></br>
                                    <UpdateFinish gig={props.gig} />
                                    <InfoDialogMyPosts gig={props.gig} />
                                </div>

                            </Grid>
                        </Grid>

                        <Grid className={props.theme.theme ? classes1.darkDivider : classes1.divider} >
                            <Divider />
                        </Grid>




                    </Grid>
                </CardContent>
            </Card>

        </div>
    )

}))
export default MyTakes;








