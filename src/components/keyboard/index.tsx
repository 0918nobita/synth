import { Key, Props as PropsForKey } from './key';

export interface Props {
  strokeHandler: PropsForKey['strokeHandler'];
  releaseHandler: PropsForKey['releaseHandler'];
}

export const Keyboard: React.VFC<Props> = ({
  strokeHandler,
  releaseHandler,
}) => {
  const keys: PropsForKey[] = ([
    {
      kind: 'white',
      x: 0,
    },
    {
      kind: 'black',
      x: 20,
    },
    {
      kind: 'white',
      x: 30,
    },
    {
      kind: 'black',
      x: 52,
    },
    {
      kind: 'white',
      x: 60,
    },
    {
      kind: 'white',
      x: 90,
    },
    {
      kind: 'black',
      x: 108,
    },
    {
      kind: 'white',
      x: 120,
    },
    {
      kind: 'black',
      x: 142,
    },
    {
      kind: 'white',
      x: 150,
    },
    {
      kind: 'black',
      x: 174,
    },
    {
      kind: 'white',
      x: 180,
    },
  ] as const).map((e, i) => ({
    ...e,
    noteNum: i + 60,
    strokeHandler,
    releaseHandler,
  }));

  return (
    <svg width={210} height={110} viewBox={[0, 0, 210, 110].join(', ')}>
      {keys
        .filter((keyProps) => keyProps.kind === 'white')
        .map((keyProps) => (
          <Key key={keyProps.noteNum} {...keyProps} />
        ))}
      {keys
        .filter((keyProps) => keyProps.kind === 'black')
        .map((keyProps) => (
          <Key key={keyProps.noteNum} {...keyProps} />
        ))}
    </svg>
  );
};
