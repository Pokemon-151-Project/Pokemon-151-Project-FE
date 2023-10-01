/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPokemon = /* GraphQL */ `
  mutation CreatePokemon(
    $input: CreatePokemonInput!
    $condition: ModelPokemonConditionInput
  ) {
    createPokemon(input: $input, condition: $condition) {
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
export const updatePokemon = /* GraphQL */ `
  mutation UpdatePokemon(
    $input: UpdatePokemonInput!
    $condition: ModelPokemonConditionInput
  ) {
    updatePokemon(input: $input, condition: $condition) {
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
export const deletePokemon = /* GraphQL */ `
  mutation DeletePokemon(
    $input: DeletePokemonInput!
    $condition: ModelPokemonConditionInput
  ) {
    deletePokemon(input: $input, condition: $condition) {
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
