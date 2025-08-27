import { AddTodo } from './components/AddTodo'
import { ListTodo } from './components/ListTodo'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <div className='container p-4 mt-2'>
      <h1>ToDo Application</h1>
      <AddTodo/>
      <ListTodo/>
    </div>
  )
}

export default App
