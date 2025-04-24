import Team from "../Team.js";

test("should add hero to team", () => {
  const team = new Team();
  const hero = { name: "Варвар", health: 90 };

  team.add(hero);

  expect(team.toArray()).toEqual([hero]);
});

test("should throw error when add same hero to team", () => {
  const team = new Team();
  const hero = { name: "Варвар", health: 90 };

  team.add(hero);

  expect(() => team.add(hero)).toThrow("Этот герой уже присутствует в команде");
});

test("should add some heroes in team without duplication", () => {
  const team = new Team();
  const hero1 = { name: "Варвар", health: 90 };
  const hero2 = { name: "Волшебница", health: 50 };

  team.addAll(hero1, hero2, hero1);

  expect(team.toArray()).toEqual([hero1, hero2]);
});

test("should convert object Set to array", () => {
  const team = new Team();
  const hero = { name: "Варвар", health: 90 };

  team.add(hero);
  const array = team.toArray();

  expect(Array.isArray(array)).toBe(true);
  expect(array).toContain(hero);
});