"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Poll_1 = require("./types/Poll");
const User_1 = require("./types/User");
let Daniel = new User_1.User(1, 'Daniel');
let Gabriel = new User_1.User(2, 'Gabriel');
let Moises = new User_1.User(3, 'Moises');
let Marcos = new User_1.User(4, 'Marcos');
let Presidencia = new Poll_1.Poll(1, 'presidente do brasil', [Daniel, Gabriel]);
Marcos.voteInAPoll(Presidencia, Gabriel);
Moises.voteInAPoll(Presidencia, Gabriel);
Presidencia.showResults();
Presidencia.finishPoll();
Marcos.voteInAPoll(Presidencia, Gabriel);
// console.log(JSON.stringify(Presidencia, null, 2))
console.log();
Presidencia.showResults();
