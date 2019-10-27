class Logger {
  constructor(className) {
    this.colorPallete = [
      {background: "#003333", foreground: "#fff"},
      {background: "#004400", foreground: "#fff"},
      {background: "#0d4d4d", foreground: "#fff"},
      {background: "#116611", foreground: "#fff"},
      {background: "#226666", foreground: "#fff"},
      {background: "#2d882d", foreground: "#fff"},
      {background: "#407f7f", foreground: "#fff"},
      {background: "#550000", foreground: "#fff"},
      {background: "#552700", foreground: "#fff"},
      {background: "#55aa55", foreground: "#000"},
      {background: "#669999", foreground: "#000"},
      {background: "#801515", foreground: "#fff"},
      {background: "#88cc88", foreground: "#000"},
      {background: "#aa3939", foreground: "#fff"},
      {background: "#d46a6a", foreground: "#000"},
      {background: "#ffaaaa", foreground: "#000"}
    ];

    this.className = className;
    this.colorScheme = this.randomColorScheme;

    console.group("%cLogger", `color: ${this.textColor}; background: ${this.bgColor}`);
      console.log(`%cLogger instantiated for ${this.className}. (background: ${this.bgColor})`, `color: ${this.textColor}; background: ${this.bgColor}`);
    console.groupEnd();
  }

  log(msg) {
    console.group(`%c${this.className}`, `color: ${this.textColor}; background: ${this.bgColor}`);
      console.log(`%c${msg}`, `color: ${this.textColor}; background: ${this.bgColor}`);
    console.groupEnd();
  }

  get textColor() {
    return this.colorScheme.foreground;
  }

  get bgColor() {
    return this.colorScheme.background;
  }

  get randomColorScheme() {
    return this.colorPallete[Math.floor(Math.random() * this.colorPallete.length)];
  }
}

module.exports = Logger
