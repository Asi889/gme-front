// import {  makeStyles, } from '@material-ui/core';
import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { observer, inject } from 'mobx-react'
// import GigSummary from './GigSummary';
import FeedCard from './FeedCard';
import Filter from "./Filter";
// import { configure } from 'mobx';
import FeedFiltered from './FeedFiltered'
import { filterFeedLocation } from '../services/filterFeed'
import { filterFeedCost } from '../services/filterFeedCost';
import { filterFeedByCategory } from '../services/filterFeedByCategory';
// import { makeStyles } from '@material-ui/core';
// const useStyles = makeStyles({
//   root1: {
//      backgroundColor:"white"
//   },
//   darkRoot:{
//     backgroundColor: "#18191a"
//   },
 
// });

const Feed = inject('gigList', "profileList", "profile","theme")(observer((props) => {
  const [selected, setSelected] = useState(null);
  const [cost, setCost] = useState(null);
  const ary = [...props.gigList.gigListAr];
  const usr = props.profileList.user.id
  let dat = filterFeedLocation(ary, usr);
  let filteredByCost = filterFeedCost(ary, usr);
  let filteredByCategory = filterFeedByCategory(ary, usr, selected);

  const handleTakeGig = async (id, userId) => {
    await props.gigList.apply(id, userId);
  };

  const handleFilter = (node) => {

    if (node === "location") {
      setCost(null);
      setSelected(null)
    };

    if (node === "cost") {
      setCost(node)
    };

    if (node !== "location" && node !== "cost") {
      setSelected(node)
    }
  };
  
  return (
    <div className={props.theme.theme ? 'darkFeedR' : 'feedR'} >

      <Filter handleFilter={handleFilter} />
      {/* <FeedFiltered data={dat} handleTakeGig={handleTakeGig} /> */}

      {

        selected
          ?
          <FeedFiltered data={filteredByCategory} handleTakeGig={handleTakeGig} />
          :
          cost
            ?
            <FeedFiltered data={filteredByCost} handleTakeGig={handleTakeGig} />
            :
            dat
              ?
              <FeedFiltered data={dat} handleTakeGig={handleTakeGig} />
              :
              " "

      }

      {/* {//////////////////////////////////////////////////////////////////////////////////////////////////////} */}

      {/* {

      selected
       ? 
        <FeedFiltered data={filteredByCategory} handleTakeGig={handleTakeGig} />
       :
       cost
       ?
        <FeedFiltered data={filteredByCost} handleTakeGig={handleTakeGig} />
       :
        <FeedFiltered data={dat} handleTakeGig={handleTakeGig} />
       ?
       default1.map(i => <FeedCard gig={i} key={i.id} />) 
       :
       " "
      } */}


      {/* {//////////////////////////////////////////////////////////////////////////////////////////////////////} */}

    </div>
  );
}))

export default Feed;