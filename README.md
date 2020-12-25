# Synthesizer

![Lint Code Base](https://github.com/0918nobita/synth/workflows/Lint%20Code%20Base/badge.svg)

WIP

- Single oscillator (`sine`, `square`, `sawtooth`, `triangle`)
- Gain control (`0x`-`1.00x`)
- Unison control (`0`-`8`)
- Detune control (`0hz`-`100hz`)
- Attack control (`0s`-`1.00s`)
- Decay control (`0s`-`1.00s`)
- Sustain control (`0x`-`1.00x`)
- Release control (`0s`-`1.00s`)
- Virtual keyboard (`C3`-`B3`)
- Controllable via MIDI keyboards

![screenshot](./assets/screenshot.png)

## Install dependencies

```
$ yarn
```

## Build

```
$ yarn build
```

## Generate `.d.ts` files

```
$ yarn gen-dts
```

## Launch devServer

```
$ yarn dev
```

## Lint

```
$ yarn lint
```

## Format

```
$ yarn format
```

## Launch Storybook

```
$ yarn storybook
```
