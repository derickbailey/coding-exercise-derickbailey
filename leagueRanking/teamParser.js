class TeamParser {

  constructor(stream){
    this.stream = stream;
  }

  async getTeams(cb){
    const streamData = await this.getStreamData();
    
    const teamLines = streamData.split("\n");

    const teams = teamLines.reduce((teams, row) => {
      const teamList = row.split(",");
      teams.push[{}];
      return teams;
    }, []);

    return teams;
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

}

module.exports = TeamParser;
