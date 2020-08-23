import { Number } from '../enums/number.enum';
import { Gender } from '../enums/gender.enum';

const pronouns = {
  demonstrativeDeterminants: [
    { value: "ce",    number: Number.SINGULAR, gender: Gender.MALE },
    { value: "cette", number: Number.SINGULAR, gender: Gender.FEMININE },
    { value: "ces",   number: Number.PLURAL },
  ],
  determinant: [
    { value: "la",  number: Number.SINGULAR, gender: Gender.FEMININE },
    { value: "une", number: Number.SINGULAR, gender: Gender.FEMININE },
    { value: "le",  number: Number.SINGULAR, gender: Gender.MALE },
    { value: "un",  number: Number.SINGULAR, gender: Gender.MALE },
    { value: "les", number: Number.PLURAL },
    { value: "des", number: Number.PLURAL },
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
    { value: "mon",   index: 0, number: Number.SINGULAR, gender: Gender.MALE },
    { value: "ma",    index: 0, number: Number.SINGULAR, gender: Gender.FEMININE },
    { value: "mes",   index: 0, number: Number.PLURAL },
    { value: "ton",   index: 1, number: Number.SINGULAR, gender: Gender.MALE },
    { value: "ta",    index: 1, number: Number.SINGULAR, gender: Gender.FEMININE },
    { value: "tes",   index: 1, number: Number.PLURAL },
    { value: "son",   index: 2, number: Number.SINGULAR, gender: Gender.MALE },
    { value: "sa",    index: 2, number: Number.SINGULAR, gender: Gender.FEMININE },
    { value: "ses",   index: 2, number: Number.PLURAL },
    { value: "notre", index: 3, number: Number.SINGULAR },
    { value: "nos",   index: 3, number: Number.PLURAL },
    { value: "votre", index: 4, number: Number.SINGULAR },
    { value: "vos",   index: 4, number: Number.PLURAL },
    { value: "leur",  index: 5, number: Number.SINGULAR },
    { value: "leurs", index: 5, number: Number.PLURAL },
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

export { pronouns };