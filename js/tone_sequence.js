const Master = require("Tone").Master;
const Meter = require("Tone").Meter;
const Panner = require("Tone").Panner;
const Sequence = require("Tone").Sequence;
const Synth = require("Tone").Synth;
const Reverb = require("Tone").Freeverb;

class ToneSequence {
  constructor(volume, attack, decay, sustain) {

    this.meter = new Meter();
    // TODO: make an interface for this
    const reverbConfig = {
      "decay": 2,
      "roomSize": 0.8,
      "wet": 0.8
    };

    // TODO: make an interface for this
    const panConfig = 0.5;

    // TODO: make an interface for this
    const noteInterval = "8n";

    // TODO: make an interface for this
    const noteSequence = [
      "E2",
      "E2",
      "E2",
      "E2",
      "E2",
      "E2",
      "E2",
      "E2",
      "E4",
      "F#4",
      "D4",
      "A3"
    ];
    const synth = new Synth(config.synth);
    const reverb = new Reverb(reverbConfig);
    const panner = new Panner(panConfig).chain(reverb, Master);

    synth.connect(panner);
    synth.connect(this.meter);
    synth.volume.value = volume;

    this.sequence = new Sequence((time, note) => {
      synth.triggerAttackRelease(note, noteInterval, time);
    }, noteSequence, noteInterval);
  }

  getLevel() {
    return this.meter.getLevel();
  }

  start(when) {
    this.sequence.start(when);
  }

  stop() {
    this.sequence.stop();
  }
}

module.exports = ToneSequence;
