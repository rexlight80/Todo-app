import React ,{useReducer}from "react"
import {Col, Container} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { TodoContext } from "./context/TodoContext"
import todoReducer from "./context/reducer"
import TodoForm from "./Components/TodoForm"
import Todos from "./Components/Todos"


const App=()=>{

  const [todos,dispatch]=useReducer(todoReducer,[]);
return(
<TodoContext.Provider value={{todos,dispatch}}>
<div className="container">






<div className="row">
<div className="col-12">
<TodoForm/>
<Todos/>
</div>
</div>
</div>

</TodoContext.Provider>


)
}

export default App