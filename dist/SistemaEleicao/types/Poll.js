"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poll = void 0;
const Vote_1 = require("./Vote");
class Poll {
    constructor(Id, Name, Candidates, Voters = [], Votes = []) {
        this.Id = Id;
        this.Name = Name;
        this.Candidates = Candidates;
        this.Voters = Voters;
        this.Votes = Votes;
    }
    AddVote(Voter, Candidate) {
        if (!this.Candidates.includes(Candidate)) {
            console.error("Este usúario não é um canditado desta eleição");
            return;
        }
        if (this.Candidates.includes(Voter)) {
            console.error("Este usúario não pode votar pois é um canditado");
            return;
        }
        if (this.Voters.includes(Voter)) {
            console.error("Este usúario não pode votar pois já votou esta enquete");
            return;
        }
        // let candidateIndex = this.Candidates.indexOf(Candidate)
        // this.Votes[candidateIndex] += 1
        // this.Voters.push(Voter)
        let newVote = new Vote_1.Vote(Voter, Candidate);
        this.Votes.push(newVote);
        this.Voters.push(Voter);
        console.log(`O usuario ${Voter} votou em ${Candidate}`);
    }
}
exports.Poll = Poll;
