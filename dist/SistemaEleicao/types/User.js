"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(Id, name) {
        this.Id = Id;
        this.name = name;
    }
    voteInAPoll(Poll, Candidate) {
        Poll.AddVote(this, Candidate);
    }
}
exports.User = User;
