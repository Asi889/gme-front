import axios from 'axios'

export const filterFeedLocation = (feed, usrId) => {
    try {
        // console.log(feed);
        let onlyMyFeed = feed.filter(i => i.gigMakerID !== usrId && i.gigTakerID !== usrId && i.status !== "on process" && i.status !== "completed!")
        let onlyMyFeedSortedLocattion = onlyMyFeed.sort((a, b) => a.distance - b.distance);
        return onlyMyFeedSortedLocattion

    } catch (error) {
        console.log(error);
    }
}