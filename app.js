import { Person, MaxHealth } from './lib/person';

console.log(MaxHealth);
['Bob', 'Steve', 'Ryan', 'Russell'].forEach( (x) => {
    (new Person(x)).printStatus();
});
