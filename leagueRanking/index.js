"use strict";

const fs = require("fs");
const GameParser = require("./gameParser");
const GameRankCalculator = require("./gameRankCalculator");
const LeaguePointsCalculator = require("./leaguePointsCalculator");
const LeagueRankCalculator = require("./leagueRankCalculator");
const LeagueRankReporter = require("./leagueRankReporter");

const file = process.argv[2];

async function run(){
  const fileStream = fs.createReadStream(file);
  const gameParser = new GameParser(fileStream);
  const games = await gameParser.getGames();

  const gameRanks = new GameRankCalculator(games);
  const rankedGames = gameRanks.rankGames();

  const leaguePointsCalc = new LeaguePointsCalculator(rankedGames);
  const leaguePoints = leaguePointsCalc.sumUp();

  const rankCalc = new LeagueRankCalculator(leaguePoints);
  const rankedTeams = rankCalc.rank();

  const reporter = new LeagueRankReporter(rankedTeams);
  reporter.report();
}

run();
