'use strict';

const Node = require('../node');

describe('Node Module', () => {
  it('contructor()', ()=> {
    const value = 'test value';
    const node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});