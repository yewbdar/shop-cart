import React from 'react';
import Header from './component/Header'
import './App.css';
import { NewContext } from './context/shopContext'
import ProductList from './component/ProductList'
   
class App extends React.PureComponent {
  state ={
    product :[{
      id:1, name:'book',price:'$50',total:30,inCart:0,shop:false},
      {id:2,name:'pan',price:'$90',total:20,inCart:0, shop:false},
      {id:3,name:'light',price:'$30',total:7,inCart:0,shop:false},
      {id:4,name:'sheep',price:'$80',total:35,inCart:0,shop:false},
   ],
   cart:[],
   isProduct:true
  }
  addToCart =  (id) => {

       
       const ifExist = this.state.cart.filter(item =>  item.id == id).length > 0
       const updateCartTotal = this.state.product.map(item => {if(item.id == id) 
        { return {...item,total:item.total -= 1,
                  inCart:item.inCart += 1 }} 
                  else { return item }})
            
        if(ifExist) {
          console.log(ifExist)
           this.state.cart.forEach(item => { 
            if(item.id == id) {
            this.setState({cart:[{...this.state.cart, ...item, inCart:item.inCart += 1}]})
            
            }
          })
          }else{
                        const newObj = updateCartTotal.filter(item => item.id == id)
           this.setState({cart:[...this.state.cart,...newObj]})
          }
}
  removeFromCart = () => {

  }
  activButton = (name) => {
    let value = true;
    if(name == 'cart') 
    { value = false} 
   
    this.setState({isProduct:value},console.log('isProduct',this.state.isProduct))
    
  }
  render(){
    console.log('cart',this.state.cart)
    return (
      <div className="App">
       <NewContext.Provider value={{
            product:this.state.product,
            cart:this.state.cart,
            isProduct:this.state.isProduct,
            addToCart:this.addToCart,
            removeFromCart:this.romveFromCart,
            activButton:this.activButton
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
