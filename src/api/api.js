import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "API-KEY": process.env.REACT_APP_API_KEY
    //    "API-KEY": "03d32e33-d998-43d1-b688-29413891213d"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => { return response.data; });
    },
    followUserRequest(id) {
        return instance.post(`follow/${id}`, {});
    },
    unfollowUserRequest(id) {
        return instance.delete(`follow/${id}`);
    },
    profileGet(userId) {
        console.warn("Obsolete method.Please profileAPI object")
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/`+ userId)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }

}


