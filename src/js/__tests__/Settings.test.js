import Settings from "../Settings";

describe("Settings", () => {
  let settings;

  beforeEach(() => {
    settings = new Settings();
  });

  test("should have default settings", () => {
    expect(settings.settings.get("theme")).toBe("dark");
    expect(settings.settings.get("music")).toBe("trance");
    expect(settings.settings.get("difficulty")).toBe("easy");
  });

  test("should change settings with valid values", () => {
    settings.setSetting("theme", "light");
    settings.setSetting("music", "pop");
    settings.setSetting("difficulty", "normal");

    expect(settings.settings.get("theme")).toBe("light");
    expect(settings.settings.get("music")).toBe("pop");
    expect(settings.settings.get("difficulty")).toBe("normal");
  });

  test("should throw error for invalid setting name", () => {
    expect(() => {
      settings.setSetting("invalidName", "dark");
    }).toThrow("Invalid setting name");
  });

  test("should throw error for invalid setting value", () => {
    expect(() => {
      settings.setSetting("theme", "invalidValue");
    }).toThrow("Invalid value for theme: invalidValue");
  });

  test("should combine default and user settings", () => {
    settings.setSetting("theme", "gray");

    expect(settings.settings.get("theme")).toBe("gray");
    expect(settings.settings.get("music")).toBe("trance");
    expect(settings.settings.get("difficulty")).toBe("easy");
  });
});
