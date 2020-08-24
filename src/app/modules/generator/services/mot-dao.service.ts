import { Injectable } from '@angular/core';
import { GeneratorModule } from '../generator.module';
import { Genre, Nombre, Temps, TypePronom, TypePronomPersonnel, TypeDeterminant, TypePronomDemonstratif } from '../enums';
import * as dataset from '../dataset';

@Injectable({
  providedIn: GeneratorModule
})
export class MotDaoService {

  public getAdjectifs(genre: Genre, nombre: Nombre): Array<string> {
    switch (genre) {
      case Genre.FEMININ:
        return (nombre == Nombre.PLURIEL)
          ? dataset.adjectifsFemininPluriel
          : dataset.adjectifsFemininSingulier;
      case Genre.MASCULIN:
        return (nombre == Nombre.PLURIEL)
          ? dataset.adjectifsMasculinPluriel
          : dataset.adjectifsMasculinSingulier;
    }
  }

  public getAdverbes(): Array<string> {
    return dataset.adverbes;
  }

  public getDeterminants(
    type: TypeDeterminant,
    nombre?: Nombre,
    genre?: Genre,
    index?: number): Array<string> {

    let collection = new Array();
    switch (type) {
      case TypeDeterminant.ARTICLE_DEFINI:
        collection = dataset.determinants.articlesDefinis;
        break;
      case TypeDeterminant.ARTICLE_INDEFINI:
        collection = dataset.determinants.articlesIndefinis;
        break;
      case TypeDeterminant.ARTICLE_PARTITIF:
        collection = dataset.determinants.articlesPartitifs;
        break;
      case TypeDeterminant.DEMONSTRATIF:
        collection = dataset.determinants.demonstratifs
        break;
      case TypeDeterminant.INDEFINI:
        collection = dataset.determinants.indefinis;
        break;
      case TypeDeterminant.INTERROGATIF_EXCLAMATIF:
        collection = dataset.determinants.interrogatifsExclamatifs;
        break;
      case TypeDeterminant.POSSESSIF:
        collection = dataset.determinants.possessifs;
        break;
      case TypeDeterminant.RELATIF:
        collection = dataset.determinants.relatifs;
        break;
    }
    collection = this._filterGenreNombre(collection, nombre, genre, index);
    return collection.map(v => v.value);
  }

  public getInfinitifs(): Array<string> {
    return dataset.infinitifs;
  }

  public getParticipes(): Array<string> {
    return;
  }

  public getPronoms(
    type: TypePronom | TypePronomPersonnel | TypePronomDemonstratif,
    nombre?: Nombre,
    genre?: Genre,
    index?: number): Array<string> {
    
    let collection = new Array();
    switch (type) {
      case TypePronomPersonnel.SUJET:
        collection = dataset.pronoms.personnels.sujets;
        break;
      case TypePronomPersonnel.COMPLEMENT_DIRECT:
        collection = dataset.pronoms.personnels.complementsDirects;
        break;
      case TypePronomPersonnel.COMPLEMENT_INDIRECT:
        collection = dataset.pronoms.personnels.complementsIndirects;
        break;
      case TypePronom.ADVERBIAL:
        console.log(dataset.pronoms);
        collection = dataset.pronoms.adverbiaux;
        break;
      case TypePronom.RELATIF:
        collection = dataset.pronoms.relatifs;
        break;
      case TypePronom.INTERROGATIF:
        collection = dataset.pronoms.interrogatifs;
        break;
      case TypePronom.POSSESSIF:
        collection = dataset.pronoms.possessifs;
        break;
      case TypePronomDemonstratif.SIMPLE:
        collection = dataset.pronoms.demonstratifs.simple;
        break;
      case TypePronomDemonstratif.COMPOSE:
        collection = dataset.pronoms.demonstratifs.compose;
        break;
      case TypePronom.INDEFINI:
        collection = dataset.pronoms.indefinis;
        break;
    }
    collection = this._filterGenreNombre(collection, nombre, genre, index);
    return collection.map(v => v.value);
  }

  public getSubstantifs(genre: Genre, nombre: Nombre): Array<string> {
    switch (genre) {
      case Genre.FEMININ:
        return (nombre == Nombre.PLURIEL)
          ? dataset.substantifsFemininPluriel
          : dataset.substantifsFemininSingulier;
      case Genre.MASCULIN:
        return (nombre == Nombre.PLURIEL)
          ? dataset.substantifsMasculinPluriel
          : dataset.substantifsMasculinSingulier;
    }
  }

  public getVerbes(temps: Temps, index: number): Array<string> {
    switch (temps) {
      case Temps.CONDITIONNEL:
        return dataset['verbsConditional' + index];
      case Temps.FUTUR:
        return dataset['verbsFuture' + index];
      case Temps.IMPARFAIT:
        return dataset['verbsImperfect' + index];
      case Temps.PRESENT:
        return dataset['verbsPresent' + index];
      case Temps.PASSE_SIMPLE:
        return dataset['verbsSimplePast' + index];
      // case Temps.SUBJONCTIF:
      //   return dataset['verbsSubjunctive' + index];
      // case Temps.SUBJONCTIF_PASSE:
      //   return dataset['verbsPastSubjonctive' + index];
    }
  }

  private _filterGenreNombre(
    collection: Array<any>,
    nombre: Nombre,
    genre: Genre,
    index: number) {

    return collection.filter(v => {
      let bool = true;
      if (nombre != null && v.hasOwnProperty("nombre")) {
        bool = bool && v.nombre == nombre;
      }
      if (genre != null && v.hasOwnProperty("genre")) {
        bool = bool && v.genre == genre;
      }
      if (index != null && v.hasOwnProperty("index")) {
        bool = bool && v.index == index;
      }
      return bool;
    });
  }
}
