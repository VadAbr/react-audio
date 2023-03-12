import React, { createRef, Suspense, useEffect, useState } from 'react';
import { AudioLoader, AudioListener, PositionalAudio } from 'three';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import song from '../../assets/song.mp3';

import styles from './styles.module.scss';

export const SpatialSound = () => {
  return (
    <div className={styles.container}>
      <Suspense fallback={null}>
        <Canvas>
          <mesh>
            <boxGeometry />
            <Sound url={song} />
          </mesh>

          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
};

function Sound({ url }: { url: string }) {
  const sound = createRef<PositionalAudio>();
  const { camera } = useThree();
  const [listener] = useState(() => new AudioListener());
  const buffer = useLoader(AudioLoader, url);

  useEffect(() => {
    sound.current?.setBuffer(buffer);
    sound.current?.setRefDistance(1);
    sound.current?.setLoop(true);
    sound.current?.play();
    camera.add(listener);
  }, [buffer, camera, listener, sound]);

  return <positionalAudio ref={sound} args={[listener]} />;
}
