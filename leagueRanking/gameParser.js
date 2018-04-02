const nameScoreSplit = RegExp(/(.+)(\d+)/);

class TeamParser {

  constructor(stream){
    this.stream = stream;
  }

  async getGames(cb){
    const streamData = await this.getStreamData();
    const teamLines = streamData.split("\n");

    return teamLines.reduce((games, row) => {
      const teamList = row.split(",").map(this.parseTeam);

      const game = {
        team1: teamList[0],
        team2: teamList[1]
      };
      games.push(game);

      return games;
    }, []);
  }

  async getStreamData(){
    return new Promise((res, rej) => {
      var teamData = "";

      this.stream.on("data", (data) => {
        teamData += data;
      });

      this.stream.on("end", () => {
        res(teamData);
      });

      this.stream.on("error", (err) => {
        rej(err);
      });
    });
  }

  parseTeam(teamData){
    const parts = nameScoreSplit.exec(teamData);
    if (!parts){ return {}; }

    const team = {
      name: parts[1].trim(),
      score: parseInt(parts[2], 10)
    };

    return team;
  }

}

module.exports = TeamParser;
