import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export const Analyzer: React.VFC = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const analyzer = useSelector((state) => state.analyzer)!;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const ctx = ref.current!.getContext('2d')!;

    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const animate = () => {
      analyzer.getByteTimeDomainData(dataArray);

      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, 300, 200);

      ctx.lineWidth = 2;
      ctx.strokeStyle = 'white';
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

  return <canvas ref={ref} width={300} height={200} />;
};
