import { observable, makeObservable } from 'mobx'
// import axios from 'axios'
// import { authReducer } from '../reducers/authReducers'


export default class Review {
    userId
    rating
    description
    constructor(userId, rating, description) {
        this.userId = userId
        this.rating = rating
        this.description = description

        makeObservable(this, {
            userId: observable,
            rating: observable,
            description: observable,
        })
    }
}

