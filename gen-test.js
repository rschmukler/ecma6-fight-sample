function *myGenerator() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

var ret = myGenerator();
debugger;

console.log(ret);
