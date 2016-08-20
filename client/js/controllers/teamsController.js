//teams controller
app.controller('TeamsController', function($scope, teamFactory) {
	$scope.teams = [];
	$scope.newTeam = {};

	//callback to set teams info
	function setTeams(data) {
		$scope.teams = data;
		$scope.newTeam = {};
	}

	//get all teams from factory
	teamFactory.index(setTeams);

	//add a team
	$scope.add = function() {
		teamFactory.add($scope.newTeam, setTeams);
	}

	//remove a team
	$scope.remove = function(team) {
		teamFactory.remove(team, setTeams);
	}

});