import axios from "axios"

  const logInRoute= async (email, password)=>{
    try
    {
        const res= await axios.post("http://localhost:3001/logIn", {email, password} )
        // console.log(res);
        return res.data

    }catch(err){
        alert(err)
    }

}
export default logInRoute