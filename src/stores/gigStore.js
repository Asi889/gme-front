import { observable, action, computed, makeObservable, runInAction } from 'mobx'
import Gig from './Gig'
import axios from 'axios'
// import data from '../gig.json'
import authReducer from '../services/authReducers';
import { getFeedGigs } from '../services/getFeedGigs'
// import { applyToGig } from "../routes/applyToGig";
import { distanceCalc } from '../services/distanceCalc';
import { configure } from 'mobx';

configure({ enforceActions: "observed" })
// import useGeolocation from 'react-hook-geolocation'
// import { getFeedGigs } from '../services/getFeedGigs'
// import { applyToGig } from '../services/applyToGig';

const authManager = new authReducer()

export default class GigStore {
    gigListAr = []

    constructor() {
        makeObservable(this, {
            gigListAr: observable,
            numberOfGigs: computed,
            getGigList: action,
            apply: action,
            addNewGig: action,
            updateGig: action,
            finishStatus: action,
        })
    }
    get numberOfGigs() {
        return this.gigListAr.length
    }
    async apply(gigId, userId) {
        try {
            const token = authManager.getToken();
            await axios.get(`${process.env.REACT_APP_SERVER_URL}/applyToGig/${gigId}`, { headers: { "x-auth-token": token } })
            // console.log(update);

            runInAction(() => {
                let updatedGig1 = this.gigListAr.find(i => i.id === gigId)
                console.log(updatedGig1);
                updatedGig1.status = "on process"
                updatedGig1.gigTakerID = userId
            });


        } catch (error) {
            alert(error)
        };
    };


    async getGigList() {
        const token = authManager.getToken();
        const gigs = await getFeedGigs(token);

        let userLat
        let userLon;

        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser')
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                // console.log(position);
                userLat = position.coords.latitude;
                userLon = position.coords.longitude;
                // console.log(userLat)
                // console.log(userLon)
                const temp = [];
                gigs.forEach(g => {
                    // console.log(g);
                    // console.log("location:", g.location.latitude, userLat, g.location.longitude, userLon)
                    const distance = distanceCalc(g.location.latitude, userLat, g.location.longitude, userLon)
                    const gig = new Gig(g._id, g.status, g.gigMakerID, g.gigTakerID, g.category, g.description, g.created, g.dueDate, g.expirationDate, g.location.name, g.location.latitude, g.location.longitude, g.cost, distance)
                    temp.push(gig)
                });

                runInAction(() => {
                    this.gigListAr = temp
                });
            });
        };
    };

    async addNewGig(category, description, created, dueDate, expirationDate, nameLocation, cord, cost) {
        const token = authManager.getToken();
        const config = {
            headers: { "x-auth-token": token }
        };

        const location = {
            name: nameLocation,
            latitude: cord.lat,
            longitude: cord.lng

        };

        const bodyParameters = { category, description, created, dueDate, expirationDate, location, cost };

        const newGig = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/newGig`,
            bodyParameters,
            config
        );
        const newObj = new Gig(newGig.data._id, newGig.data.status, newGig.data.gigMakerID, newGig.data.gigTakerID, newGig.data.category, newGig.data.description, newGig.data.created, newGig.data.dueDate, newGig.data.expirationDate, newGig.data.location.name, newGig.data.location.latitude, newGig.data.location.longitude, newGig.data.cost,)

        runInAction(() => {
            this.gigListAr = [...this.gigListAr, { ...newObj }]
        });

    };

    async updateGig(category, description, created, dueDate, expirationDate, address, cord, status, cost, gigId) {

        const token = authManager.getToken()
        const config = {
            headers: { "x-auth-token": token }
        }

        // console.log(address);
        const location = {
            name: address,
            latitude: cord.lat,
            longitude: cord.lng
        };

        await axios.put(`${process.env.REACT_APP_SERVER_URL}/updateGig`, { category, description, created, dueDate, expirationDate, location, cord, status, cost, gigId }, { headers: { "x-auth-token": token } })
        
         runInAction(()=>{
             let updatedGig = this.gigListAr.find(i => i.id === gigId)
            updatedGig.category = category;
            updatedGig.description = description;
            updatedGig.created = created;
            updatedGig.dueDate = dueDate;
            updatedGig.expirationDate = expirationDate;
            updatedGig.locationName = address;
            updatedGig.locationLatitude = cord.lat;
            updatedGig.locationLongitude = cord.lng;
            updatedGig.status = status;
            updatedGig.cost = cost;
         })
        // updatedGig.gigId = gigId;
    }

    async finishStatus(id) {
        try {
            const token = authManager.getToken()
            
            await axios.get(`${process.env.REACT_APP_SERVER_URL}/finishGig/${id}`, { headers: { "x-auth-token": token } })

            runInAction(() => {
                let updatedGig = this.gigListAr.find(i => i.id === id);
                updatedGig.status = "completed!";
            });


        } catch (error) {
            alert(error)
        }
    }



}