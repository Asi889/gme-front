import axios from "axios";
import authReducer from './authReducers';
const authManager = new authReducer()


const tokenValidation = async (token) => {
    try {
        // const token = authManager.getToken();
        // console.log(token);
        const tokenRes = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/tokenIsValid`,
            // "http://localhost:3001/tokenIsValid",
            null,
            { headers: { "x-auth-token": token } }
        )
        // console.log(tokenRes.data)
        // console.log(typeof tokenRes.data);
        return tokenRes.data
        
    } catch (error) {
        console.log(error);
    }
}

export default tokenValidation