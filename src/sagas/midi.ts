import { channel } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const noteNumToFreq = (noteNum: number) =>
  440 * Math.pow(2, (noteNum - 69) / 12);

interface MIDIMsg {
  kind: 'noteOn' | 'noteOff';
  noteNum: number;
  velocity: number;
}

const midiMsgChannel = channel<MIDIMsg>();

export function* midi() {
  const requestMIDIAccess = async (): Promise<
    IterableIterator<WebMidi.MIDIInput>
  > => {
    const midiAccess = await navigator.requestMIDIAccess({ sysex: true });
    return midiAccess.inputs.values();
  };

  const devices: WebMidi.MIDIInput[] = yield call(requestMIDIAccess);
  for (const device of devices) {
    device.addEventListener('midimessage', (e) => {
      const { data } = e;
      if (data.length < 3) return;
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      const first = data[0]!;
      const noteNum = data[1]!;
      const velocity = data[2]!;
      /* eslint-enable @typescript-eslint/no-non-null-assertion */
      const kind = Math.floor(first / 16);
      if (kind === 8) {
        midiMsgChannel.put({ kind: 'noteOff', noteNum, velocity });
      } else if (kind === 9) {
        midiMsgChannel.put({ kind: 'noteOn', noteNum, velocity });
      }
    });
  }

  yield takeEvery(midiMsgChannel, play);
}

function* play(msg: MIDIMsg) {
  switch (msg.kind) {
    case 'noteOn':
      yield put({
        type: 'stroke',
        payload: { id: msg.noteNum, freq: noteNumToFreq(msg.noteNum) },
      });
      break;
    case 'noteOff':
      yield put({ type: 'release', payload: { id: msg.noteNum } });
  }
}
