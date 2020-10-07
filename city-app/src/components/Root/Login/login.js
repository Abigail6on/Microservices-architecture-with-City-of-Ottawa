// yarn add apollo-cache-inmemory apollo-client apollo-link-http 
// yarn add graphql graphql-tag react-apollo @apollo/react-hooks

import React from "react";
import useForm from "react-hook-form";
import styled from "styled-components";
import TextInput from "#root/components/shared/TextInput";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Label = styled.label`
    display: block;
    :not(:first-child) {
        margin-top: 0.8rem;
    }
`;

const LabelText = styled.strong`
    display: block;
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
`;

const LoginButton = styled.button`
    display: incline-block;
    margin-top: 0.5rem;
`;

const mutation = gql`
    mutation($email: String!, $password: String!) {
        createUserSession(email: $email, password: $password) {
            id 
            user {
                email,
                id
            }
        }
        
        }
`;

const Login = () => {
    const [createUserSession] = useMutation(mutation);
    const {
        formState: { isSubmitting },
        handleSubmit,
        register
    } = useForm();

    const onSubmit = handleSubmit(async ({ email, password }) => {
        const result = await createUserSession({ variables: {email, password}});
        console.log(result);
    });

    return (
    <form onSubmit = { onSubmit }>
        <Label>
            <LabelText>
                Email
            </LabelText>
            <TextInput disabled = {isSubmitting} name = "email" type = "email" ref = {register} />
        </Label>
        <Label>
            <LabelText>
                Password
            </LabelText>
            <TextInput disabled = {isSubmitting} name = "password" type = "password" ref = {register} />
        </Label>
        <LoginButton disabled = {isSubmitting} type = "submit">
            Login
        </LoginButton>
    </form>
    );
};
export default Login;