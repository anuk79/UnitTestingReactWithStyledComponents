// @flow

// vendors
import React, { Component } from 'react';

// components
import UserView from '../../../components/user/user';

// styles
import {
    LoadingSpinnerStyled,
    ErrorStyled,
} from './user.styled';

export class User extends Component {
    render() {
        const { fetching, userDetails, errorFlag } = this.props;
        let content;
        if(fetching) {
            content = <LoadingSpinnerStyled customClassName="user-loading-spinner" />
        } else if(errorFlag) {
            content = (
                <ErrorStyled>{'Some error occurred. Please try again later.'}</ErrorStyled>
            );
        } else {
            content = <UserView userDetails={userDetails} />
        }
        return content;
    }
}

export default User;