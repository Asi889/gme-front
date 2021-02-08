import axios from 'axios'

const checkLoggedIn = async () => {


    let token = localStorage.getItem("auth-token");

    if (token === '' || token === null || token === undefined) {
        localStorage.setItem('auth-token', '');
        token = ""
    }
    // console.log(token);

    const tokenRes = await axios.post(
        "http://localhost:3001/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
    )
    console.log(tokenRes.data)
    if (tokenRes.data) {
        const userRes = await axios.get('http://localhost:3001',
            {
                headers: { 'x-auth-token': token },
            })
        // console.log(userRes.data)
        return (userRes.data, token)
    }
};
export default checkLoggedIn