import { Mot } from './mot.model';
import { TypePronom, TypePronomPersonnel, TypePronomDemonstratif } from '../enums';

export class Pronom extends Mot {

  private _type: TypePronom | TypePronomPersonnel | TypePronomDemonstratif;
  private _index: number;

  public get type(): TypePronom | TypePronomPersonnel | TypePronomDemonstratif {
    return this._type;
  }

  public get index(): number {
    return this._index;
  }

  constructor(
    value: string,
    type: TypePronom | TypePronomPersonnel | TypePronomDemonstratif,
    index?: number) {
    super(value);
    this._type = type;
    this._index = index;
  }

}