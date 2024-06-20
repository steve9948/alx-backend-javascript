
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('add two numbers', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('subtract two numbers', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('divide two numbers', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('return Error when dividing by zero', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

});
