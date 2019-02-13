/**
 * author: Pieter Heyvaert (pheyvaer.heyvaert@ugent.be)
 * Ghent University - imec - IDLab
 */

const assert = require('assert');
const lib = require('../index');

describe('QueryExecutor', function() {
  this.timeout(5000);

  it('basic', async () => {
    const result = await lib.query('test/test.ttl', {
      name: 'http://schema.org/name'
    }, '{ name }');

    assert.deepStrictEqual(result, [{name: ['Test']}]);
  });
});
