"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poll = void 0;
const Vote_1 = require("./Vote");
class Poll {
    constructor(Id, Name, Candidates, Voters = [], Votes = [], Winners = [], isFinished = false) {
        this.Id = Id;
        this.Name = Name;
        this.Candidates = Candidates;
        this.Voters = Voters;
        this.Votes = Votes;
        this.Winners = Winners;
        this.isFinished = isFinished;
    }
    AddVote(Voter, Candidate) {
        if (this.isFinished) {
            console.error("Esta enquete já acabou");
            return;
        }
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
        let newVote = new Vote_1.Vote(Voter, Candidate);
        this.Votes.push(newVote);
        this.Voters.push(Voter);
        console.log(`O usuario ${Voter.name} votou em ${Candidate.name}`);
    }
    finishPoll() {
        this.isFinished = true;
        let tempVotesForWinner = 0;
        this.Candidates.forEach((Candidate) => {
            let votesForThisCandidate = this.Votes.filter((Vote) => {
                return Candidate.name == Vote.getCandidate().name;
            });
            if (votesForThisCandidate.length == tempVotesForWinner) {
                this.Winners.push(Candidate);
                tempVotesForWinner = votesForThisCandidate.length;
            }
            if (votesForThisCandidate.length > tempVotesForWinner) {
                this.Winners = [];
                this.Winners.push(Candidate);
                tempVotesForWinner = votesForThisCandidate.length;
            }
        });
    }
    showResults() {
        if (!this.isFinished) {
            console.error("Esta enquete ainda não acabou");
            return;
        }
        let showString = this.Candidates.map((Candidate) => {
            let votesForThisCandidate = this.Votes.filter((Vote) => {
                return Candidate.name == Vote.getCandidate().name;
            });
            let percOfTotalOfVotes = (votesForThisCandidate.length / this.Votes.length) * 100;
            return `O Canditado ${Candidate.name} Recebeu ${votesForThisCandidate.length} (${percOfTotalOfVotes}%)`;
        });
        console.log(showString.join('\n'));
        let winnerString;
        let winnersNameArray = this.Winners.map((Winner) => {
            return Winner.name;
        });
        winnerString = winnersNameArray.join(', ');
        console.log(`e ao total ${this.Voters.length} pessoas votaram e o vencedor da eleição foi ${winnerString};`);
    }
}
exports.Poll = Poll;
