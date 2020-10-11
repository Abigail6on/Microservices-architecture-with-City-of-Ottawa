import React, { useState } from "react";
import Login from '../Login';
import { useSelector } from "react-redux";
import Account from "./Account"
import styled from "styled-components";
import SignUp from "./SignUp";

const Wapper = styled.div`
    color: ${props => props.theme.DarkCyan};
    font-size: 0.9rem;
`;

const AccountDetails = () => {
    const session = useSelector(state => state.session);
    const [isSigningUp, setIsSigningUp] = useState(false);
    if (session) return <Account />;

    return isSigningUp ? <SignUp /> : <Login onChangeToSignUp = {() => setIsSigningUp(true)} />;
};

export default AccountDetails;