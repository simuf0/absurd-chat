import { Mot } from './mot.model';
import { TypeDeterminant } from '../enums';

export class Determinant extends Mot {

  private _type: TypeDeterminant;
  private _index: number;

  public get type(): TypeDeterminant {
    return this._type;
  }

  public get index(): number {
    return this._index;
  }

  constructor(value: string, type: TypeDeterminant, index?: number) {
    super(value);
    this._type = type;
    this._index = index;
  }

}