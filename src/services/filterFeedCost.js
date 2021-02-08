import axios from 'axios'

export const filterFeedCost = (feed, usrId) => {
    try {
        // console.log(feed);
        let onlyMyFeed = feed.filter(i => i.gigMakerID !== usrId && i.gigTakerID !== usrId && i.status !== "on process" && i.status !== "completed!")
        let onlyMyFeedSortedCost = onlyMyFeed.sort((a, b) => a.cost - b.cost);
        return onlyMyFeedSortedCost

    } catch (error) {
        console.log(error);
    }
}