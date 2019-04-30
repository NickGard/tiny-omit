const { omit } = require("./index");
const { expect } = require("chai");

describe("tiny-omit", () => {
  it("should omit an array of keys", () => {
    const source = { a: 1, b: 2, c: 3 };
    expect(omit(source, ['a', 'c'])).to.deep.equal({ b: 2 });
  });
  it("should omit a list of keys", () => {
    const source = { a: 1, b: 2, c: 3 };
    expect(omit(source, 'a', 'c')).to.deep.equal({ b: 2 });
  });
  it("should omit a falsy value", () => {
    const source = {
      'false': false,
      '""': "",
      0: 0,
      'null': null,
      'undefined': undefined,
      'NaN': NaN,
    };
    expect(omit(source, 'false')).to.deep.equal({
      '""': "",
      0: 0,
      'null': null,
      'undefined': undefined,
      'NaN': NaN,
    });
    expect(omit(source, '""')).to.deep.equal({
      'false': false,
      0: 0,
      'null': null,
      'undefined': undefined,
      'NaN': NaN,
    });
    expect(omit(source, 0)).to.deep.equal({
      'false': false,
      '""': "",
      'null': null,
      'undefined': undefined,
      'NaN': NaN,
    });
    expect(omit(source, 'null')).to.deep.equal({
      'false': false,
      '""': "",
      0: 0,
      'undefined': undefined,
      'NaN': NaN,
    });
    expect(omit(source, 'undefined')).to.deep.equal({
      'false': false,
      '""': "",
      0: 0,
      'null': null,
      'NaN': NaN,
    });
    expect(omit(source, 'NaN')).to.deep.equal({
      'false': false,
      '""': "",
      0: 0,
      'null': null,
      'undefined': undefined,
    });
  });
  it('should omit indexes of an array', () => {
    const source = [1, 2, 3];
    expect(omit(source, 0, 2)).to.deep.equal({ 1: 2 });
  });
  it('should return an empty object if no source is provided', () => {
    expect(omit(undefined, ['a', 'b'])).to.deep.equal({});
  });
  it('should return the source object if the passed keys do not exist in the source', () => {
    const source = { a: 1, b: 2, c: 3 };
    expect(omit(source, ['x', 'y'])).to.deep.equal(source);
  });
  it('should return an empty object if the source is not an object', () => {
    expect(omit(null, ['a', 'b'])).to.deep.equal({});
    expect(omit('{}', ['a', 'b'])).to.deep.equal({});
    expect(omit(3, ['a', 'b'])).to.deep.equal({});
    expect(omit(false, ['a', 'b'])).to.deep.equal({});
  });
});
