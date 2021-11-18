import React from "react";
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
    background-color: #778bdd;
    border-radius: 15px;
    padding: 15px 40px;
    margin: 10px 0px;
`;

const Title = styled.Text`
    font-size:15px;
    font-weight: 600;
    margin: 0px 90px;
`;

const Button = props=>{
    return (
        <ButtonContainer>
            <Title>{props.title}</Title>
        </ButtonContainer>
    )
}

export default Button;