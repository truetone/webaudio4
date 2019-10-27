const Master = require("Tone").Master;
const Meter = require("Tone").Meter;
const Panner = require("Tone").Panner;
const Sequence = require("Tone").Sequence;
const Synth = require("Tone").Synth;
const Reverb = require("Tone").Freeverb;
const Transport = require("Tone").Transport;
const logger = require('./logger');

class ToneSequence {
  constructor(volume, attack, decay, sustain) {
    this.logger = new logger(ToneSequence.name);
    this.log(`ToneSequence with volume: ${volume}, attack: ${attack}, decay: ${decay}, sustain: ${sustain}.`)
    this.meter = new Meter();
    this.noteInterval = "1n";

    // TODO: make an interface for this
    const reverbConfig = {
      "decay": 2,
      "roomSize": 0.8,
      "wet": 0.8
    };

    // TODO: make an interface for this
    const panConfig = 0.5;

    // TODO: make an interface for this
    const noteSequence = [
      "E4",
      "F#4",
      "D4",
      "A3"
    ];

    const synthSineConfigOne = {
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: attack,
        decay: decay,
        sustain: sustain,
        release: 1
      }
    };
    this.synth = new Synth(synthSineConfigOne).toMaster();
    const reverb = new Reverb(reverbConfig);
    const panner = new Panner(panConfig).chain(reverb, Master);

    this.synth.connect(panner);
    this.synth.connect(this.meter);
    this.synth.volume.value = volume;

    this.sequence = new Sequence((time, note) => {
      this.synth.triggerAttackRelease(note, this.noteInterval, time);
    }, noteSequence, this.noteInterval);
  }

  getLevel() {
    return this.meter.getLevel();
  }

  start(when=0) {
    this.log("starting")
    this.log(this.sequence)
    Transport.start();
    this.sequence.start(when);
  }

  stop() {
    this.log("stopping")
    Transport.stop();
    this.sequence.stop();
  }

  log(msg) {
    this.logger.log(msg);
  }
}

module.exports = ToneSequence;
