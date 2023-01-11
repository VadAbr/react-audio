import { Canvas } from '@react-three/fiber';
import { ChangeEvent, useRef, useState } from 'react';
import { AudioAnalyzer, extendMeshLine } from '../../services';
import { AudioVisualizer } from '../../components/AudioVisualizer';

import songUrl from '../../assets/song.mp3';

import styles from './styles.module.scss';

extendMeshLine();

export const Visualizer = () => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [analyzer, setAnalyzer] = useState<AudioAnalyzer | null>(null);

  const audioElemRef = useRef<HTMLAudioElement | null>(null);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || !audioElemRef.current) {
      return;
    }

    setAnalyzer(new AudioAnalyzer(audioElemRef.current));
    setAudioUrl(URL.createObjectURL(file));
  };

  return (
    <div className={styles.visualizerContainer}>
      <Canvas>{analyzer && <AudioVisualizer analyzer={analyzer} />}</Canvas>

      <div className={styles.visualizerInputs}>
        <input type={'file'} accept={'audio/*'} onChange={onFileChange} />

        <audio src={audioUrl ?? songUrl} controls ref={audioElemRef} />
      </div>
    </div>
  );
};
