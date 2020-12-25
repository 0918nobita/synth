export const noteNumToFreq = (noteNum: number): number =>
  440 * Math.pow(2, (noteNum - 69) / 12);
