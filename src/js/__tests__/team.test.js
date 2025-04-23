import Team from "../team.js";

test("should add hero to team", () => {
  const team = new Team();
  const hero = { name: "Варвар", health: 90 };

  team.add(hero);

  expect(team.toArray()).toEqual([hero]);
});

