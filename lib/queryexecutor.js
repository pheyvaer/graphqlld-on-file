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
    this.rdfjsSource = null;
  }

  async query(context, query) {
    if (!this.rdfjsSource) {
      this.rdfjsSource = await this._getRDFjsSourceFromFile(this.path);
    }

    const bigContext = {
      sources: [{type: 'rdfjsSource', value: this.rdfjsSource}],
      queryFormat: 'graphql',
      "@context": context
    };

    return require('../my-graphqlld-engine/index').query(query, bigContext)
      .then(result => {
        return bindingsStreamToGraphQl(result.bindingsStream, bigContext, {materializeRdfJsTerms: true});
      });
  }

  /**
   * This method returns an RDFJSSource of an file
   * @param {string} path: path of the file
   * @returns {Promise}: a promise that resolve with the corresponding RDFJSSource
   */
  _getRDFjsSourceFromFile(path) {
    const deferred = Q.defer();

    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) throw err;

      const parser = N3.Parser();
      const store = N3.Store();

      parser.parse(data, (err, quad, prefixes) => {
        if (err) {
          deferred.reject();
        } else if (quad) {
          store.addQuad(quad);
        } else {
          const source = {
            match: function (s, p, o, g) {
              return require('streamify-array')(store.getQuads(s, p, o, g));
            }
          };

          deferred.resolve(source);
        }
      });
    });

    return deferred.promise;
  }

}

module.exports = query;
