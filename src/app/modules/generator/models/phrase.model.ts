import { Mot } from './mot.model';

export class Phrase {

  private _mots: Array<Mot>;

  public get mots(): Array<Mot> {
    return this._mots;
  }
  
  constructor() {
    this._mots = new Array();
  }

  public append(mot: Mot): void {
    if (mot != null) {
      this._mots.push(mot);
    }
  }
}