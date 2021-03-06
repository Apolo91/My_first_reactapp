import React from 'react';
import Profile from "./Profile";
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import {getUserProfile,getStatus,updateStatus} from '../../redux/profile-reducer'
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    
    componentDidMount(){ 
       
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 5913;
        };
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
        }
    render() {
        
        return(
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}  />            
        );
    }
}
let mapStateToProps = (state) => ({
    profile : state.ProfilePage.profile,
    status: state.ProfilePage.status
    
});

export default compose(
    connect(mapStateToProps,{getUserProfile, getStatus,updateStatus}),
    withRouter,
    withAuthRedirect
    )
(ProfileContainer)
