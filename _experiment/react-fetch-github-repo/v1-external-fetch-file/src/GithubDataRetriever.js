var test = [];

jQuery.githubUserRepositories = function(username, callback) {
	jQuery.getJSON("https://api.github.com/users/" + username + "/repos?callback=?", callback);
}

jQuery.fn.loadRepositores = function(username) {

	var target = this;
	$.githubUserRepositories(username, function(data) {
		var repos = data.data;
		sortByNumberOfWatchers(repos);

		$(repos).each(function() {
			test.push({
			  	id: this.id,
				name: this.name,
				description: this.description,
				created_at: moment(this.created_at).format('DD-MM-YYYY'),
				updated_at: moment(this.updated_at).format('DD-MM-YYYY'),
				language: this.language,
				open_issues: this.open_issues,
				watchers: this.watchers,
				url: this.svn_url
			});
		});
	});

	function sortByNumberOfWatchers(repos) {
		repos.sort(function(a,b) {
			return b.watchers - a.watchers;
		});
	}
};
