/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePokemonInput = {
  id?: string | null,
  num: string,
  name: string,
  type?: Array< string | null > | null,
  height?: string | null,
  weight?: string | null,
  dexEntry?: string | null,
};

export type ModelPokemonConditionInput = {
  num?: ModelStringInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  height?: ModelStringInput | null,
  weight?: ModelStringInput | null,
  dexEntry?: ModelStringInput | null,
  and?: Array< ModelPokemonConditionInput | null > | null,
  or?: Array< ModelPokemonConditionInput | null > | null,
  not?: ModelPokemonConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Pokemon = {
  __typename: "Pokemon",
  id: string,
  num: string,
  name: string,
  type?: Array< string | null > | null,
  height?: string | null,
  weight?: string | null,
  dexEntry?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePokemonInput = {
  id: string,
  num?: string | null,
  name?: string | null,
  type?: Array< string | null > | null,
  height?: string | null,
  weight?: string | null,
  dexEntry?: string | null,
};

export type DeletePokemonInput = {
  id: string,
};

export type ModelPokemonFilterInput = {
  id?: ModelIDInput | null,
  num?: ModelStringInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  height?: ModelStringInput | null,
  weight?: ModelStringInput | null,
  dexEntry?: ModelStringInput | null,
  and?: Array< ModelPokemonFilterInput | null > | null,
  or?: Array< ModelPokemonFilterInput | null > | null,
  not?: ModelPokemonFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelPokemonConnection = {
  __typename: "ModelPokemonConnection",
  items:  Array<Pokemon | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPokemonFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  num?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  height?: ModelSubscriptionStringInput | null,
  weight?: ModelSubscriptionStringInput | null,
  dexEntry?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPokemonFilterInput | null > | null,
  or?: Array< ModelSubscriptionPokemonFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreatePokemonMutationVariables = {
  input: CreatePokemonInput,
  condition?: ModelPokemonConditionInput | null,
};

export type CreatePokemonMutation = {
  createPokemon?:  {
    __typename: "Pokemon",
    id: string,
    num: string,
    name: string,
    type?: Array< string | null > | null,
    height?: string | null,
    weight?: string | null,
    dexEntry?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePokemonMutationVariables = {
  input: UpdatePokemonInput,
  condition?: ModelPokemonConditionInput | null,
};

export type UpdatePokemonMutation = {
  updatePokemon?:  {
    __typename: "Pokemon",
    id: string,
    num: string,
    name: string,
    type?: Array< string | null > | null,
    height?: string | null,
    weight?: string | null,
    dexEntry?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePokemonMutationVariables = {
  input: DeletePokemonInput,
  condition?: ModelPokemonConditionInput | null,
};

export type DeletePokemonMutation = {
  deletePokemon?:  {
    __typename: "Pokemon",
    id: string,
    num: string,
    name: string,
    type?: Array< string | null > | null,
    height?: string | null,
    weight?: string | null,
    dexEntry?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPokemonQueryVariables = {
  id: string,
};

export type GetPokemonQuery = {
  getPokemon?:  {
    __typename: "Pokemon",
    id: string,
    num: string,
    name: string,
    type?: Array< string | null > | null,
    height?: string | null,
    weight?: string | null,
    dexEntry?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPokemonQueryVariables = {
  filter?: ModelPokemonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPokemonQuery = {
  listPokemon?:  {
    __typename: "ModelPokemonConnection",
    items:  Array< {
      __typename: "Pokemon",
      id: string,
      num: string,
      name: string,
      type?: Array< string | null > | null,
      height?: string | null,
      weight?: string | null,
      dexEntry?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePokemonSubscriptionVariables = {
  filter?: ModelSubscriptionPokemonFilterInput | null,
};

export type OnCreatePokemonSubscription = {
  onCreatePokemon?:  {
    __typename: "Pokemon",
    id: string,
    num: string,
    name: string,
    type?: Array< string | null > | null,
    height?: string | null,
    weight?: string | null,
    dexEntry?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePokemonSubscriptionVariables = {
  filter?: ModelSubscriptionPokemonFilterInput | null,
};

export type OnUpdatePokemonSubscription = {
  onUpdatePokemon?:  {
    __typename: "Pokemon",
    id: string,
    num: string,
    name: string,
    type?: Array< string | null > | null,
    height?: string | null,
    weight?: string | null,
    dexEntry?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePokemonSubscriptionVariables = {
  filter?: ModelSubscriptionPokemonFilterInput | null,
};

export type OnDeletePokemonSubscription = {
  onDeletePokemon?:  {
    __typename: "Pokemon",
    id: string,
    num: string,
    name: string,
    type?: Array< string | null > | null,
    height?: string | null,
    weight?: string | null,
    dexEntry?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
