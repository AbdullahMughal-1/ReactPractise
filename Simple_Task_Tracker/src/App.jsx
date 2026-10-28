import React, { useState } from 'react'

const App = () => {
  const [items, setitems] = useState([])
  const [description, setdescription] = useState("")
  const [amount, setamount] = useState("")
  const [type, settype] = useState("expense")



  const handleSubmit = (e)=>{
    e.preventDefault();

    if(description.trim() ==="" || amount.trim() ==""){
      console.log("this section cannot be empty")
      return
    }else{
      console.log("submitted");
      
    }

    const newTransaction ={
      id: Date.now(),
      description: description,
      amount: Number(amount),
      type: type
    }

    setitems([...items , newTransaction])

    setdescription("")
    setamount("")

    console.log(items);
    
   
  }

   const totalIncome = items.filter((item) =>item.type === "income").reduce((acc , item)=> acc + item.amount , 0)

    const totalExpense = items.filter((item) => item.type === "expense").reduce((acc , item) =>acc + item.amount ,0)

    const totalBalance = totalIncome - totalExpense;
    console.log(totalBalance)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Description' value={description} onChange={(e)=>{setdescription(e.target.value)}} />

        <input type="number" placeholder='Amount' value={amount}  onChange={(e)=>{setamount(e.target.value)}}/>

        <select value={type} onChange={(e)=>{settype(e.target.value)}} >
          <option value="income">Income </option>
          <option value="expense">Expense</option>
        </select>
        <button type='submit' >Add Transaction</button>
      </form>

      <ul>
        {items.map((item) =>(
          <li key={item.id}>
            {item.description}  {item.amount} {item.type}
          </li>
        ))}
      </ul>
      <div>
       <h1>Total Balance</h1> <span> {totalBalance}</span>
      </div>
    </div>
  )
}

export default App
