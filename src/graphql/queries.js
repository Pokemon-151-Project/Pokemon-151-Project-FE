/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPokemon = /* GraphQL */ `
  query GetPokemon($id: ID!) {
    getPokemon(id: $id) {
      id
      num
      name
      type
      height
      weight
      dexEntry
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPokemon = /* GraphQL */ `
  query ListPokemon(
    $filter: ModelPokemonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPokemon(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        num
        name
        type
        height
        weight
        dexEntry
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
