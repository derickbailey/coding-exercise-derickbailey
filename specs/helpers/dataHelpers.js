"use strict";
const Readable = require("stream").Readable;

function twoTeamsWithScores(){

  const r = new Readable();
  r.push("Team A 3, Team B 2");
  r.push(null);

  return r;
}

module.exports = {
  twoTeamsWithScores
};
