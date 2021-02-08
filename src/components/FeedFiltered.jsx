import { observer, inject } from 'mobx-react'
import FeedCard from './FeedCard';

const FeedFiltered = inject('gigList', "profileList", "profile","theme")(observer((props) => {

  const [data, setData] = ([props.data])

  
  return (
    <div >

      { 
      data 
      ?
      data.map(i => {
        return (
          <FeedCard gig={i} key={i.id} handleTakeGig={props.handleTakeGig} />
        )
      })
      :
      <h4>no </h4>
      }

      

    </div>
  );
}))

export default FeedFiltered;
// export default Feed;


