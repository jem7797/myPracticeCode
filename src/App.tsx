import { useState } from "react"
import ExpenseList from "./components/ExpenseTracker/components/ExpenseList"

const App = () => {

  const[expenses, setExpenses] = useState([
    {id: 1, description: "aaaa", amount: 10, category: "utility" },
    {id: 2, description: "bbbb", amount: 10, category: "utility" },
    {id: 3, description : "xxxx", amount: 10, category: "utility" },  
    ]
    )

  

  return (
    <div>
<ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id ))
}/>

    </div>
  )
}

export default App
