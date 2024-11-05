import { User } from "./User";

export class Vote {
    constructor(
        public Voter: User,
        public Candidate: User
    ){}
}