import { Mot } from './mot.model';
import { Temps } from '../enums';

export class Verbe extends Mot {

  private _temps: Temps;
  private _index: number;

  public get temps(): Temps {
    return this._temps;
  }

  public get index(): number {
    return this._index;
  }

  constructor(value: string, temps: Temps, index: number) {
    super(value);
    this._temps = temps;
    this._index = index;
  }
}
