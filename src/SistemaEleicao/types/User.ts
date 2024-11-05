import { Poll } from "./Poll";
export class User{
    constructor (
        private Id:number,
        public name: string
    ){}

    voteInAPoll(Poll:Poll, Candidate: User):void {
        Poll.AddVote(this, Candidate)
    }
}