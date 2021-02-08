import { observer, inject } from 'mobx-react'
import React, { useState } from 'react';
import { Card, CardContent, Divider, makeStyles, Typography } from '@material-ui/core';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TakeGig from "./TakeGig"
import Grid from '@material-ui/core/Grid';
import InfoDialog from './infoDialog';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import Rating from '@material-ui/lab/Rating';
import { feedCardStyles } from './componentStyles/feedCardStyles'
import { Image } from 'cloudinary-react';



const FeedCard = inject("gigList", "profileList", "profile", "theme")(observer((props) => {
    const feedCardStyles1 = feedCardStyles;

    let gigMaker = props.profileList.allUserslist.find(i => i._id === props.gig.gigMakerID);
    let piccc= gigMaker?.picture ? gigMaker.picture : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
    const pic = props.profileList.user.picture ? props.profileList.user.picture : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    const classes1 = feedCardStyles1();

    let lok = props.gig.locationName;
    let locationNameShort = ''
    if (lok) {
        locationNameShort = lok?.substring(0, lok?.indexOf(",")) + "...";
    };
    return (
        <div>
            <Card className={classes1.card} >
                {/* <CardContent className={classes1.cardContent1} > */}
                <CardContent className={props.theme.theme ? classes1.cardcontentDark : classes1.cardContent1} >
                    <Grid container >

                        <Grid container className={classes1.leftContainer} >

                            <Grid container direction="column" className={classes1.leftContainerIcon}>
                                <Grid item xs>
                                    <LabelOutlinedIcon fontSize="small" className={props.theme.theme ? classes1.darkIcon : classes1.iconn} />
                                </Grid>

                                <Grid item xs>
                                    <LocationOnOutlinedIcon fontSize="small" className={props.theme.theme ? classes1.darkIcon : classes1.iconn} />
                                </Grid>

                                <Grid item xs>
                                    <AttachMoneyIcon fontSize="small" className={props.theme.theme ? classes1.darkIcon : classes1.iconn} />
                                </Grid>

                                <Grid item xs>
                                    <HourglassEmptyIcon fontSize="small" className={props.theme.theme ? classes1.darkIcon : classes1.iconn} />
                                </Grid>
                            </Grid>

                            <Grid container direction="column" className={props.theme.theme ? classes1.leftContainerContentDark : classes1.leftContainerContent}>
                                {/* <Grid container direction="column" className={props.theme.theme ? classes1.leftContainerContentDark : classes1.leftContainerContent}  */}
                                <Typography>
                                    {props.gig.category}
                                </Typography>

                                <Typography>
                                    {locationNameShort}
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
                            <Grid item>

                                <div className={classes1.picLoc}>
                                    <Image
                                        className={classes1.pic}
                                        // style={{ width: 200 }}
                                        cloudName='dvdzjj8jo'
                                        // publicId={pic}
                                        // publicId={props.profileList.user.picture}
                                        publicId={piccc}
                                    />
                                    {/* <img className={classes1.pic} src={pic} alt="" /> */}
                                    <br></br>
                                    <br></br>
                                    <Rating name="disabled" value={gigMaker ? gigMaker.avgRating : 0} color="primary" size="small" disabled />

                                </div>
                            </Grid>



                        </Grid>

                        <Grid container className={classes1.bottomContainer} >

                            <Grid item className={props.theme.theme ? classes1.darkDivider : classes1.divider}  >
                                <Divider   />
                            </Grid>

                            <Grid item xs className={classes1.info}>
                                <InfoDialog fontSize="small" gig={props.gig} />
                            </Grid>

                            <Grid item xs className={classes1.takegig} >
                                {/* <div className={classes1.infoIcon}> */}
                                <TakeGig gig={props.gig} handleTakeGig={props.handleTakeGig} />
                                {/* </div> */}
                            </Grid>
                        </Grid>



                    </Grid>
                </CardContent>
            </Card>

        </div>
    )

}))
export default FeedCard;