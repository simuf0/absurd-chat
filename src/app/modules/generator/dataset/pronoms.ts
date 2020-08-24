import { Nombre } from '../enums/nombre.enum';
import { Genre } from '../enums/genre.enum';

const pronoms = {
  demonstrativeDeterminants: [
    { value: "ce",    number: Nombre.SINGULIER, gender: Genre.MASCULIN },
    { value: "cette", number: Nombre.SINGULIER, gender: Genre.FEMININ },
    { value: "ces",   number: Nombre.PLURIEL },
  ],
  determinant: [
    { value: "la",  number: Nombre.SINGULIER, gender: Genre.FEMININ },
    { value: "une", number: Nombre.SINGULIER, gender: Genre.FEMININ },
    { value: "le",  number: Nombre.SINGULIER, gender: Genre.MASCULIN },
    { value: "un",  number: Nombre.SINGULIER, gender: Genre.MASCULIN },
    { value: "les", number: Nombre.PLURIEL },
    { value: "des", number: Nombre.PLURIEL },
  ],
  directComplement: [
    { value: "me",   index: 0 },
    { value: "te",   index: 1 },
    { value: "le",   index: 2 },
    { value: "la",   index: 2 },
    { value: "nous", index: 3 },
    { value: "vous", index: 4 },
    { value: "les",  index: 5 },
  ],
  indirectComplement: [
    { value: "me",    index: 0 },
    { value: "te",    index: 1 },
    { value: "lui",   index: 2 },
    { value: "nous",  index: 3 },
    { value: "vous",  index: 4 },
    { value: "leurs", index: 5 },
  ],
  possessiveDeterminants: [
    { value: "mon",   index: 0, number: Nombre.SINGULIER, gender: Genre.MASCULIN },
    { value: "ma",    index: 0, number: Nombre.SINGULIER, gender: Genre.FEMININ },
    { value: "mes",   index: 0, number: Nombre.PLURIEL },
    { value: "ton",   index: 1, number: Nombre.SINGULIER, gender: Genre.MASCULIN },
    { value: "ta",    index: 1, number: Nombre.SINGULIER, gender: Genre.FEMININ },
    { value: "tes",   index: 1, number: Nombre.PLURIEL },
    { value: "son",   index: 2, number: Nombre.SINGULIER, gender: Genre.MASCULIN },
    { value: "sa",    index: 2, number: Nombre.SINGULIER, gender: Genre.FEMININ },
    { value: "ses",   index: 2, number: Nombre.PLURIEL },
    { value: "notre", index: 3, number: Nombre.SINGULIER },
    { value: "nos",   index: 3, number: Nombre.PLURIEL },
    { value: "votre", index: 4, number: Nombre.SINGULIER },
    { value: "vos",   index: 4, number: Nombre.PLURIEL },
    { value: "leur",  index: 5, number: Nombre.SINGULIER },
    { value: "leurs", index: 5, number: Nombre.PLURIEL },
  ],
  subject: [
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
};

export { pronoms };