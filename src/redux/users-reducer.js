const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // { id: 1, photoURL: 'https://cs8.pikabu.ru/post_img/2017/01/24/8/1485265069188571085.jpg', followed: true, fullName: 'Dmitriy', status: 'Hi my friend\'s', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 2, photoURL: 'https://cs8.pikabu.ru/post_img/2017/01/24/8/1485265069188571085.jpg', followed: false, fullName: 'Andrey', status: 'Hello world', location: { city: 'Krasnodar', country: 'Russia' } },
        // { id: 3, photoURL: 'https://cs8.pikabu.ru/post_img/2017/01/24/8/1485265069188571085.jpg', followed: true, fullName: 'Konstantin', status: 'I\'m to working', location: { city: 'Moskow', country: 'Russia' } },
        // { id: 4, photoURL: 'https://cs8.pikabu.ru/post_img/2017/01/24/8/1485265069188571085.jpg', followed: false, fullName: 'Il\'ya', status: 'Hello world', location: { city: 'Krasnodar', country: 'Russia' } }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;