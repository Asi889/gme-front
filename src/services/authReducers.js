 class authReducer {

    isLoggedIn() {
        if (!this.getToken() || this.getToken() === "undefined" || this.getToken() === null) {
            // console.log("falsy");
            return false
        }
        else {
            // console.log("truthy");
            return true
        }
    }
    logIn(token) {
        localStorage.setItem("auth-token", token)
    }
    logOut() {
        localStorage.removeItem("auth-token")
        // console.log("shazam");
    }
    getToken() {
        // console.log(localStorage.getItem("auth-token"));
        return localStorage.getItem("auth-token")
    }
}

export default authReducer