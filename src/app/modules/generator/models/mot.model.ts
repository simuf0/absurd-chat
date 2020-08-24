export abstract class Mot {

  private _value: string;

  public get value(): string {
    return this._value;
  }

  constructor(value: string) {
    this._value = value;
  }
}
