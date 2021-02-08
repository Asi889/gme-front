import axios from 'axios'

export const getReviews = async (token) => {
    try {
        const feed = await axios.get(`ec2-52-14-49-167.us-east-2.compute.amazonaws.com/getReviews`, { headers: { "x-auth-token": token } })
        // const feed = await axios.get(`${process.env.REACT_APP_SERVER_URL}/getReviews`, { headers: { "x-auth-token": token } })
        return feed.data
    } catch (error) {
        console.log(error);
        alert('Unable to get feed gigs')
    }
}