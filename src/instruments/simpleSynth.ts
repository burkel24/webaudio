import { BaseInstrument } from './baseInstrument';

export class SimpleSynth extends BaseInstrument {
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
