import axios from 'axios'

export const filterFeedByCategory = (feed, usrId, selectedCategory) => {
    try {
        // console.log(feed);
        let onlyMyFeed = feed.filter(i => i.gigMakerID !== usrId && i.gigTakerID !== usrId && i.status !== "on process" && i.status !== "completed!")
        let filteredFeedByCategory = onlyMyFeed.filter(i => i.category === selectedCategory)
        return filteredFeedByCategory

    } catch (error) {
        console.log(error);
    }
}