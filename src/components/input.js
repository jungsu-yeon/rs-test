import React from "react";
import styled, {ThemeProvider} from 'styled-components/native';
import { Dimensions } from "react-native";

const StyleInputID = styled.TextInput.attrs(({theme})=>({
    placheholderTextColor: theme.main,
}))`
    width: ${({width})=>width-120}px;
    height: 50px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: ${({theme})=>theme.itemBackground};
    font-size: 17px;
    color: #cfcfcf;
`;

const StyleInputPwd = styled.TextInput.attrs(({theme})=>({
    placheholderTextColor: theme.main,
}))`
    width: ${({width})=>width-120}px;
    height: 50px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: #778bdd;
    font-size: 17px;
    color: #cfcfcf;
`;


const Input = ({placeholder}) => {
    const width = Dimensions.get('window').width;
    return (
    <StyleInputID 
        width={width} 
        placeholder={placeholder} 
        maxLength={10}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
    />,
    <StyleInputPwd
        width={width} 
        placeholder={placeholder} 
        maxLength={10}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
    />
  );
};

export default Input;