import axios from 'axios'

export const getReviews = async (token) => {
    try {
        const feed = await axios.get(`${process.env.REACT_APP_SERVER_URL}/getReviews`, { headers: { "x-auth-token": token } })
        return feed.data
    } catch (error) {
        console.log(error);
        alert('Unable to get feed gigs')
    }
}