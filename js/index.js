const Slider = require('./slider');
const ToneSequence = require('./tone_sequence');

class App {
  constructor() {
    this.volumeSlider.init();
    this.volumeElem.addEventListener("sliderChange", (event) => {
      this.onVolumeChange(event);
    });
    this.attackSlider.init();
    this.attackElem.addEventListener("sliderChange", (event) => {
      this.onAttackChange(event);
    });
    this.decaySlider.init();
    this.decayElem.addEventListener("sliderChange", (event) => {
      this.onDecayChange(event);
    });
    this.sustainSlider.init();
    this.sustainElem.addEventListener("sliderChange", (event) => {
      this.onSustainChange(event);
    });
    this.startButtonElem.addEventListener("click", (event) => {
      console.log("start");
      this.toneSequence.start();
    });
    this.stopButtonElem.addEventListener("click", (event) => {
      console.log("stop");
      this.toneSequence.stop();
    });
    this.toneSequence = new ToneSequence(
      this.volumeValue,
      this.attackValue,
      this.decayValue,
      this.sustainValue
    );
  }

  onVolumeChange(event) {
    this.synth.volume.value = this.volumeValue;
  }

  onAttackChange(event) {
    this.envelope.attack = this.attackValue;
  }

  onDecayChange(event) {
    this.envelope.decay = this.decayValue;
  }

  onSustainChange(event) {
    this.envelope.sustain = this.sustainValue;
  }

  get envelope() {
    return this.synth.envelope;
  }

  get synth() {
    return this.toneSequence.synth;
  }

  get startButtonElem() {
    return document.querySelector("#start-button");
  }

  get stopButtonElem() {
    return document.querySelector("#stop-button");
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
