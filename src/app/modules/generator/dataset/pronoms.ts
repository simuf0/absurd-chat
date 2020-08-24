import { Genre, Nombre } from '../enums';

const pronoms = {

  personnels: {
    sujets: [
      { value: "je",    index: 0 },
      { value: "tu",    index: 1 },
      { value: "il",    index: 2 },
      { value: "elle",  index: 2 },
      { value: "on",    index: 2 },
      { value: "nous",  index: 3 },
      { value: "vous",  index: 4 },
      { value: "ils",   index: 5 },
      { value: "elles", index: 5 },
    ],
    complementsDirects: [
      { value: "me",   index: 0 },
      { value: "te",   index: 1 },
      { value: "le",   index: 2 },
      { value: "la",   index: 2 },
      { value: "nous", index: 3 },
      { value: "vous", index: 4 },
      { value: "les",  index: 5 },
    ],
    complementsIndirects: [
      { value: "me",    index: 0 },
      { value: "te",    index: 1 },
      { value: "lui",   index: 2 },
      { value: "nous",  index: 3 },
      { value: "vous",  index: 4 },
      { value: "leurs", index: 5 },
    ],
  },

  adverbiaux: [
    { value: "en" },
    { value: "y" },
  ],

  // TODO : intégrer les formes composées: -quel-
  relatifs: [
    { value: "qui" },
    { value: "que" },
    { value: "quoi" },
    { value: "dont" },
    { value: "où" },
  ],

  // TODO : à compléter peut-être
  interrogatifs: [
    { value: "qui" },
    { value: "que" },
    { value: "quoi" },
    { value: "combien" },
  ],

  possessifs: [
    { value: "le mien",     index: 0, genre: Genre.MASCULIN, nombre: Nombre.SINGULIER },
    { value: "le tien",     index: 1, genre: Genre.MASCULIN, nombre: Nombre.SINGULIER },
    { value: "le sien",     index: 2, genre: Genre.MASCULIN, nombre: Nombre.SINGULIER },
    { value: "le nôtre",    index: 3, genre: Genre.MASCULIN, nombre: Nombre.SINGULIER },
    { value: "le vôtre",    index: 4, genre: Genre.MASCULIN, nombre: Nombre.SINGULIER },
    { value: "le leur",     index: 5, genre: Genre.MASCULIN, nombre: Nombre.SINGULIER },
    { value: "les miens",   index: 0, genre: Genre.MASCULIN, nombre: Nombre.PLURIEL },
    { value: "les tiens",   index: 1, genre: Genre.MASCULIN, nombre: Nombre.PLURIEL },
    { value: "les siens",   index: 2, genre: Genre.MASCULIN, nombre: Nombre.PLURIEL },
    { value: "les nôtres",  index: 3, genre: Genre.MASCULIN, nombre: Nombre.PLURIEL },
    { value: "les vôtres",  index: 4, genre: Genre.MASCULIN, nombre: Nombre.PLURIEL },
    { value: "les leurs",   index: 5, genre: Genre.MASCULIN, nombre: Nombre.PLURIEL },
    { value: "la mienne",   index: 0, genre: Genre.FEMININ,  nombre: Nombre.SINGULIER },
    { value: "la tienne",   index: 1, genre: Genre.FEMININ,  nombre: Nombre.SINGULIER },
    { value: "la sienne",   index: 2, genre: Genre.FEMININ,  nombre: Nombre.SINGULIER },
    { value: "la nôtre",    index: 3, genre: Genre.FEMININ,  nombre: Nombre.SINGULIER },
    { value: "la vôtre",    index: 4, genre: Genre.FEMININ,  nombre: Nombre.SINGULIER },
    { value: "la leur",     index: 5, genre: Genre.FEMININ,  nombre: Nombre.SINGULIER },
    { value: "les miennes", index: 0, genre: Genre.FEMININ,  nombre: Nombre.PLURIEL },
    { value: "les tiennes", index: 1, genre: Genre.FEMININ,  nombre: Nombre.PLURIEL },
    { value: "les siennes", index: 2, genre: Genre.FEMININ,  nombre: Nombre.PLURIEL },
    { value: "les nôtres",  index: 3, genre: Genre.FEMININ,  nombre: Nombre.PLURIEL },
    { value: "les vôtres",  index: 4, genre: Genre.FEMININ,  nombre: Nombre.PLURIEL },
    { value: "les leurs",   index: 5, genre: Genre.FEMININ,  nombre: Nombre.PLURIEL },
  ],

  demonstratifs: {
    simple: [
      { value: "celui",  genre: Genre.MASCULIN, nombre: Nombre.SINGULIER },
      { value: "ceux",   genre: Genre.MASCULIN, nombre: Nombre.PLURIEL },
      { value: "celle",  genre: Genre.FEMININ,  nombre: Nombre.SINGULIER },
      { value: "celles", genre: Genre.FEMININ,  nombre: Nombre.PLURIEL },
      { value: "ce", nombre: Nombre.SINGULIER },
    ],
    compose: [
      { value: "celui-ci",  genre: Genre.MASCULIN, nombre: Nombre.SINGULIER },
      { value: "celui-là",  genre: Genre.MASCULIN, nombre: Nombre.SINGULIER },
      { value: "ceux-ci",   genre: Genre.MASCULIN, nombre: Nombre.PLURIEL },
      { value: "ceux-là",   genre: Genre.MASCULIN, nombre: Nombre.PLURIEL },
      { value: "celle-ci",  genre: Genre.FEMININ,  nombre: Nombre.SINGULIER },
      { value: "celle-là",  genre: Genre.FEMININ,  nombre: Nombre.SINGULIER },
      { value: "celles-ci", genre: Genre.FEMININ,  nombre: Nombre.PLURIEL },
      { value: "celles-là", genre: Genre.FEMININ,  nombre: Nombre.PLURIEL },
      { value: "ceci", nombre: Nombre.SINGULIER },
      { value: "cela", nombre: Nombre.SINGULIER },
      { value: "ça",   nombre: Nombre.SINGULIER },
    ],
  },

  // TODO : à réflechir...
  indefinis: [],
};

export { pronoms };