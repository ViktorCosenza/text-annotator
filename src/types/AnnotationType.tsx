export enum Polarity{
  Negative = -1,
  Neutral = 0,
  Positive = 1
}

export type AnnotationType = {
  first: string,
  second: string,
  third: string,
  fourth: string,
  reference: {
    text: string,
    pos: number[]
  },
  explicit: boolean,
  polarity: Polarity
}
