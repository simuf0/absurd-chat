import { Word } from './word.model';
import { Time } from '../enums';

export class Verb extends Word {

  private _time: Time;
  private _index: number;

  public get time(): Time {
    return this._time;
  }

  public get index(): number {
    return this._index;
  }

  constructor(value: string, time: Time, index: number) {
    super(value);
    this._time = time;
    this._index = index;
  }
}
