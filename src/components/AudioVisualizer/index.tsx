import { FC, useRef } from 'react';
import { MeshLineGeometry } from 'meshline';
import { useFrame } from '@react-three/fiber';
import { AudioAnalyzer } from '../../services';
import { getRadians, normalizeBetween } from '../../utils';

type Props = {
  analyzer: AudioAnalyzer;
  lineWidth?: number;
  color?: string;
  segments?: number;
  height?: number;
  radius?: number;
};

export const AudioVisualizer: FC<Props> = ({
  analyzer,
  lineWidth = 0.05,
  segments = 100,
  height = 1,
  radius = 2,
  color = 'white',
}) => {
  const lineRef = useRef<MeshLineGeometry>(null);

  useFrame(() => {
    const fft = analyzer.getFft();
    const points: number[] = [];

    for (let i = 0; i <= segments; i++) {
      const angle = i * (360 / segments);
      const theta = getRadians(angle);

      const val = normalizeBetween(fft[i < segments ? i : 0], 0, 255) * height;

      const x = (radius + val) * Math.cos(theta);
      const y = -(radius + val) * Math.sin(theta);

      points.push(x, y, 0);
    }

    lineRef?.current?.setPoints(points);
  });

  return (
    <mesh>
      <meshLineGeometry attach={'geometry'} ref={lineRef} />
      <meshLineMaterial
        attach={'material'}
        lineWidth={lineWidth}
        color={color}
      />
    </mesh>
  );
};
