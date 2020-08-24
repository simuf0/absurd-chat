import { Mot } from './mot.model';
import { TypePronom } from '../enums';

export class Pronom extends Mot {

  private _type: TypePronom;
  private _index: number;

  public get type(): TypePronom {
    return this._type;
  }

  public get index(): number {
    return this._index;
  }

  constructor(value: string, type: TypePronom, index?: number) {
    super(value);
    this._type = type;
    this._index = index;
  }

}