const Master = require("Tone").Master;
const Meter = require("Tone").Meter;
const Panner = require("Tone").Panner;
const Sequence = require("Tone").Sequence;
const Synth = require("Tone").Synth;
const Reverb = require("Tone").Freeverb;
const Transport = require("Tone").Transport;

class ToneSequence {
  constructor(volume, attack, decay, sustain) {
    console.group("ToneSequence");
      console.log(volume)
      console.log(attack)
      console.log(decay)
      console.log(sustain)
    console.groupEnd();
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
    const noteInterval = "1n";

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
    console.log(this.synth.envelope);
    // const reverb = new Reverb(reverbConfig);
    // const panner = new Panner(panConfig).chain(reverb, Master);

    // this.synth.connect(panner);
    // this.synth.connect(this.meter);
    this.synth.volume.value = volume;

    this.sequence = new Sequence((time, note) => {
      this.synth.triggerAttackRelease(note, noteInterval, time);
    }, noteSequence, noteInterval);
  }

  getLevel() {
    return this.meter.getLevel();
  }

  start(when=0) {
    console.group("ToneSequence");
      console.log("starting")
      console.log(this.sequence)
    console.groupEnd();
    Transport.start();
    this.sequence.start(when);
  }

  stop() {
    console.group("ToneSequence");
      console.log("stopping")
    console.groupEnd();
    Transport.stop();
    this.sequence.stop();
  }
}

module.exports = ToneSequence;
