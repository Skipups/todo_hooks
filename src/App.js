import React, {useState} from 'react';
import './App.css';

const todos=[
  {text: "read about react"},
  {text: "workout"},
  {text: "send email"},
]
function Todo ({todo, index, deleteTodo, updateTodo}){


return(
  <div className={todo.isComplete ? 'done': null}>
    {todo.text}
    <button onClick={()=>deleteTodo(index)}>x</button>
    <button onClick={()=>updateTodo(index)}>done</button> 
  </div>
)
}
function TodoForm({addTodo}){
const [newTodo, setNewTodo]=React.useState('')

const handleSubmit = (e)=>{
  e.preventDefault();
  if(!newTodo) return;
 addTodo(newTodo)
 setNewTodo("")

}
  return(
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder="new Todo.." value={newTodo} onChange={(e)=> setNewTodo( e.target.value)}/>
    </form>
  )
}

function App() {
const [todoList, setTodo]= React.useState(todos)

const updateTodo=index=>{
  const copyTodoList=[...todoList]
 copyTodoList[index].isComplete= true 
 setTodo(copyTodoList)
  }

const deleteTodo=index=>{
  const copyTodoList=[...todoList]
copyTodoList.splice(index,1)
 setTodo(copyTodoList)
}
const addTodo=words=>{
let copyList= [...todoList, {text:words}]
 setTodo(copyList)
}
  return (
<div className="app">
      <div className="todo-list">
  {todoList.map((todo,index)=> {
    return <Todo todo={todo} key={index} index={index} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
  })}
  {<TodoForm addTodo={addTodo}/>}
  </div>
  </div>
  );
}

export default App;
