
import { Grid, Typography } from '@material-ui/core';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import { observer, inject } from 'mobx-react'
// import GigSummary from './GigSummary'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import EditIcon from '@material-ui/icons/Edit';
import Rating from '@material-ui/lab/Rating';
// import PersonIcon from '@material-ui/icons/Person';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Divider from '@material-ui/core/Divider';
import { pictureUploader } from '../services/pictureUploader';
import { Image } from 'cloudinary-react';
import { profilePageStyles } from './componentStyles/profilePageStyles'



const ProfilePage = inject('gigList', "profileList", "profile", "theme")(observer((props) => {
  const useStyles1 = profilePageStyles
  let user = props.profileList.user;
  // console.log(props.profileList.user);
  const [value, setValue] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
  const [email, setEmail] = useState(user.email)
  // const [data, setData] = useState('')
  // const [check, setCheck] = useState(false);
  let piccc = user.picture ? user.picture : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  // console.log(piccc);
  const [pic, setPic] = useState(piccc)

  const history = useHistory();
  const userId = props.profileList.user.id;
  const userRate = props.profileList.user

  const classes1 = useStyles1();

  let ar = [...props.gigList.gigListAr]
  const myFeed = ar.filter(i => i.gigMakerID != userId && i.gigTakerID != userId)



  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handlePic = async (e) => {
    let reader = new FormData();
    reader.append('file', e)
    reader.append('upload_preset', 'gigMezsjhms5b')
    const pictureRes = await pictureUploader(reader)
    setPic(pictureRes)
    await props.profileList.updateUserProfile(pictureRes)

  };

  return (
    <div className={props.theme.theme ? classes1.darkRoot : classes1.rootq} >

      <div className={classes1.picLoc}>
        <h1 className={props.theme.theme ? classes1.darkProfileTitle : classes1.profileTitle}>Profile Page</h1>
        <Image
          style={{ width: 200 }}
          cloudName='dvdzjj8jo'
          publicId={pic}
        />


        <div className="image-upload">
          <label htmlFor="file-input">
            <EditIcon type="file" className={classes1.editIcon} />
          </label>

          <input id="file-input" type="file" accept="image/*" onChange={(e) => { handlePic(e.target.files[0]) }} />
          <br></br>
          <br></br>

          <Rating name="disabled" value={user.rating} color="primary" size="large" disabled />
        </div>
      </div>

      <br></br>
      <br></br>

      <Grid container spacing={1} alignItems="flex-end" justify='center' className={classes1.con}  >
        <Grid item>
          <PersonIcon className={props.theme.theme ? classes1.darkPersonIcon : classes1.personIcon} />
        </Grid>

        <Grid item className={classes1.kk}>
          <Typography className={props.theme.theme ? classes1.darkfName : classes1.fName} label="First Name" variant='caption'>
            First Name
            </Typography>
          <br></br>
          <Typography className={props.theme.theme ? classes1.darkfName1 : classes1.fName1} label="First Name" >
            {value}
          </Typography>
          <Divider className={props.theme.theme ? classes1.darkDivider : classes1.divider} />


        </Grid>

      </Grid>

      <Grid container spacing={1} alignItems="flex-end" justify='center' className={classes1.ppl}   >

        <Grid item>
          <PersonOutlineIcon className={props.theme.theme ? classes1.darkPersonIcon : classes1.personIcon} />
        </Grid>

        <Grid item className={classes1.tt}>
          <Typography className={props.theme.theme ? classes1.darkfName : classes1.fName} label="First Name" variant='caption'>
            Last Name
            </Typography>
          <br></br>
          <Typography className={props.theme.theme ? classes1.darkfName1 : classes1.fName1} label="First Name" >
            {lastName}
          </Typography>
          <Divider className={props.theme.theme ? classes1.darkDivider : classes1.divider} />
        </Grid>

      </Grid>

      <Grid container spacing={1} alignItems="flex-end" justify='center' className={classes1.ppl}   >

        <Grid item>
          <EmailIcon className={props.theme.theme ? classes1.darkPersonIcon : classes1.personIcon} />
        </Grid>

        <Grid item>
          <Typography className={props.theme.theme ? classes1.darkfName : classes1.fName} label="First Name" variant='caption'>
            E-mail
            </Typography>
          <br></br>
          <Typography className={props.theme.theme ? classes1.darkfName1 : classes1.fName1} label="First Name" >
            {email}
          </Typography>
          <Divider className={props.theme.theme ? classes1.darkDivider : classes1.divider} />
        </Grid>
      </Grid>
    </div>
  );
}))

export default ProfilePage;


