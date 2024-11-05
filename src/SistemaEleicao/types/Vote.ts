import { User } from "./User";

export class Vote {
    constructor(
        private Voter: User,
        private Candidate: User
    ){}
    
    getCandidate(): User{
        return this.Candidate
    }

    getVoter(): User{
        return this.Voter
    }
}