function sum(points) {
  return points.reduce((s, p) => (Number.isFinite(p) ? s + p : s), 0);
}

export class Gentleman {
  constructor(name, idx) {
    this.name = name;
    this.idx = idx;
    this.winner = `img/avatars/${name}_Win.png`;
    this.neutral = `img/avatars/${name}_Same.png`;
    this.loser = `img/avatars/${name}_Loss.png`;
    this.avatar = this.neutral;
    this.points = [];
  }
  total(round, comp) {
    return sum(this.points.slice(0, Number.isFinite(comp) ? comp : round + 1));
  }
  diff(round, comp) {
    return sum(this.points.slice(comp, round + 1));
  }
}
