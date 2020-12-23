export type AnalyzerActions = GetAnalyzerNodeAction;

interface GetAnalyzerNodeAction {
  type: 'getAnalyzerNode';
  payload: {
    analyzerNode: AnalyserNode;
  };
}

export const getAnalyzerNode = ({
  analyzerNode,
}: GetAnalyzerNodeAction['payload']): GetAnalyzerNodeAction => ({
  type: 'getAnalyzerNode',
  payload: {
    analyzerNode,
  },
});
