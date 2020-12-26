import { useEffect, useRef } from 'react';

import styles from './Oscilloscope.css';

interface Props {
  analyserNode: AnalyserNode;
}

export const Oscilloscope: React.VFC<Props> = ({ analyserNode }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const ctx = ref.current!.getContext('2d')!;

    const bufferLength = analyserNode.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const animate = () => {
      analyserNode.getByteTimeDomainData(dataArray);

      ctx.fillStyle = 'rgb(38, 42, 46)';
      ctx.fillRect(0, 0, 300, 200);

      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgb(125, 225, 30)';
      ctx.beginPath();

      for (let i = 0; i < bufferLength; i++) {
        const x = 300 * (i / bufferLength);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const normalizedAmp = dataArray[i]! / 255.0;
        const y = (1 - normalizedAmp) * 200;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.lineTo(300, 100);
      ctx.stroke();

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      cancelAnimationFrame(requestRef.current!);
    };
  }, []);

  return (
    <canvas ref={ref} className={styles.analyzer} width={200} height={200} />
  );
};
