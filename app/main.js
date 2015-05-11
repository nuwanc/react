import 'fetch';
import React from 'react';
import RepositoryList from './repository-list';
import GitHubUserList from './user-list'


class RepoListApp extends React.Component {
	render() {
		return (
			<div>
				<h2>open sauce</h2>
				<RepositoryList/>
			</div>
		);
	}
}

class UserListApp extends React.Component {
	render() {
		return (
			<div>
				<h2>github users</h2>
				<GitHubUserList/>
			</div>
		);
	}
}

React.render(<UserListApp/>,document.getElementById('userList'));
React.render(<RepoListApp/>,document.getElementById('repoList'));