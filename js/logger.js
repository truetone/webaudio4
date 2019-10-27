class Logger {
  constructor(className) {
    const colorPallete = [
      "#003333",
      "#004400",
      "#0D4D4D",
      "#116611",
      "#226666",
      "#2D882D",
      "#407F7F",
      "#550000",
      "#552700",
      "#55AA55",
      "#669999",
      "#801515",
      "#88CC88",
      "#AA3939",
      "#D46A6A",
      "#FFAAAA"
    ];

    this.className = className;
    this.textColor = colorPallete[Math.floor(Math.random() * colorPallete.length)];

    console.group("%cLogger", `color: ${this.textColor}`);
      console.log(`%cLogger instantiated for ${this.className}.`, `color: ${this.textColor}`);
    console.groupEnd();
  }

  log(msg) {
    console.group(`%c${this.className}`, `color: ${this.textColor}`);
      console.log(`%c${msg}`, `color: ${this.textColor}`);
    console.groupEnd();
  }
}

module.exports = Logger
