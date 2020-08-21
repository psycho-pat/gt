import { Gentleman, Round } from ".";

export class Score {
  constructor(raw) {
    const [header, ...lines] = raw.slice(1, -2);
    const names = header.slice(3, -1);
    this.gents = names.map((name, idx) => new Gentleman(name, idx));
    console.log(this.gents);
    const rounds = [];
    const points = [];
    const linesWith0 = [
      ["Zero", "-", 0, ...new Array(this.gents.length + 1).fill(0)],
      ...lines,
    ];
    let last = null;
    for (let idx = 0; idx < linesWith0.length; idx += 1) {
      const line = linesWith0[idx];
      let [name, typ, max, ...score] = line.slice(0, -1);
      const finished = score.includes("");
      if (last === null && finished) {
        last = idx - 1;
      }
      score = score.map(Number);

      for (const i in score) {
        if (i < this.gents.length) {
          this.gents[i].points.push(score[i]);
        }
      }
      rounds.push(new Round(name, idx, typ, Number(max), score));
      points.push(score);
    }
    console.log(last);
    this.last = last === null ? rounds.length - 1 : last;
    this.rounds = rounds;
    this.points = points;
  }
}

export async function update() {
  const res = await fetch("/update");
  const json = await res.json();
  console.log(json);
  const score = new Score(json);
  console.log(score);
  return score;
}
