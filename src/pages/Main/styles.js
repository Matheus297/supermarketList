import styled from 'styled-components';

import {Dimensions} from 'react-native';




export const Container = styled.KeyboardAvoidingView`
display: flex;
align-items: center;
width: 90%;
flex: 1;
background-color: #fff;

`;

export const WrapperLogo = styled.View`
height: 320px;
width: 100%;
margin-top: 30px;
background-color: blue;
align-items: center;
justify-content: center;
border: 1px solid #ddd;
border-radius: 18px;

`;

export const WrapperText = styled.Text`
font-size: 22px;
margin-top: 20px;
color: #fff;
`;

export const WrapperInput = styled.View`
display: flex;
flex-direction: row;
align-items: center;
width: 95%;
height: 40px;
border: 1px solid #ccc;
margin-top: 20px;
border-radius: 10px;


`;

export const WrapperBasket = styled.TouchableOpacity``;

export const WrapperListView = styled.View`
align-items: center;
width: 100%;
border: 1px solid #ddd;
border-radius: 10px;
margin-top: 20px;


`;

export const WrapperList = styled.View`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border: 2px solid #ddd;
width: 100%;
height: 50px;
margin-top: 1px;
margin-bottom: 1px;
border-radius: 10px;
`;

export const WrapperComprasView = styled.TouchableOpacity`
width: 90%;
`;
export const WrapperComprasText = styled.Text`
font-size: 16px;
text-decoration: ${props => props.line};
font-weight: ${props => props.font};

`;

export const ScrollLabel = styled.ScrollView`
width: 95%;
margin-top: 20px;
`;