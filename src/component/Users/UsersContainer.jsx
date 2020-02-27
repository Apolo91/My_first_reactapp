import React from 'react'
import {connect} from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import { setUsers, unfollow, follow, setCurrentPage, setTotalUsersCount,toogleIsFetching } from '../../redux/users-reducer';
import CircularIndeterminate from '../common/preloader/CircularIndeterminate';

class UsersApiComponent extends React.Component {

    componentDidMount() {
        this.props.toogleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toogleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toogleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toogleIsFetching(false);
                this.props.setUsers(response.data.items);
            });

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
        isFetching: state.UsersPage.isFetching
    }
}

export default connect(mapStateToProps,
    {   follow, 
        unfollow, 
        setUsers, 
        setCurrentPage, 
        setTotalUsersCount, 
        toogleIsFetching
    })(UsersApiComponent);