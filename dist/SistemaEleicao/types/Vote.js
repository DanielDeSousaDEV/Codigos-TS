"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vote = void 0;
class Vote {
    constructor(Voter, Candidate) {
        this.Voter = Voter;
        this.Candidate = Candidate;
    }
    getCandidate() {
        return this.Candidate;
    }
    getVoter() {
        return this.Voter;
    }
}
exports.Vote = Vote;
