"use strict";
const Readable = require("stream").Readable;

function oneGame(){
  const r = new Readable();
  r.push("Team A 3, Team B 2");
  r.push(null);

  return r;
}

function twoGames(){
  const r = new Readable();
  r.push("Team A 3, Team B 2\n");
  r.push("Team C 2, Team D 0\n");
  r.push(null);

  return r;
}

module.exports = {
  oneGame, twoGames
};
