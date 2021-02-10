import { observable, makeObservable, action, configure, runInAction } from 'mobx'
import { getAllTheUsers } from '../services/getAllTheUsres';
import axios from "axios";
import authReducer from '../services/authReducers';
import { getReviews } from '../services/getReviews';
const authManager = new authReducer();
configure({ enforceActions: "observed" })



export default class ProfileStore {
    allUserslist = []
    reviewList = []
    user = {}
    constructor() {
        makeObservable(this, {
            allUserslist: observable,
            user: observable,
            reviewList: observable,
            getProfileList: action,
            getAllUsers: action,
            updateUserProfile: action,
            getReviewList: action,
        })
    }


    async getProfileList() {
        const token = authManager.getToken();

        // const token = localStorage.getItem("auth-token");
        // const userRes = await axios.get('ip-172-31-20-199.us-east-2.compute.internal',
        const userRes = await axios.get(`${process.env.REACT_APP_SERVER_URL}/profile`,
            {
                headers: { 'x-auth-token': token },
            });
        //   console.log(userRes.data)
        // console.log(user);
        // const getUserProfile = await getUser(token)
        runInAction(() => {

            this.user = {
                token: token,
                id: userRes.data._id,
                firstName: userRes.data.firstName,
                lastName: userRes.data.lastName,
                password: userRes.data.password,
                email: userRes.data.email,
                rating: userRes.data.avgRating,
                picture: userRes.data.picture,
            }
        })
        // console.log(user);
    }

    async getAllUsers() {
        const token = authManager.getToken();
        const allUsers = await getAllTheUsers(token);
        // console.log(allUsers)
        let allUsersButMe = allUsers.filter(i => i._id != this.user.id);
        allUsersButMe.forEach(i => { i.numOfRevies = 0 });

        runInAction(() => {
            this.allUserslist = allUsersButMe
        });
    };

    async updateUserProfile(pic) {
        // console.log(pic);
        
        this.user.picture = pic

        const token = authManager.getToken()
        const config = {
            headers: { "x-auth-token": token }
        }
        const bodyParameters = { pic }
        await axios.put(`${process.env.REACT_APP_SERVER_URL}/updateProfile`,
            bodyParameters,
            config
        )

    };

    async getReviewList() {
        const token = authManager.getToken();
        const reviews = await getReviews(token);
        // console.log(reviews);
        let userReviews = reviews.filter(i => i.user === this.user.id)
        // console.log(this.reviewList);
        // console.log(userReviews);
        let rate1 = 0
        let listLength = reviews.length;
        let userListLength = userReviews.length

        runInAction(() => {
            this.reviewList = reviews;

            this.allUserslist.forEach(j => {
                this.reviewList.forEach(i => {
                    if (i.user === j._id) {
                        j.numOfRevies += 1;
                        j.avgRating += i.rateing
                    }
                });
                j.avgRating = Math.round(j.avgRating / j.numOfRevies)
            });


            let rate = 0;
            let avg
            userReviews.forEach(i => {

                // console.log(i);
                // alert("yello")
                rate = rate + i.rateing
                // console.log(rate);
                avg = Math.round(rate / userListLength);
            });
            // for (let i = 0; i < userReviews.length; i++) {
            // }
            // userReviews.forEach(i => rate += i.rateing);
            // console.log(rate);
            // console.log(avg);

            this.user.rating = avg;
        });



        // let restofUserReviews = this.reviewList.filter(i => i != this.user.id)
        // console.log(this.reviewList);
        // console.log(listLength);
        // this.reviewList.forEach(i => rate += i.rateing);
        // userReviews.forEach(i => { rate += i.rateing });
        // runInAction(() => {
        // });
        // console.log(avg);
        // console.log(rate);
    };

    // deleteProfile(id) {
    //     let find = this.list.find(i => i.id === id)
    //     if (find) {
    //         this.list.splice(find, 1)
    //     }
    // }
}