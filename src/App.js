import React from "react";
import styled, {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
import { StatusBar } from "react-native";
import Input from "./components/input";
import Button from "./components/Button";

const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=>theme.background};
    align-items: center;
    justify-content: center;
`;

const Title = styled.Text`
    font-size: 30px;
    font-weight: 600;
    color:  ${({theme})=>theme.main};
    align-self: center;
    margin: 30px 20px;
`;

export default function App(){
    return(
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={theme.background}
                />
                <Title>로그인</Title>
                <Input placeholder="ID"/>
                <Input placeholder="Password"/>
                <Button title="login"/>
            </Container>
        </ThemeProvider>
    );
}