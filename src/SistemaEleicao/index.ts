import { Poll } from "./types/Poll";
import { User } from "./types/User";

let Daniel = new User(
    1,
    'Daniel'
)
let Gabriel = new User(
    2,
    'Gabriel'
)
let Moises =  new User(
    3,
    'Moises'
)
let Marcos = new User(
    4,
    'Marcos'
)

let Presidencia = new Poll(
    1,
    'presidente do brasil',
    [Daniel, Gabriel],
)

Marcos.voteInAPoll(Presidencia, Gabriel)
Marcos.voteInAPoll(Presidencia, Gabriel)

console.log(JSON.stringify(Presidencia, null, 2))
console.log();