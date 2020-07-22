import React,{useState, useReducer} from 'react'

import {TextInput, StyleSheet, Platform, FlatList} from 'react-native';
import {sha256} from 'react-native-sha256'

import ShoppingBasket from 'react-native-vector-icons/FontAwesome'
import ShoppingCart from 'react-native-vector-icons/FontAwesome'
import Delete from 'react-native-vector-icons/FontAwesome'

import {
  Container,
  WrapperLogo,
  WrapperText,
  WrapperInput,
  ScrollLabel,
  WrapperList,
  WrapperListView,
  WrapperComprasText,
  WrapperComprasView,
  WrapperBasket,
} from './styles';



export default function Main({line}){
  const [products, setProduct] = useState('');

  const initialState = [];

  const ListBasketReducer = (state, action) => {
    switch(action.type){
      case 'ADD':
        return [...state, action.item];
      case 'CHECKED':
        return state.map(item => {
          if(item.id === action.id){
            return {...item, checked: !item.checked}
          }else {
            return item;
          }
        })
      case 'REMOVE':
        return state.filter(item => {
          return item.id !== action.id;
        })
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(ListBasketReducer, initialState)
  


  return (
    <Container  behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <WrapperLogo>
      <ShoppingCart 
          name='shopping-cart' 
          size={80} 
          color='#fff'/>
        <WrapperText>Lista de compras</WrapperText>
      </WrapperLogo>
      <WrapperInput>
        <TextInput 
          style={styles.textInput} 
          placeholder='Adicione um produto a lista' 
          value={products} 
          onChangeText={(text) => setProduct(text)} />
        
        <WrapperBasket onPress={async () => {
             const hashID = await sha256(products)
            
          dispatch({type: 'ADD', item:{
            id: hashID,
            name: products,
            checked: false,
          }})
          setProduct('');
        }}>
        <ShoppingBasket 
          style={styles.iconShoppingBasket} 
          name='shopping-basket' 
          size={20} 
          color='#ddd'/>    
        </WrapperBasket>
      </WrapperInput>
     <ScrollLabel>
       <WrapperListView>
       <FlatList data={state} renderItem={({item}) => (
          <WrapperList>
            <WrapperComprasView onPress={() => {
              dispatch({
                type: 'CHECKED',
                id: item.id,
              })
            }}>
          <WrapperComprasText 
            line={item.checked ? 'line-through' : 'none'} 
            font={item.checked ? 'bold' : 100}>{item.name}</WrapperComprasText>
            </WrapperComprasView>
         <WrapperBasket onPress={() => {
           dispatch({
             type: 'REMOVE',
             id: item.id
           })
         }}>
          <Delete 
            name='remove' 
            size={25} 
            color='red'/>
         </WrapperBasket>
          </WrapperList>
       )}/>   
       </WrapperListView>
     </ScrollLabel>
    </Container>
  )
}

const theme = {
  checked: 'line-through',
  unchecked: 'none',
}

export const styles = StyleSheet.create({
  textInput: {
    marginLeft: 10,
    width: '70%',
    color: '#000',
  },
  iconShoppingBasket: {
    marginLeft: 40,
    width: '50%',
   
  }
})