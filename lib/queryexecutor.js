/**
 * author: Pieter Heyvaert (pheyvaer.heyvaert@ugent.be)
 * Ghent University - imec - IDLab
 */

const bindingsStreamToGraphQl = require('@comunica/actor-sparql-serialize-tree').bindingsStreamToGraphQl;
const N3 = require('n3');
const Q = require('q');
const fs = require('fs');

class QueryExecutor {

  constructor(path) {
    this.path = path;
    this.engine = null;
  }

  async query(context, query) {
    if (!this.engine) {
      this.engine = require('../graphqlld-engine');
    }

    const bigContext = {
      sources: [{type: 'file', value: this.path}],
      queryFormat: 'graphql',
      "@context": context
    };

    return this.engine.query(query, bigContext)
      .then(result => {
        return bindingsStreamToGraphQl(result.bindingsStream, bigContext, {materializeRdfJsTerms: true});
      });
  }
}

module.exports = QueryExecutor;