export class AudioAnalyzer {
  private ctx: AudioContext;
  private analyzerNode: AnalyserNode;
  private sourceNode: MediaElementAudioSourceNode;

  constructor(audioElement: HTMLAudioElement) {
    //Создание аудио контекста
    this.ctx = new AudioContext();
    //Создание узла анализатора звука
    this.analyzerNode = this.ctx.createAnalyser();
    //Создание источника звука
    this.sourceNode = this.ctx.createMediaElementSource(audioElement);

    //Настройка анализатора
    this.analyzerNode.minDecibels = -60;
    this.analyzerNode.smoothingTimeConstant = 0.8;

    //Соединение созданных узлов
    this.sourceNode.connect(this.analyzerNode);
    this.sourceNode.connect(this.ctx.destination);
  }

  /**
   * Функция получения текущей частоты звука
   */
  getFft() {
    const freqData = new Uint8Array(this.analyzerNode.frequencyBinCount);
    this.analyzerNode.getByteFrequencyData(freqData);

    return freqData;
  }
}
