// @flow

// vendors
import React from 'react';

const UserView = (props) => {
    return (
        <React.Fragment>
            <h3>{'User Details:'}</h3>
            <div>
                <label>{'First Name: '}</label>
                <span>{props.userDetails.firstName}</span>
            </div>
            <div>
                <label>{'Last Name: '}</label>
                <span>{props.userDetails.lastName}</span>
            </div>
        </React.Fragment>
    );
}

export default UserView;