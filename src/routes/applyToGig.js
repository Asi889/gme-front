import axios from 'axios'

export const applyToGig = async (token, id) => {
    try {
        console.log(token);
        console.log(id);
        

         await axios.get(`${process.env.REACT_APP_SERVER_URL}/applyToGig`, { headers: { "x-auth-token": token } })
        // console.log(apply.data);
        // console.log(feed.data.data);
        // request.defaults.headers.common['Authorization'] = `Bearer ${token}`
        // const resp = await request.get()
        // const gigs = resp.data.data
        // return apply.data
    } catch (error) {
        console.log(error);
        alert('Unable to get feed gigs')
    }
}