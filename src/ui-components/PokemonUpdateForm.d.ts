/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Pokemon } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PokemonUpdateFormInputValues = {
    num?: string;
    name?: string;
    type?: string[];
    height?: string;
    weight?: string;
    dexEntry?: string;
};
export declare type PokemonUpdateFormValidationValues = {
    num?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    height?: ValidationFunction<string>;
    weight?: ValidationFunction<string>;
    dexEntry?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PokemonUpdateFormOverridesProps = {
    PokemonUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    num?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    height?: PrimitiveOverrideProps<TextFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
    dexEntry?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PokemonUpdateFormProps = React.PropsWithChildren<{
    overrides?: PokemonUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pokemon?: Pokemon;
    onSubmit?: (fields: PokemonUpdateFormInputValues) => PokemonUpdateFormInputValues;
    onSuccess?: (fields: PokemonUpdateFormInputValues) => void;
    onError?: (fields: PokemonUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PokemonUpdateFormInputValues) => PokemonUpdateFormInputValues;
    onValidate?: PokemonUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PokemonUpdateForm(props: PokemonUpdateFormProps): React.ReactElement;
