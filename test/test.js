const chai = require('chai');
const expect = chai.expect;

const flatten = require('..');

describe('sample_tests', () => {
  it('it should flatten two-dimensional arrays', () => {
    expect(flatten([1, 2, [3, 4]])).to.eql([1, 2, 3, 4]);
  });

  it('it should flatten deeply-nested arrays', () => {
    expect([[1, [[2, 3]], [4]]]).to.eql([1, 2, 3, 4]);
  });

  it('starts from zero if only one argument is passed in', () => {
    expect([[{ a: "1" }, [[2, 3]], ["4"]]]).to.eql([{ a: 1 }, 2, 3, "4"]);
  });
});
