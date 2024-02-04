/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type PokemonCreateFormInputValues = {
    num?: string;
    name?: string;
    type?: string[];
    height?: string;
    weight?: string;
    dexEntry?: string;
};
export declare type PokemonCreateFormValidationValues = {
    num?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    height?: ValidationFunction<string>;
    weight?: ValidationFunction<string>;
    dexEntry?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PokemonCreateFormOverridesProps = {
    PokemonCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    num?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    height?: PrimitiveOverrideProps<TextFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
    dexEntry?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PokemonCreateFormProps = React.PropsWithChildren<{
    overrides?: PokemonCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PokemonCreateFormInputValues) => PokemonCreateFormInputValues;
    onSuccess?: (fields: PokemonCreateFormInputValues) => void;
    onError?: (fields: PokemonCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PokemonCreateFormInputValues) => PokemonCreateFormInputValues;
    onValidate?: PokemonCreateFormValidationValues;
} & React.CSSProperties>;
export default function PokemonCreateForm(props: PokemonCreateFormProps): React.ReactElement;
