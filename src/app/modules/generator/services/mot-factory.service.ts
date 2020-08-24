import { Injectable } from '@angular/core';
import { GeneratorModule } from '../generator.module';
import { MotDaoService } from './mot-dao.service';
import { Adverbe, Adjectif, Infinitif, Pronom, Substantif, Verbe, Determinant } from '../models';
import { Genre, Nombre, TypePronom, Temps, TypeDeterminant, TypePronomPersonnel, TypePronomDemonstratif } from '../enums';

@Injectable({
  providedIn: GeneratorModule
})
export class MotFactoryService {

  constructor(private motDaoService: MotDaoService) { }

  public createAdjectif(genre: Genre, number: Nombre): Adjectif {
    const collection = this.motDaoService.getAdjectifs(genre, number);
    const mot = this._random(collection);
    return new Adjectif(mot, genre, number);
  }
  
  public createAdverbe(): Adverbe {
    const collection = this.motDaoService.getAdverbes();
    const mot = this._random(collection);
    return new Adverbe(mot);
  }

  public createDeterminant(
    type: TypeDeterminant,
    substantif?: Substantif,
    index?: number): Determinant {

    const collection = this.motDaoService.getDeterminants(
      type,
      substantif ? substantif.nombre : null,
      substantif ? substantif.genre : null,
      index);
    const mot = this._random(collection);
    return new Determinant(mot, type, index);
  }

  public createInfinitif(): Infinitif {
    const collection = this.motDaoService.getInfinitifs();
    const mot = this._random(collection);
    return new Infinitif(mot);
  }

  public createParticipe() {

  }

  public createPronom(
    type: TypePronom | TypePronomPersonnel | TypePronomDemonstratif,
    substantive?: Substantif,
    index?: number): Pronom {
    const collection = this.motDaoService.getPronoms(
      type,
      substantive ? substantive.nombre : null,
      substantive ? substantive.genre : null,
      index);
    const mot = this._random(collection);
    return new Pronom(mot, type, index);
  }

  public createSubstantif(genre: Genre, nombre: Nombre): Substantif {
    const collection = this.motDaoService.getSubstantifs(genre, nombre);
    const mot = this._random(collection);
    return new Substantif(mot, genre, nombre);
  }

  public createVerbe(temps: Temps, index: number): Verbe {
    const collection = this.motDaoService.getVerbes(temps, index);
    const mot = this._random(collection);
    return new Verbe(mot, temps, index);
  }

  private _random(mots: Array<string>): string {
    const index = Math.round(Math.random() * (mots.length - 1));
    return mots[index];
  }
}
