import { Word } from './word.model';
import { PronounType } from '../enums';

export class Pronoun extends Word {

  private _type: PronounType;
  private _index: number;

  public get type(): PronounType {
    return this._type;
  }

  public get index(): number {
    return this._index;
  }

  constructor(value: string, type: PronounType, index?: number) {
    super(value);
    this._type = type;
    this._index = index;
  }

}