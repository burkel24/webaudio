export class BaseVolueNode {
  public output: GainNode;
  public isMuted: boolean;
  private _gain = .75;

  constructor(protected context: AudioContext) {
    this.output = this.context.createGain();
    this.output.gain.value = 0;
    this.output.connect(this.context.destination);
  }

  public toggleMute() {
    if (this.isMuted) {
      this.output.gain.value = this._gain;
      this.isMuted = false;
    } else {
      this.output.gain.value = 0;
      this.isMuted = true;
    }
  }

  set gain(newGain: number) {
    newGain = newGain > 1 ? 1 : newGain;
    newGain = newGain < 0 ? 0 : newGain
    this._gain = this.output.gain.value = newGain;
  }
}
