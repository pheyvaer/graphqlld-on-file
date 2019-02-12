/**
 * author: Pieter Heyvaert (pheyvaer.heyvaert@ugent.be)
 * Ghent University - imec - IDLab
 */

const bindingsStreamToGraphQl = require('@comunica/actor-sparql-serialize-tree').bindingsStreamToGraphQl;

class QueryExecutor {

  constructor(path) {
    this.path = path;
    this.engine = null;
  }

  async query(context, query) {
    if (!this.engine) {
      this.engine = require('./engine');
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
