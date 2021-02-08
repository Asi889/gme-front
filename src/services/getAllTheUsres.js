import axios from 'axios'

export const getAllTheUsers = async (token) => {
    try {
        const users = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/allUsers`,
            { headers: { "x-auth-token": token } }
        )
        return users.data
    } catch (error) {
        console.log(error);
        alert('Unable to get feed gigs')
    }
}