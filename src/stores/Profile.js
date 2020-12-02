import { observable, makeObservable, action, computed } from 'mobx'





export default class Profile {
    id
    firstName
    lastName
    email
    // AvgRating
    // reviewList = []
    // myGigList = []
    // mySupplierList = []
    // requestorGigID
    constructor(id, firstName, lastName, email) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        // this.AvgRating = AvgRating
        // this.requestorGigID = ""
        makeObservable(this, {
            id: observable,
            firstName: observable,
            lastName: observable,
            email: observable,
            // AvgRating: observable,
            // reviewList: observable,
            // myGigList: observable,
            // mySupplierList: observable,
            
        })

    }

    
}