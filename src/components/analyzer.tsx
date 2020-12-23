import { useEffect, useRef } from 'react';

export const Analyzer: React.VFC = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const ctx = ref.current!.getContext('2d')!;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 300, 200);
    ctx.fillStyle = 'white';
    ctx.font = '48px serif';
    ctx.fillText('Synth', 10, 50);

    const animate = () => {
      const x = Math.floor(Math.random() * 300);
      const y = Math.floor(Math.random() * 200);
      ctx.fillRect(x, y, 1, 1);

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
