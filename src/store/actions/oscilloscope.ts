export type OscilloscopeActions = GetAnalyserNodeAction;

interface GetAnalyserNodeAction {
  type: 'getAnalyserNode';
  payload: {
    analyserNode: AnalyserNode;
  };
}

export const getAnalyserNode = ({
  analyserNode,
}: GetAnalyserNodeAction['payload']): GetAnalyserNodeAction => ({
  type: 'getAnalyserNode',
  payload: {
    analyserNode,
  },
});
