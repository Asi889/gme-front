import axios from 'axios';
import authReducer from './authReducers';
// const authManager = new authReducer()

export const pictureUploader = async (reader) => {
    try {
        // console.log(reader);
         const picture=  await axios.post('https://api.cloudinary.com/v1_1/dvdzjj8jo/image/upload', reader )
        //  console.log(picture.data.secure_url);
         return picture.data.secure_url
        //  console.log("picture upload success");
     
    } catch (error) {
        console.log(error);
       
    }
}

///https://res.cloudinary.com/dvdzjj8jo/image/upload/v1612543819/t630mlviy3bikeecop3c.jpg
///https://res.cloudinary.com/dvdzjj8jo/image/upload/v1612543884/ekjz9z0j47bsjthikmkq.png
///https://res.cloudinary.com/dvdzjj8jo/image/upload/v1612543744/uxqcrpxtt2emvb0ilsnq.jpg
///https://res.cloudinary.com/dvdzjj8jo/image/upload/v1612543210/v0llzg5fpeok6h8xrzov.png