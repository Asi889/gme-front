import axios from "axios"

  const signUpRoute= async (user)=>{
    try
    {
        const res= await axios.post("http://localhost:3001/userSignUp", user )
        console.log(res);
        return res.data

    }catch(err){
        alert(err)
    }

}
export default signUpRoute