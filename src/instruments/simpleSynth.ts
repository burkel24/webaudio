import { Instrument } from './instrument';

export class SimpleSynth extends Instrument {
  private source: OscillatorNode;

  constructor(ctx: AudioContext) {
    super(ctx);
    this.source = this.context.createOscillator();
    this.source.connect(this.output);
    this.source.start();
  }

  setFrequency(frequency: number) {
    this.source.frequency.value = frequency;
  }
}
