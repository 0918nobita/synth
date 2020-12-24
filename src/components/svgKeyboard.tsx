export const SVGKeyboard: React.VFC = () => (
  <svg width={210} height={110} viewBox={[0, 0, 210, 110].join(', ')}>
    {[0, 30, 60, 90, 120, 150, 180].map((x) => (
      <rect
        key={x}
        x={x}
        y={0}
        width={30}
        height={110}
        stroke="black"
        strokeWidth={1}
        fill="white"
      />
    ))}
    {[20, 52, 108, 142, 174].map((x) => (
      <rect key={x} x={x} y={0} width={18} height={67} fill="rgb(58, 58, 58)" />
    ))}
  </svg>
);
