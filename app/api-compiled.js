'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var reposForUser = function reposForUser(username) {
	var url = 'https://api.github.com/users/' + username + '/repos';

	return fetch(url).then(function (response) {
		return response.json();
	});
};

var gitHubUsers = function gitHubUsers() {
	return fetch('https://api.github.com/users').then(function (response) {
		return response.json();
	});
};

exports.reposForUser = reposForUser;
exports.gitHubUsers = gitHubUsers;

//# sourceMappingURL=api-compiled.js.map