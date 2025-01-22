import { GraphQLClient } from 'graphql-request';

const API_URL = 'https://urban-api.barrzen.com/graphql/';

export const client = new GraphQLClient(API_URL);
