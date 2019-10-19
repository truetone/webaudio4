const Slider = require('./slider');

class App {
  constructor() {
    this.volumeSlider.init();
    this.attackSlider.init();
    this.decaySlider.init();
    this.sustainSlider.init();
    this.volumeElem.addEventListener("sliderChange", (event) => {
      this.onVolumeChange(event);
    });
  }

  onVolumeChange(event) {
    console.log(event);
  }

  get volumeSlider() {
   return new Slider(this.volumeElem);
  }

  get volumeValue() {
    return this.volumeSlider.value;
  }

  get volumeElem() {
    return document.querySelector(".input-range.volume");
  }

  get attackSlider() {
   return new Slider(this.attackElem);
  }

  get attackValue() {
    return this.attackSlider.value;
  }

  get attackElem() {
    return document.querySelector(".input-range.attack");
  }

  get decaySlider() {
   return new Slider(this.decayElem);
  }

  get decayValue() {
    return this.decaySlider.value;
  }

  get decayElem() {
    return document.querySelector(".input-range.decay");
  }

  get sustainSlider() {
   return new Slider(this.sustainElem);
  }

  get sustainValue() {
    return this.sustainSlider.value;
  }

  get sustainElem() {
    return document.querySelector(".input-range.sustain");
  }
}

const app = new App();
