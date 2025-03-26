
import { Suspense } from 'react'
import './App.css'
 import Counter from './Counter'
 import User from './Users'

 const fetchUsers =async ()=>{
  const res =await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}


function App() {
  const usersPromise = fetchUsers();

  return (
    <>
      
      <h1>React Practice Tasks</h1>
      <Counter></Counter>
      <Suspense fallback={<h2>User info are loading...</h2>}>
      <User usersPromise={usersPromise}></User>
      </Suspense>
      
      
    </>
  )
}

export default App
