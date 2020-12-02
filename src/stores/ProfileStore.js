import { observable, makeObservable, action } from 'mobx'



export default class ProfileStore {
    list = []
    user = {}
    constructor() {
        makeObservable(this, {
            list: observable,
            user: observable,
            getProfileList: action
        })
    }


    async getProfileList(user) {
        const token = localStorage.getItem("auth-token");
        // const getUserProfile = await getUser(token)
        this.user = {
            token: token,
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password
        }
    }

    // async updateUserProfile(firstName, lastName) {
    //     this.user.firstName = firstName
    //     this.user.lastName = lastName
    //     const token = authManager.getToken()
    //     const config = {
    //         headers: { Authorization: `Bearer ${token}` }
    //     }
    //     const bodyParameters = { firstName, lastName }
    //     await axios.put(
    //         '/users/me',
    //         bodyParameters,
    //         config
    //     )
    // }

    // deleteProfile(id) {
    //     let find = this.list.find(i => i.id === id)
    //     if (find) {
    //         this.list.splice(find, 1)
    //     }
    // }
}