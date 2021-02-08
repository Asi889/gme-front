import axios from 'axios'

export const getAllTheUsers = async (token) => {
    try {
        const users = await axios.get(
            `ec2-52-14-49-167.us-east-2.compute.amazonaws.com/api/allUsers`,
            // `${process.env.REACT_APP_SERVER_URL}/allUsers`,
            { headers: { "x-auth-token": token } }
        )
        return users.data
    } catch (error) {
        console.log(error);
        alert('Unable to get feed gigs')
    }
}