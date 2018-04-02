"use strict";

class LeagueRankReporter{

  constructor(rankedTeams){
    this.teams = rankedTeams;
  }

  report(){
    this.teams.forEach((team) => {
      console.log(`${team.rank}. ${team.name}, ${team.leaguePoints} pts`);
    });
  }

}

module.exports = LeagueRankReporter;
