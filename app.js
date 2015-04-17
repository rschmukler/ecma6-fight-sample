import Person from './lib/person';

['Bob', 'Steve', 'Ryan', 'Russell'].forEach( (x) =>
    (new Person(x)).printStatus()
);
