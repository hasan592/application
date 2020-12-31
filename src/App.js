import './App.css';
import Navigation from './Route' 
function App() {
  return (
    <Navigation />
  );
}






export default App;



















// import React, { useState } from 'react'
// import './App.css';
// import { Button, } from './Button/index'
// function App() {
//   const [todo, setTodo] = useState('')
//   const [allTodos, setAllTodos] = useState([])
//   const [edit, setEdit] = useState(false)

//   const submitTodo = () => {
//     if (todo === '') {
//       alert('Please enter some thing')
//     } else {
//       setAllTodos([todo, ...allTodos])
//       setTodo('')
//     }
//   }

//   const deleteTodo = (index) => {
//     let arr = allTodos
//     arr.splice(index, 1)
//     setAllTodos([...arr])
//   }

//   const editTodo = (todo, index) => {
//     setEdit(true);
//     // var updatedTodo = prompt('Todo', todo)
//     // let arr = allTodos
//     // arr[index] = updatedTodo
//     // setAllTodos([...arr])
//   }



//   return (
//     <div className="App">
//       <div>
//         <input type={'text'} value={todo}
//           placeholder={'Enter Todo'}
//           onChange={(e) => setTodo(e.target.value)} />
//         <Button onClick={submitTodo} title={"Add"} />
//       </div>
//       <div>
//         {
//           allTodos.map((todo, index) => {
//             return (
//               <div> {edit ? <input value={todo} /> : <span> {todo} </span>}
//                 {
//                   edit ?
//                     <Button  title={"Save"} />
//                     :
//                     <Button onClick={() => editTodo(todo, index)} title={"Edit"} />
//                 }
//                 <Button onClick={() => deleteTodo(index)} title={"Delete"} />
//               </div>
//             )
//           })
//         }
//       </div>

//     </div>
//   );
// }



















