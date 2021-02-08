import { observable, makeObservable, action, computed, configure, runInAction } from 'mobx';
import { getReviews } from '../services/getReviews'

import axios from "axios";
import authReducer from '../services/authReducers'
const authManager = new authReducer();
// import Review from "./Review";
// import { configure } from 'mobx';

configure({ enforceActions: "observed" })








export default class DarkTheme {
    regular = "regualr"
    dark = "dark"
    theme = false
    constructor() {
        makeObservable(this, {
            regular: observable,
            dark: observable,
            theme: observable,
            changeTheme: action
        });
    };
    changeTheme() {
        runInAction(() => {
            this.theme = !this.theme
        })

    };






}