const Slider = require('./slider');
const ToneSequence = require('./tone_sequence');
const logger = require('./logger');
const notes = require('./notes');

class App {
  constructor() {
    this.logger = new logger(App.name);
    this.notes = notes;
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
    this.panSlider.init();
    this.panElem.addEventListener("sliderChange", (event) => {
      this.onPanChange(event);
    });
    this.noteIntervalElems.forEach((elem) => {
      elem.addEventListener("change", (event) => {
        this.onNoteIntervalChange(event);
      });
    });
    this.startButtonElem.addEventListener("click", (event) => {
      this.log("start");
      this.toneSequence.start(0, this.checkedNotes);
    });
    this.stopButtonElem.addEventListener("click", (event) => {
      this.log("stop");
      this.toneSequence.stop();
    });
    this.toneSequence = new ToneSequence(
      this.volumeValue,
      this.attackValue,
      this.decayValue,
      this.sustainValue
    );

    this.renderNotes();
  }

  renderNotes() {
    this.notes.forEach((note) => {
      this.notesContainer.innerHTML += `<li><input type="checkbox" id="note-${note}" name="note-${note}" value="${note}">
                                        <label for="note-${note}">${note}</label></li>`;
    });
  }

  onPanChange(event) {
    this.log(`Setting pan to ${this.panValue}.`);
    this.toneSequence.panValue = this.panValue;
  }

  onNoteIntervalChange(event) {
    this.log(`Setting note interval to ${this.noteIntervalValue}.`);
    this.toneSequence.noteInterval = this.noteIntervalValue;
  }

  onVolumeChange(event) {
    this.log(`Setting volume to ${this.volumeValue}.`);
    this.synth.volume.value = this.volumeValue;
  }

  onAttackChange(event) {
    this.log(`Setting attack to ${this.attackValue}.`);
    this.envelope.attack = this.attackValue;
  }

  onDecayChange(event) {
    this.log(`Setting decay to ${this.decayValue}.`);
    this.envelope.decay = this.decayValue;
  }

  onSustainChange(event) {
    this.log(`Setting sustain to ${this.decayValue}.`);
    this.envelope.sustain = this.sustainValue;
  }

  log(msg) {
    this.logger.log(msg);
  }

  get checkedNotes() {
    return [...this.checkedNoteElems].map(elem => elem.value);
  }

  get checkedNoteElems() {
    return document.querySelectorAll("input[type='checkbox']:checked");
  }

  get envelope() {
    return this.synth.envelope;
  }

  get synth() {
    return this.toneSequence.synth;
  }

  get notesContainer() {
    return document.querySelector("#notes-container");
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

  get noteIntervalElems() {
    return document.querySelectorAll("input[name=note-interval]");
  }

  get checkedNoteIntervalElem() {
    return document.querySelectorAll("input[name=note-interval]:checked")[0];
  }

  get noteIntervalValue() {
    return this.checkedNoteIntervalElem.value;
  }

  get panSlider() {
   return new Slider(this.panElem);
  }

  get panValue() {
    return this.panSlider.value;
  }

  get panElem() {
    return document.querySelector(".input-range.pan");
  }
}

const app = new App();
