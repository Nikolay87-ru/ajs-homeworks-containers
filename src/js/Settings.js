export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ["theme", "dark"],
      ["music", "trance"],
      ["difficulty", "easy"],
    ]);
    this.userSettings = new Map();
  }

  setSetting(name, value) {
    const defaultValues = {
      theme: ["dark", "light", "gray"],
      music: ["trance", "pop", "rock", "chillout", "off"],
      difficulty: ["easy", "normal", "hard", "nightmare"],
    };

    if (!defaultValues[name]) {
      throw new Error(`Invalid setting name: ${name}`);
    }

    if (!defaultValues[name].includes(value)) {
      throw new Error(`Invalid value for ${name}: ${value}`);
    }

    this.userSettings.set(name, value);
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
