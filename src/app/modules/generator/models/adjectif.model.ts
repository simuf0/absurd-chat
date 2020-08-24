import { Mot } from './mot.model';
import { Genre, Nombre } from '../enums';

export class Adjectif extends Mot {

  private _genre: Genre;
  private _nombre: Nombre;

  public get genre(): Genre {
    return this._genre;
  }

  public get nombre(): Nombre {
    return this._nombre;
  }

  constructor(value: string, genre: Genre, nombre: Nombre) {
    super(value);
    this._genre = genre;
    this._nombre = nombre;
  }

}