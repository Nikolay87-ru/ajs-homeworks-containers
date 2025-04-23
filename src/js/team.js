class Team {
  constructor() {
    this.members = new Set();
  }

  add(hero) {
    if (this.members.has(hero)) {
      throw new Error("Этот герой уже присутствует в команде");
    }
    this.members.add(hero);
  }

  addAll(...heroes) {
    heroes.forEach((hero) => this.members.set(hero));
  }

  toArray() {
    return Array.from(this.members);
  }
}

export default Team;