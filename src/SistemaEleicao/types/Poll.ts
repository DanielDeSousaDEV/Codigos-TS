import { User } from './User'
import { Vote } from './Vote';
export class Poll {
    constructor(
        public Id:number,
        public Name:string,
        public Candidates: User[],
        public Voters: User[] = [],
        public Votes: Vote[] = [],

    ){}

    AddVote(Voter: User, Candidate: User){
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

        let newVote = new Vote(
            Voter,
            Candidate
        );

        this.Votes.push(newVote)

        this.Voters.push(Voter)

        console.log(`O usuario ${Voter} votou em ${Candidate}`);
    
    }
}