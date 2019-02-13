# GraphQL-LD on a file

This JavaScript library allows to easily execute a GraphQL-LD query on an RDF file.

## Usage

The package is available on npm.
You can use it as follows.

```$JavaScript
const { query } = require('graphqlld-on-file');

const result = await query('test/test.ttl', {
  name: 'http://schema.org/name'
}, '{ name }');

// result = [{name: ['Test']}]
```

## Build the GraphQL-LD engine

The engine used to execute the GraphQL-LD queries is a custom [Comunica](https://github.com/comunica/comunica) engine,
which is build using the Comunica [packager](https://github.com/comunica/comunica/tree/master/packages/packager).
You can build the engine via the following commands.

- Install dependencies via `npm i`.
- Build GraphQL-LD engine via `npm run build:engine`.

## License

© 2019 [Pieter Heyvaert](https://pieterheyvaert.com), [MIT License](https://github.com/pheyvaer/graphqlld-on-file/blob/master/LICENSE.md)
