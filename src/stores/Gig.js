import { observable, makeObservable, action } from 'mobx'
import axios from 'axios'
import { configure } from 'mobx';

configure({ enforceActions: "observed" })

export default class Gig {
    id
    status
    requestorID
    supplierID
    category
    description
    created
    dueDate
    expirationDate
    location
    cost
    distance

    constructor(_id, _status, _gigMakerID, _gigTakerID, _category, _description, _created, _dueDate, _expirationDate, _locationName, _locationLatitude, _locationLongitude, _cost, _distance) {
        this.id = _id
        this.status = _status
        this.gigMakerID = _gigMakerID
        this.gigTakerID = _gigTakerID
        this.category = _category
        this.description = _description
        this.created = _created
        this.dueDate = _dueDate
        this.expirationDate = _expirationDate
        this.locationName = _locationName
        this.locationLatitude = _locationLatitude
        this.locationLongitude = _locationLongitude
        this.cost = _cost
        this.distance = _distance

        makeObservable(this, {
            id: observable,
            status: observable,
            gigMakerID: observable,
            gigTakerID: observable,
            category: observable,
            description: observable,
            created: observable,
            dueDate: observable,
            expirationDate: observable,
            locationName: observable,
            locationLatitude: observable,
            locationLongitude: observable,
            status: observable,
            cost: observable,
            distance: observable,
            getLocation: action
        })
    }

    getLocation() {

    }

}

