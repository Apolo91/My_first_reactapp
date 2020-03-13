import * as axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:process.env.REACT_APP_BASE_URL,   
    headers:{
            "API-KEY": process.env.REACT_APP_API_KEY
        }
});

export const usersAPI = {
    getUsers(currentPage=1, pageSize =10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {return response.data;});
    },
    followUserRequest (id) {
        return instance.post(`follow/${id}`, {},);
    },
    unfollowUserRequest (id) {
        return instance.delete(`follow/${id}`);
    },  
    profileGet (userId)  {
        return instance.get(`profile/`+ userId)
}
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    } 
    
}


