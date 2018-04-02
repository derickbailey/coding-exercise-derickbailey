"use strict";

class LeaguePointsCalculator {

  constructor(rankedGames){
    this.games = rankedGames;
  }

  sumUp(){
    return this.games.reduce((rankedTeams, game) => {
      const team1 = this.findOrCreateRankedTeam(rankedTeams, game.team1);
      rankedTeams[team1.name] = team1;

      const team2 = this.findOrCreateRankedTeam(rankedTeams, game.team2);
      rankedTeams[team2.name] = team2;

      team1.leaguePoints += game.team1.rankPoints;
      team2.leaguePoints += game.team2.rankPoints;

      return rankedTeams;
    }, {});
  }

  findOrCreateRankedTeam(rankedTeams, teamInfo){
    var team = rankedTeams[teamInfo.name];
    if (!team){
      team = { ...teamInfo, leaguePoints: 0 };
      rankedTeams[team.name] = team;
    }
    return team;
  }

}

module.exports = LeaguePointsCalculator;
