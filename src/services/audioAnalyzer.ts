export class AudioAnalyzer {
  private ctx: AudioContext;
  private analyzerNode: AnalyserNode;
  private sourceNode: MediaElementAudioSourceNode;

  constructor(audioElement: HTMLAudioElement) {
    this.ctx = new AudioContext();
    this.analyzerNode = this.ctx.createAnalyser();
    this.sourceNode = this.ctx.createMediaElementSource(audioElement);

    this.analyzerNode.minDecibels = -60;
    this.analyzerNode.smoothingTimeConstant = 0.8;

    this.sourceNode.connect(this.analyzerNode);
    this.sourceNode.connect(this.ctx.destination);
  }

  getFft() {
    const freqData = new Uint8Array(this.analyzerNode.frequencyBinCount);
    this.analyzerNode.getByteFrequencyData(freqData);

    return freqData;
  }
}
