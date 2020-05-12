import React from 'react';
import Header from './component/Header'
import './App.css';
import { NewContext } from './context/shopContext'
import ProductList from './component/ProductList'
   
class App extends React.Component {
  state ={
    product :[{
      id:1, name:'book',price:'$50',total:30,shop:false},
      {id:2,name:'pan',price:'$90',total:20,shop:false},
      {id:3,name:'light',price:'$30',total:7,shop:false},
      {id:4,name:'sheep',price:'$80',total:35,shop:false},
   ],
   cart:[],
   isProduct:true
  }
  addToCart = (id) =>{
    console.log(id)
  }
  removeFromCart =() =>{

  }
  render(){
    return (
      <div className="App">
       <NewContext.Provider value={{
            product:this.state.product,
            cart:this.state.cart,
            isProduct:this.state.isProduct,
            addToCart:this.addToCart,
            removeFromCart:this.romveFromCart
       }
       }>
       <Header/>
        <ProductList/>
       </NewContext.Provider>
       </div>
    );
  }
  
}

export default App;
