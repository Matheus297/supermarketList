import React from 'react'
import {LogBox, StatusBar} from 'react-native';

LogBox.ignoreAllLogs();

import Main from '../Main';


import {
    Container
   
  } from './styles';



export default function App(){
  return (
   <Container>
     <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
       <Main />
   </Container>
  )
}