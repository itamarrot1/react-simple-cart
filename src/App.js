import React, { useEffect, useState } from 'react'


export const App = () => {

const [products, setproducts] = useState([{id: 1,desc: "milk", price: 10},
  {id:2,desc: "sugar", price:2},
  {id:3,desc:"bread",price:5}])
const [cart, setcart] = useState([])
const [total, settotal] = useState(0)

useEffect(() => {
let temp = 0
cart.forEach(x=> temp += x.price * x.amount )
settotal(temp)
}, [cart])


const buy=(item,cal)=>{
  let ex_in_cart= cart.filter(x=> x.id == item.id)[0]
  if (ex_in_cart) {
      ex_in_cart.amount += cal
      if (ex_in_cart.amount == 0) {
        setcart([...cart.filter(x=> x.id != item.id)])
      }else{
        setcart([...cart])
      }
  } else{
    console.log('not ex');
    item.amount=1
    setcart([...cart,item])
  }
}


  return (
    <div>
      <h1>Supermarket</h1>
    <hr></hr>
    <h2>Our products</h2>
    {products.map(item=>
    <div key={item.id}> 
        Desc:  {item.desc} ,price: {item.price}$ 
        <button onClick={()=>buy(item,1)}>Add to cart </button>
    </div>)}

    <hr></hr>

    <h3> your cart:</h3>
     {cart.map(pro=> <div>
      {pro.desc} {pro.price}$ , amount: {pro.amount} <button onClick={()=> buy(pro,1)}>+</button>
      <button onClick={()=> buy(pro,-1)}>-</button>
     </div>)}
     <p>Your Total :{total}$</p>
    </div>
  )
}


export default App;