import { MUTATION_TYPES } from './mutations';
import { MUTATION_TYPES as USER } from './user';

// Object.keys(USER).forEach(key => {
//   USER[key] = 'user/' + USER[key];
// });

// console.log(USER, 'USER');

export default {
  ...MUTATION_TYPES,
  USER,
};
