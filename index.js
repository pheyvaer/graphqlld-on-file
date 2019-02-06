/**
 * author: Pieter Heyvaert (pheyvaer.heyvaert@ugent.be)
 * Ghent University - imec - IDLab
 */

const QueryExecutor = require('./lib/queryexecutor');

module.exports = {
  QueryExecutor,
  query: (path, context, query) => {
    const executor = new QueryExecutor(path);
    return executor.query(context, query);
  }
};
