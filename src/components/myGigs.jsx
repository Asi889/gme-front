// import { Button, ThemeProvider } from '@material-ui/core';
import { useState } from 'react';
import { observer, inject } from 'mobx-react'
import MyPosts from './MyPosts';
import MyTakes from './MyTakes';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    rootv: {
        backgroundColor: "white"
    },
    darkRoot: {
        backgroundColor: "#18191a",
        height: '100vh'
    },

});

const myGigs = inject('gigList', "profileList", "profile", "theme")(observer((props) => {
    const classes = useStyles();

    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(true);
    const [posts, setPosts] = useState(true);
    const userId = props.profileList.user.id;
    const [myPosts, setMyPosts] = useState([...props.gigList.gigListAr].filter(i => i.gigMakerID === userId))
    const [myTakes, setMyTakes] = useState([...props.gigList.gigListAr].filter(i => i.gigTakerID === userId))
    const togPushed = props.theme.theme ? "darkToggledPushed" : " togglePushed";
    const togNotPushed = props.theme.theme ? "darkToggleNotPushed" : "toggleNotPushed";

    const handleTakes = () => {
        setPosts(false)
        setRight(false)
        setLeft(true)
    }

    const handlePosts = () => {
        setPosts(true)
        setRight(true)
        setLeft(false)
    }

    return (
        <div className={props.theme.theme ? classes.darkRoot : classes.rootv} >
            <div className="head" >

                <h2 className={left ? togPushed : togNotPushed} onClick={handleTakes}>
                    My Takes
                    </h2>

                <h1 className='line'>  - </h1>


                <h2 className={right ? togPushed : togNotPushed} onClick={handlePosts}>
                    My Posts
                    </h2>
            </div>

            <div className="feedMe">
                {
                    posts
                        ?
                        myPosts.map((i, indx) => <MyPosts gig={i} key={indx} />)
                        :
                        myTakes.map((i, indx) => <MyTakes gig={i} key={indx} />)
                }
            </div>
        </div>
    );
}))

export default myGigs;


