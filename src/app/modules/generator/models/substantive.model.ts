import { Word } from './word.model';
import { Gender, Number } from '../enums';

export class Substantive extends Word {

  private _gender: Gender;
  private _number: Number;

  public get gender(): Gender {
    return this._gender;
  }

  public get number(): Number {
    return this._number;
  }

  constructor(value: string, gender: Gender, number: Number) {
    super(value);
    this._gender = gender;
    this._number = number;
  }

}