var reposForUser = function(username){
	let url = `https://api.github.com/users/${username}/repos`;
	
	return fetch(url).then(response => response.json());	
}

var gitHubUsers = function(){
	return fetch('https://api.github.com/users').then(response => response.json());
}

export { reposForUser }
export { gitHubUsers }