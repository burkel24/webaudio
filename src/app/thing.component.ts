import { Component, OnInit } from '@angular/core';

import { SimpleSynth } from 'instruments/simpleSynth';

const INTERVAL_MS = 3000;
const PLAY_DURACTION_MS = 250;
const MAX_PITCH_HZ = 750;

@Component({
  selector: 'the-thing',
  template: `
    <button (click)="mute()">Mute</button>
  `
})
export class ThingComponent implements OnInit {
  public context: AudioContext;
  public synth: SimpleSynth;

  ngOnInit() {
    if (!AudioContext) {
      alert('Your browser isn\'t supported');
      return;
    }


    this.context = new AudioContext();
    this.synth = new SimpleSynth(this.context);
    this.synth.gain = .75;
    setInterval(() => this.playRandomPitch(), INTERVAL_MS);
  }

  playRandomPitch() {
    this.synth.setFrequency(Math.random() * MAX_PITCH_HZ);
  }

  mute() {
    this.synth.toggleMute();
  }
}
