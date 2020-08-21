const DATA = `GT 2019,,MAX,Martin,Bo,Hinz,Fiji,Manu,Felix,Swen,Pat,Jones
Aim for the Head,D,10,6,0,6,2,4.5,0,6,0,0
Bring em Down,F,10,3,2,7,9,5,1,1,4,12
Robin Hood,R,12,12,3,2,5,7,1,4,1,9
Gambling Addiction,F,10,1,4,5,7,12,2,0,9,3
Lord of the Ring,R,12,5,1,3,2,12,7,1,4,9
Total Exhaustion,R,12,7,1,5,1,3,2,4,9,12
Sexy Maserati,R,12,2,12,9,7,3,5,0,1,4
Beer-athlon,R,12,9,3,7,2,4,1,0,12,5
Quick maths,R,12,3,4,7,12,1,2,5,#N/A,9
Peasant's cunning,R,12,0,2,5,9,7,0,3,12,4
Communem,D,10,4,4,3,4,6,4,3,#N/A,3
Timeline,R,12,1,1,2,0,0,1,1,#N/A,2
Flunky Circle,R,12,7,3,12,9,4,1,1,5,2
Ahoi Captain,D,10,6,6,10,10,6,6,6,6,6
Breakfast for Champions,I/O,10,10,10,10,10,10,10,0,10,10
Mac Moneysac,R,12,5,12,4,1,7,9,2,3,0
Suit Up!,R,12,4,0,1,5,9,7,12,3,2
Ungentlemenlike behaviour,D,10, , , , , , , , ,
Another brick for the wall,R,12,0,4,7,0,5,0,0,9,12
Lyric,R,12,0,3,12,0,9,5,0,7,
,,226,85,75,117,96,114.5,64,49,95,109
`;

import { Gentleman, Round } from ".";

export class Score {
  constructor(raw) {
    const [header, ...lines] = raw.split("\n").slice(0, -2);
    const names = header.split(",").slice(3);
    this.gents = names.map((name, idx) => new Gentleman(name, idx));
    const rounds = [];
    const points = [];
    let last = 0;
    for (let idx = 0; idx < lines.length; idx += 1) {
      const line = lines[idx];
      let [name, typ, max, ...score] = line.split(",");
      const finished = score.includes("");
      if (finished) {
        last = idx;
      }
      score = score.map(Number);

      for (const i in score) {
        this.gents[i].points.push(score[i]);
      }
      rounds.push(new Round(name, idx, typ, Number(max), score));
      points.push(score);
    }
    this.last = last;
    this.rounds = rounds;
    this.points = points;
  }
}

export function update() {
  return new Score(DATA);
}
