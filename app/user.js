import React from 'react';

export default class User extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.usr.id}</p>
                <p>{this.props.usr.login} </p>
                <img src={this.props.usr.avatar_url} height="50px" alt=""/>
            </div>
        );
    }
}