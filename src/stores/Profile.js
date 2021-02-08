import { observable, makeObservable, action, computed,configure, runInAction } from 'mobx';
import { getReviews } from '../services/getReviews'

import axios from "axios";
import authReducer from '../services/authReducers'
const authManager = new authReducer();
// import Review from "./Review";
// import { configure } from 'mobx';

configure({ enforceActions: "observed" })








export default class Profile {
    id
    firstName
    lastName
    email
    AvgRating
    reviewList = []
    myGigList = []
    // myTakerGigList = []
    // requestorGigID
    constructor(id, firstName, lastName, email, AvgRating) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.AvgRating = AvgRating
        // this.AvgRating = AvgRating
        // this.requestorGigID = ""
        makeObservable(this, {
            id: observable,
            firstName: observable,
            lastName: observable,
            email: observable,
            AvgRating: observable,
            reviewList: observable,
            myGigList: observable,
            // getReviewList: action,
            addNewReview: action,
            // addNewGig: action,
            // updateGig: action,
            // mySupplierList: observable,

        })

    }



    // async getReviewList(id) {
    //     const token = authManager.getToken();

    //     const config = {
    //         headers: { "x-auth-token": token }
    //     };

    //     const reviews = await getReviews(token);
    //     // console.log(reviews);
    //     this.reviewList = reviews;
    //     // console.log(this.reviewList);
    //     let rate = 0;
    //     let listLength = reviews.length;
    //     // console.log(listLength);
    //     reviews.forEach(i => { rate += i.rateing });
    //     let avg = Math.round(rate / listLength);
    //     runInAction(()=>{
    //         this.AvgRating = avg;
    //     });
    //     // console.log(avg);
    //     // console.log(rate);
    // }


    async addNewReview(userId, rateing, description) {
        const token = authManager.getToken();
        const config = {
            headers: { "x-auth-token": token }
        }
        const review = {
            description,
            rateing,
            user: userId
        }

        await axios.post(`${process.env.REACT_APP_SERVER_URL}/newReview`, review, config)

        this.reviewList.push(review)
    }



}