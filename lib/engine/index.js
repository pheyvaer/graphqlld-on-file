const __b15bnode122 = new (require('@comunica/logger-void').LoggerVoid)({});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_init_Bus_Init = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-init/Bus/Init'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_Bus_Http = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-http/Bus/Http'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_Bus_RdfJoin = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-join/Bus/RdfJoin'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-parse/Bus/RdfParse'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_dereference_Bus_RdfDereference = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-dereference/Bus/RdfDereference'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_serialize_Bus_RdfSerialize = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-serialize/Bus/RdfSerialize'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_source_identifier_Bus_RdfSourceIdentifier = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-source-identifier/Bus/RdfSourceIdentifier'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_context_preprocess_Bus_ContextPreprocess = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-context-preprocess/Bus/ContextPreprocess'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_quad_pattern_Bus_RdfResolveQuadPattern = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-resolve-quad-pattern/Bus/RdfResolveQuadPattern'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_invalidate_Bus_HttpInvalidate = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-http-invalidate/Bus/HttpInvalidate'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation_Bus_OptimizeQueryOperation = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-optimize-query-operation/Bus/OptimizeQueryOperation'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-query-operation/Bus/QueryOperation'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_parse_Bus_SparqlParse = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-sparql-parse/Bus/SparqlParse'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize = new (require('@comunica/core').Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-sparql-serialize/Bus/SparqlSerialize'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_http_json_myHttpFetcher = new (require('@comunica/actor-http-native').ActorHttpNative)({
  'agentOptions': '{ \"keepAlive\": true, \"maxSockets\": 5 }',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/http.json#myHttpFetcher',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_Bus_Http
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql_file__1_0_0_config_sets_rdf_dereference_json_mediatorHttp = new (require('@comunica/mediator-number').MediatorNumber)({
  'field': 'time',
  'type': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/mediator-number/Mediator/Number/type/TypeMin',
  'ignoreErrors': false,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql-file/^1.0.0/config/sets/rdf-dereference.json#mediatorHttp',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_Bus_Http
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_http_json_mediatorHttp = new (require('@comunica/mediator-number').MediatorNumber)({
  'field': 'time',
  'type': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/mediator-number/Mediator/Number/type/TypeMin',
  'ignoreErrors': true,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/http.json#mediatorHttp',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_Bus_Http
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_join_json_myRdfJoinActor = new (require('@comunica/actor-rdf-join-nestedloop').ActorRdfJoinNestedLoop)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/join.json#myRdfJoinActor',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_Bus_RdfJoin
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorRdfJoin = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mediatorRdfJoin',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_Bus_RdfJoin
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql_file__1_0_0_config_sets_rdf_dereference_json_mediatorRdfParse = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql-file/^1.0.0/config/sets/rdf-dereference.json#mediatorRdfParse',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql_file__1_0_0_config_sets_rdf_dereference_json_mediatorRdfParseMediatypes = new (require('@comunica/mediator-combine-union').MediatorCombineUnion)({
  'field': 'mediaTypes',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql-file/^1.0.0/config/sets/rdf-dereference.json#mediatorRdfParseMediatypes',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql_file__1_0_0_config_sets_rdf_dereference_json_mediatorRdfParseHandle = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql-file/^1.0.0/config/sets/rdf-dereference.json#mediatorRdfParseHandle',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserN3 = new (require('@comunica/actor-rdf-parse-n3').ActorRdfParseN3)({
  'mediaTypes': {
    'application/trig': '1.0',
    'application/n-quads': '0.7',
    'text/turtle': '0.6',
    'application/n-triples': '0.3',
    'text/n3': '0.1'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-parsers.json#myRdfParserN3',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserJsonLd = new (require('@comunica/actor-rdf-parse-jsonld').ActorRdfParseJsonLd)({
  'mediaTypes': {
    'application/ld+json': '1.0',
    'application/json': '0.5'
  },
  'priorityScale': '9.0E-1',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-parsers.json#myRdfParserJsonLd',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserRdfXml = new (require('@comunica/actor-rdf-parse-rdfxml').ActorRdfParseRdfXml)({
  'mediaTypes': {
    'application/rdf+xml': '1.0'
  },
  'priorityScale': '5.0E-1',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-parsers.json#myRdfParserRdfXml',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_file_json_mediatorRdfDereference = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-file.json#mediatorRdfDereference',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_dereference_Bus_RdfDereference
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_serializers_json_myRdfSerializerN3 = new (require('@comunica/actor-rdf-serialize-n3').ActorRdfSerializeN3)({
  'mediaTypes': {
    'application/trig': '1.0',
    'application/n-quads': '0.7',
    'text/turtle': '0.6',
    'application/n-triples': '0.3',
    'text/n3': '0.2'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-serializers.json#myRdfSerializerN3',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_serialize_Bus_RdfSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_serializers_json_myRdfSerializeJsonLd = new (require('@comunica/actor-rdf-serialize-jsonld').ActorRdfSerializeJsonLd)({
  'jsonStringifyIndentSpaces': 2,
  'mediaTypes': {
    'application/ld+json': '1.0'
  },
  'priorityScale': '9.0E-1',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-serializers.json#myRdfSerializeJsonLd',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_serialize_Bus_RdfSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mediatorRdfSerialize = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#mediatorRdfSerialize',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_serialize_Bus_RdfSerialize
});
const __b0bnode262 = new (require('@comunica/mediator-combine-union').MediatorCombineUnion)({
  'field': 'mediaTypes',
  'name': '_:b0bnode262',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_serialize_Bus_RdfSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_context_preprocess_rdf_source_identifiers_json_mediatorRdfSourceIdentifier = new (require('@comunica/mediator-number').MediatorNumber)({
  'field': 'priority',
  'type': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/mediator-number/Mediator/Number/type/TypeMax',
  'ignoreErrors': true,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/context-preprocess-rdf-source-identifiers.json#mediatorRdfSourceIdentifier',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_source_identifier_Bus_RdfSourceIdentifier
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorContextPreprocess = new (require('@comunica/mediator-combine-pipeline').MediatorCombinePipeline)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorContextPreprocess',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_context_preprocess_Bus_ContextPreprocess
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorResolveQuadPattern = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mediatorResolveQuadPattern',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_quad_pattern_Bus_RdfResolveQuadPattern
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_quad_pattern_Actor_RdfResolveQuadPattern_httpInvalidator_default = new (require('@comunica/bus-http-invalidate').ActorHttpInvalidateListenable)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-resolve-quad-pattern/Actor/RdfResolveQuadPattern/httpInvalidator#default',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_invalidate_Bus_HttpInvalidate
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorHttpInvalidate = new (require('@comunica/mediator-all').MediatorAll)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorHttpInvalidate',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_invalidate_Bus_HttpInvalidate
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorOptimizeQueryOperation = new (require('@comunica/mediator-combine-pipeline').MediatorCombinePipeline)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorOptimizeQueryOperation',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation_Bus_OptimizeQueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation = new (require('@comunica/mediator-number').MediatorNumber)({
  'field': 'httpRequests',
  'type': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/mediator-number/Mediator/Number/type/TypeMin',
  'ignoreErrors': true,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mediatorQueryOperation',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myEmptyBgpQueryOperator = new (require('@comunica/actor-query-operation-bgp-empty').ActorQueryOperationBgpEmpty)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myEmptyBgpQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myValuesQueryOperator = new (require('@comunica/actor-query-operation-values').ActorQueryOperationValues)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myValuesQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorSparqlParse = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorSparqlParse',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_parse_Bus_SparqlParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_parsers_json_mySparqlParser = new (require('@comunica/actor-sparql-parse-algebra').ActorSparqlParseAlgebra)({
  'prefixes': {
    'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
    'owl': 'http://www.w3.org/2002/07/owl#',
    'xsd': 'http://www.w3.org/2001/XMLSchema#',
    'dc': 'http://purl.org/dc/terms/',
    'dcterms': 'http://purl.org/dc/terms/',
    'dc11': 'http://purl.org/dc/elements/1.1/',
    'foaf': 'http://xmlns.com/foaf/0.1/',
    'geo': 'http://www.w3.org/2003/01/geo/wgs84_pos#',
    'dbpedia': 'http://dbpedia.org/resource/',
    'dbpedia-owl': 'http://dbpedia.org/ontology/',
    'dbpprop': 'http://dbpedia.org/property/',
    'schema': 'http://schema.org/',
    'skos': 'http://www.w3.org/2008/05/skos#'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-parsers.json#mySparqlParser',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_parse_Bus_SparqlParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_graphql_parsers_json_myGraphqlParser = new (require('@comunica/actor-sparql-parse-graphql').ActorSparqlParseGraphql)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/graphql-parsers.json#myGraphqlParser',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_parse_Bus_SparqlParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorSparqlSerialize = new (require('@comunica/mediator-race').MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorSparqlSerialize',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const __b0bnode258 = new (require('@comunica/mediator-combine-union').MediatorCombineUnion)({
  'field': 'mediaTypes',
  'name': '_:b0bnode258',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myJsonSparqlSerializer = new (require('@comunica/actor-sparql-serialize-json').ActorSparqlSerializeJson)({
  'mediaTypes': {
    'application/json': '1.0'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#myJsonSparqlSerializer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mySimpleSparqlSerializer = new (require('@comunica/actor-sparql-serialize-simple').ActorSparqlSerializeSimple)({
  'mediaTypes': {
    'simple': '1.0'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#mySimpleSparqlSerializer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mySparqlJsonSparqlSerializer = new (require('@comunica/actor-sparql-serialize-sparql-json').ActorSparqlSerializeSparqlJson)({
  'mediaTypes': {
    'application/sparql-results+json': '1.0'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#mySparqlJsonSparqlSerializer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mySparqlXmlSparqlSerializer = new (require('@comunica/actor-sparql-serialize-sparql-xml').ActorSparqlSerializeSparqlXml)({
  'mediaTypes': {
    'application/sparql-results+xml': '1.0'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#mySparqlXmlSparqlSerializer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myStatsSparqlSerializer = new (require('@comunica/actor-sparql-serialize-stats').ActorSparqlSerializeStats)({
  'mediaTypes': {
    'stats': '1.0'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#myStatsSparqlSerializer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myTableSparqlSerializer = new (require('@comunica/actor-sparql-serialize-table').ActorSparqlSerializeTable)({
  'columnWidth': 50,
  'mediaTypes': {
    'table': '1.0'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#myTableSparqlSerializer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myTreeSparqlSerializer = new (require('@comunica/actor-sparql-serialize-tree').ActorSparqlSerializeTree)({
  'mediaTypes': {
    'tree': '0.9'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#myTreeSparqlSerializer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_source_identifiers_json_myActorRdfSourceIdentifierFileContentType = new (require('@comunica/actor-rdf-source-identifier-file-content-type').ActorRdfSourceIdentifierFileContentType)({
  'mediatorHttp': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_http_json_mediatorHttp,
  'allowedMediaTypes': [
    'application/trig',
    'application/n-quads',
    'text/turtle',
    'application/n-triples',
    'text/n3',
    'application/ld+json',
    'application/json',
    'application/rdf+xml'
  ],
  'priority': 0.1,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-source-identifiers.json#myActorRdfSourceIdentifierFileContentType',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_source_identifier_Bus_RdfSourceIdentifier
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql_file__1_0_0_config_sets_rdf_dereference_json_myRdfFileDereferencer = new (require('@comunica/actor-rdf-dereference-file').ActorRdfDereferenceFile)({
  'mediatorRdfParse': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql_file__1_0_0_config_sets_rdf_dereference_json_mediatorRdfParse,
  'mediaMappings': {
    'ttl': 'text/turtle',
    'turtle': 'text/turtle',
    'nt': 'application/n-triples',
    'ntriples': 'application/n-triples',
    'nq': 'application/n-quads',
    'nquads': 'application/n-quads',
    'rdf': 'application/rdf+xml',
    'rdfxml': 'application/rdf+xml',
    'owl': 'application/rdf+xml',
    'n3': 'text/n3',
    'trig': 'application/trig',
    'jsonld': 'application/ld+json',
    'json': 'application/json'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql-file/^1.0.0/config/sets/rdf-dereference.json#myRdfFileDereferencer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_dereference_Bus_RdfDereference
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql_file__1_0_0_config_sets_rdf_dereference_json_myRdfDereferencer = new (require('@comunica/actor-rdf-dereference-http-parse').ActorRdfDereferenceHttpParse)({
  'mediatorHttp': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql_file__1_0_0_config_sets_rdf_dereference_json_mediatorHttp,
  'mediatorRdfParseMediatypes': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql_file__1_0_0_config_sets_rdf_dereference_json_mediatorRdfParseMediatypes,
  'mediatorRdfParseHandle': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql_file__1_0_0_config_sets_rdf_dereference_json_mediatorRdfParseHandle,
  'maxAcceptHeaderLength': 1024,
  'maxAcceptHeaderLengthBrowser': 128,
  'mediaMappings': {
    'ttl': 'text/turtle',
    'turtle': 'text/turtle',
    'nt': 'application/n-triples',
    'ntriples': 'application/n-triples',
    'nq': 'application/n-quads',
    'nquads': 'application/n-quads',
    'rdf': 'application/rdf+xml',
    'rdfxml': 'application/rdf+xml',
    'owl': 'application/rdf+xml',
    'n3': 'text/n3',
    'trig': 'application/trig',
    'jsonld': 'application/ld+json',
    'json': 'application/json'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql-file/^1.0.0/config/sets/rdf-dereference.json#myRdfDereferencer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_dereference_Bus_RdfDereference
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myRdfSparqlSerializer = new (require('@comunica/actor-sparql-serialize-rdf').ActorSparqlSerializeRdf)({
  'mediatorRdfSerialize': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mediatorRdfSerialize,
  'mediatorMediaTypeCombiner': __b0bnode262,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#myRdfSparqlSerializer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_context_preprocess_rdf_source_identifiers_json_myContextPreprocessRdfSourceIdentifier = new (require('@comunica/actor-context-preprocess-rdf-source-identifier').ActorContextPreprocessRdfSourceIdentifier)({
  'mediatorRdfSourceIdentifier': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_context_preprocess_rdf_source_identifiers_json_mediatorRdfSourceIdentifier,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/context-preprocess-rdf-source-identifiers.json#myContextPreprocessRdfSourceIdentifier',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_context_preprocess_Bus_ContextPreprocess
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_federated_json_myFederatedQuadPatternResolver = new (require('@comunica/actor-rdf-resolve-quad-pattern-federated').ActorRdfResolveQuadPatternFederated)({
  'mediatorResolveQuadPattern': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorResolveQuadPattern,
  'skipEmptyPatterns': false,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-federated.json#myFederatedQuadPatternResolver',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_quad_pattern_Bus_RdfResolveQuadPattern
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myQuadPatternQueryOperator = new (require('@comunica/actor-query-operation-quadpattern').ActorQueryOperationQuadpattern)({
  'mediatorResolveQuadPattern': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorResolveQuadPattern,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myQuadPatternQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_file_json_myQuadPatternFileResolver = new (require('@comunica/actor-rdf-resolve-quad-pattern-file').ActorRdfResolveQuadPatternFile)({
  'mediatorRdfDereference': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_file_json_mediatorRdfDereference,
  'cacheSize': 100,
  'httpInvalidator': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_quad_pattern_Actor_RdfResolveQuadPattern_httpInvalidator_default,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-file.json#myQuadPatternFileResolver',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_quad_pattern_Bus_RdfResolveQuadPattern
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myAskQueryOperator = new (require('@comunica/actor-query-operation-ask').ActorQueryOperationAsk)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myAskQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myServiceQueryOperator = new (require('@comunica/actor-query-operation-service').ActorQueryOperationService)({
  'mediatorRdfSourceIdentifier': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_context_preprocess_rdf_source_identifiers_json_mediatorRdfSourceIdentifier,
  'forceSparqlEndpoint': false,
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myServiceQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mySliceQueryOperator = new (require('@comunica/actor-query-operation-slice').ActorQueryOperationSlice)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mySliceQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mySingleBgpQueryOperator = new (require('@comunica/actor-query-operation-bgp-single').ActorQueryOperationBgpSingle)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mySingleBgpQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myLeftDeepSmallestBgpQueryOperator = new (require('@comunica/actor-query-operation-bgp-left-deep-smallest').ActorQueryOperationBgpLeftDeepSmallest)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myLeftDeepSmallestBgpQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myConstructQueryOperator = new (require('@comunica/actor-query-operation-construct').ActorQueryOperationConstruct)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myConstructQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myDescribeQueryOperator = new (require('@comunica/actor-query-operation-describe-subject').ActorQueryOperationDescribeSubject)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myDescribeQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myDistinctQueryOperator = new (require('@comunica/actor-query-operation-distinct-hash').ActorQueryOperationDistinctHash)({
  'hashAlgorithm': 'sha1',
  'digestAlgorithm': 'base64',
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myDistinctQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myExtendQueryOperator = new (require('@comunica/actor-query-operation-extend').ActorQueryOperationExtend)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myExtendQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myReducedQueryOperator = new (require('@comunica/actor-query-operation-reduced-hash').ActorQueryOperationReducedHash)({
  'hashAlgorithm': 'sha1',
  'digestAlgorithm': 'base64',
  'cacheSize': 100,
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myReducedQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myFilterQueryOperator = new (require('@comunica/actor-query-operation-filter-sparqlee').ActorQueryOperationFilterSparqlee)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myFilterQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myFromQueryOperator = new (require('@comunica/actor-query-operation-from-quad').ActorQueryOperationFromQuad)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myFromQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myGroupQueryOperator = new (require('@comunica/actor-query-operation-group').ActorQueryOperationGroup)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myGroupQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myJoinQueryOperator = new (require('@comunica/actor-query-operation-join').ActorQueryOperationJoin)({
  'mediatorJoin': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorRdfJoin,
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myJoinQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myLeftJoinQueryOperator = new (require('@comunica/actor-query-operation-leftjoin-nestedloop').ActorQueryOperationLeftJoinNestedLoop)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myLeftJoinQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myOrderByQueryOperator = new (require('@comunica/actor-query-operation-orderby-sparqlee').ActorQueryOperationOrderBySparqlee)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myOrderByQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myProjectQueryOperator = new (require('@comunica/actor-query-operation-project').ActorQueryOperationProject)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myProjectQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myUnionQueryOperator = new (require('@comunica/actor-query-operation-union').ActorQueryOperationUnion)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myUnionQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myMinusQueryOperator = new (require('@comunica/actor-query-operation-minus').ActorQueryOperationMinus)({
  'hashAlgorithm': 'sha1',
  'digestAlgorithm': 'base64',
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myMinusQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myAltPathOperator = new (require('@comunica/actor-query-operation-path-alt').ActorQueryOperationPathAlt)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myAltPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myInvPathOperator = new (require('@comunica/actor-query-operation-path-inv').ActorQueryOperationPathInv)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myInvPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myLinkPathOperator = new (require('@comunica/actor-query-operation-path-link').ActorQueryOperationPathLink)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myLinkPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myNpsPathOperator = new (require('@comunica/actor-query-operation-path-nps').ActorQueryOperationPathNps)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myNpsPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myOneOrMorePathOperator = new (require('@comunica/actor-query-operation-path-one-or-more').ActorQueryOperationPathOneOrMore)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myOneOrMorePathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_mySeqPathOperator = new (require('@comunica/actor-query-operation-path-seq').ActorQueryOperationPathSeq)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#mySeqPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myZeroOrMorePathOperator = new (require('@comunica/actor-query-operation-path-zero-or-more').ActorQueryOperationPathZeroOrMore)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myZeroOrMorePathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myZeroOrOnePathOperator = new (require('@comunica/actor-query-operation-path-zero-or-one').ActorQueryOperationPathZeroOrOne)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myZeroOrOnePathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const urn_comunica_sparqlinit = new (require('@comunica/actor-init-sparql').ActorInitSparql)({
  'mediatorOptimizeQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorOptimizeQueryOperation,
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'mediatorSparqlParse': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorSparqlParse,
  'mediatorSparqlSerialize': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorSparqlSerialize,
  'mediatorSparqlSerializeMediaTypeCombiner': __b0bnode258,
  'mediatorContextPreprocess': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorContextPreprocess,
  'mediatorHttpInvalidate': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorHttpInvalidate,
  'logger': __b15bnode122,
  'contextKeyShortcuts': {
    'source': '@comunica/bus-rdf-resolve-quad-pattern:source',
    'sources': '@comunica/bus-rdf-resolve-quad-pattern:sources',
    'initialBindings': '@comunica/actor-init-sparql:initialBindings',
    'queryFormat': '@comunica/actor-init-sparql:queryFormat',
    'baseIRI': '@comunica/actor-init-sparql:baseIRI',
    'log': '@comunica/core:log',
    'datetime': '@comunica/actor-http-memento:datetime',
    'queryTimestamp': '@comunica/actor-init-sparql:queryTimestamp'
  },
  'name': 'urn:comunica:sparqlinit',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_init_Bus_Init
});
const urn_comunica_my = ({
  'busInit': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_init_Bus_Init,
  'actors': [
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_http_json_myHttpFetcher,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_join_json_myRdfJoinActor,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql_file__1_0_0_config_sets_rdf_dereference_json_myRdfFileDereferencer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql_file__1_0_0_config_sets_rdf_dereference_json_myRdfDereferencer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserN3,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserJsonLd,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserRdfXml,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_serializers_json_myRdfSerializerN3,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_serializers_json_myRdfSerializeJsonLd,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_context_preprocess_rdf_source_identifiers_json_myContextPreprocessRdfSourceIdentifier,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_source_identifiers_json_myActorRdfSourceIdentifierFileContentType,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_federated_json_myFederatedQuadPatternResolver,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_file_json_myQuadPatternFileResolver,
    urn_comunica_sparqlinit,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_parsers_json_mySparqlParser,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myAskQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myServiceQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mySliceQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myEmptyBgpQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mySingleBgpQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myLeftDeepSmallestBgpQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myConstructQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myDescribeQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myDistinctQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myExtendQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myReducedQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myFilterQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myFromQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myGroupQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myJoinQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myLeftJoinQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myOrderByQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myProjectQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myUnionQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myMinusQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myValuesQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myQuadPatternQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myAltPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myInvPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myLinkPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myNpsPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myOneOrMorePathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_mySeqPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myZeroOrMorePathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myZeroOrOnePathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myJsonSparqlSerializer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myRdfSparqlSerializer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mySimpleSparqlSerializer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mySparqlJsonSparqlSerializer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mySparqlXmlSparqlSerializer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myStatsSparqlSerializer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myTableSparqlSerializer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myTreeSparqlSerializer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_graphql_parsers_json_myGraphqlParser
  ]
});
module.exports = urn_comunica_sparqlinit;