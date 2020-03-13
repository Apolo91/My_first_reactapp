import React from 'react'
import {connect} from 'react-redux';
import Users from './Users';
import { unfollow, follow, setCurrentPage, toogleFollowingProgress,getUsers} from '../../redux/users-reducer';
import CircularIndeterminate from '../common/preloader/CircularIndeterminate';


class UsersApiComponent extends React.Component {

    componentDidMount() { 
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize);
        this.props.setCurrentPage(pageNumber);      
    }
    render() {
        return <>
        {this.props.isFetching ? <CircularIndeterminate/> : null }
        <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}   
        currentPage={this.props.currentPage}
        followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress
    }
}

export default connect(mapStateToProps,{follow, unfollow, setCurrentPage, toogleFollowingProgress,getUsers})(UsersApiComponent);