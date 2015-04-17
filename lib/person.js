import chalk from 'chalk';

const MAX_HEALTH = 5.0;
const FORMAT_LEN = 15;

export default class {
  constructor(name) {
    this.name = name;
    this.health = Math.ceil(Math.random() * MAX_HEALTH);
  }
  alive() {
    return this.health > 0;
  }
  printStatus() {
    var spacerLen = FORMAT_LEN - this.name.length;
    var spacerStr = '';
    for (let i = 0; i < spacerLen; ++i) {
      spacerStr += '.';
    }
    console.log(`${this.name}${spacerStr} [${this.healthStr()}]`);
  }
  healthStr() {
    let color;
    let healthStr = '';

    for (var i = 0; i < MAX_HEALTH; ++i) {
      if (this.health > i) {
        healthStr += 'x';
      } else {
        healthStr += ' ';
      }
    }

    if (this.health <= (MAX_HEALTH / 3)) color = chalk.red;
    else if (this.health < 2 * (MAX_HEALTH / 3)) color = chalk.yellow;
    else color = chalk.green;
    return color(healthStr);
  }
  sayHello() {
    console.log(`${this.name} says "Hello!"`);
  }
}
