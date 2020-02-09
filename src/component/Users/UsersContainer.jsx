import {connect} from 'react-redux';
import Users from './Users';
import { setUsersAC, unfollowAC, followAC } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Users);