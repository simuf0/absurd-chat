import { Word } from './word.model';

export class Sentence {

  private _words: Array<Word>;

  public get words(): Array<Word> {
    return this._words;
  }
  
  constructor() {
    this._words = new Array();
  }

  public append(word: Word): void {
    if (word != null) {
      this._words.push(word);
    }
  }
}