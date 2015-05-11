import React from 'react';
import {gitHubUsers} from './api';
import User from './user';

export default class GitHubUserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {users:[]};
    }

    componentDidMount() {
        gitHubUsers().then((users)=>{
            this.setState({users:users});
        });
    }

    render() {
        var users = this.state.users.map((user)=> {
            return <li key={user.id}><User usr={user}/></li>;
        });

        return <ul>{users}</ul>
    }
}

