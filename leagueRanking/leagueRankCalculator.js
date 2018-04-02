"use strict";

class LeagueRankCalculator {

  constructor(teams){
    this.teams = teams;
  }

  rank(){
    const teamList = Object
      .keys(this.teams)
      .map((teamName) => {
        return this.teams[teamName];
      });

    const orderedTeams = teamList.sort(this.rankSorter);

    var currentRank = 0;
    var priorRank = 0;
    return orderedTeams.map((team, index, teams) => {
      currentRank += 1;
      var rank;

      const priorTeam = teams[index-1];
      if (priorTeam && (priorTeam.leaguePoints === team.leaguePoints)){
        rank = priorRank;
      } else {
        rank = currentRank;
      }

      priorRank = rank;
      return {...team, rank: rank};
    });
  }

  rankSorter(team2, team1){
    if (team1.leaguePoints > team2.leaguePoints) {
      return 1;
    }

    if (team1.leaguePoints < team2.leaguePoints) {
      return -1;
    }

    if (team1.name < team2.name) {
      return 1;
    }

    if (team1.name > team2.name) {
      return -1;
    }

    return 0;
  }

}

module.exports = LeagueRankCalculator;
