import { Nombre, Genre } from '../enums';

const determinants = {

  articlesDefinis: [
    { value: "le",  nombre: Nombre.SINGULIER, genre: Genre.MASCULIN },
    { value: "la",  nombre: Nombre.SINGULIER, genre: Genre.FEMININ },
    { value: "les", nombre: Nombre.PLURIEL },
  ],

  articlesIndefinis: [
    { value: "un",  nombre: Nombre.SINGULIER, genre: Genre.MASCULIN },
    { value: "une", nombre: Nombre.SINGULIER, genre: Genre.FEMININ },
    { value: "des", nombre: Nombre.PLURIEL },
  ],

  articlesPartitifs: [
    { value: "du",    nombre: Nombre.SINGULIER, genre: Genre.MASCULIN },
    { value: "de la", nombre: Nombre.SINGULIER, genre: Genre.FEMININ },
    { value: "des",   nombre: Nombre.PLURIEL },
  ],
  
  demonstratifs: [
    { value: "ce",    nombre: Nombre.SINGULIER, genre: Genre.MASCULIN },
    { value: "cette", nombre: Nombre.SINGULIER, genre: Genre.FEMININ },
    { value: "ces",   nombre: Nombre.PLURIEL },
  ],

  possessifs: [
    { value: "mon",   index: 0, nombre: Nombre.SINGULIER, genre: Genre.MASCULIN },
    { value: "ma",    index: 0, nombre: Nombre.SINGULIER, genre: Genre.FEMININ },
    { value: "mes",   index: 0, nombre: Nombre.PLURIEL },
    { value: "ton",   index: 1, nombre: Nombre.SINGULIER, genre: Genre.MASCULIN },
    { value: "ta",    index: 1, nombre: Nombre.SINGULIER, genre: Genre.FEMININ },
    { value: "tes",   index: 1, nombre: Nombre.PLURIEL },
    { value: "son",   index: 2, nombre: Nombre.SINGULIER, genre: Genre.MASCULIN },
    { value: "sa",    index: 2, nombre: Nombre.SINGULIER, genre: Genre.FEMININ },
    { value: "ses",   index: 2, nombre: Nombre.PLURIEL },
    { value: "notre", index: 3, nombre: Nombre.SINGULIER },
    { value: "nos",   index: 3, nombre: Nombre.PLURIEL },
    { value: "votre", index: 4, nombre: Nombre.SINGULIER },
    { value: "vos",   index: 4, nombre: Nombre.PLURIEL },
    { value: "leur",  index: 5, nombre: Nombre.SINGULIER },
    { value: "leurs", index: 5, nombre: Nombre.PLURIEL },
  ],

  interrogatifsExclamatifs: [
    { value: "quel",    nombre: Nombre.SINGULIER, genre: Genre.MASCULIN },
    { value: "quelle",  nombre: Nombre.SINGULIER, genre: Genre.FEMININ },
    { value: "quels",   nombre: Nombre.PLURIEL,   genre: Genre.MASCULIN },
    { value: "quelles", nombre: Nombre.PLURIEL,   genre: Genre.FEMININ },
  ],

  relatifs: [
    { value: "lequel",     nombre: Nombre.SINGULIER, genre: Genre.MASCULIN },
    { value: "laquelle",   nombre: Nombre.SINGULIER, genre: Genre.FEMININ },
    { value: "lesquels",   nombre: Nombre.PLURIEL, genre: Genre.MASCULIN },
    { value: "lesquelles", nombre: Nombre.PLURIEL, genre: Genre.FEMININ },
  ],

  // TODO : clairement à compléter
  indefinis: [
    { value: "autre" },
    { value: "quelques" },
    { value: "tout" },
    { value: "toute" },
    { value: "chaque" },
    { value: "nul" },
    { value: "trop de" },
    { value: "n'importe quel" },
  ],

};

export { determinants };