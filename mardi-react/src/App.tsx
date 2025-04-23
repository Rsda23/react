import './App.css'
import Tests from './components/Tests';
import AddTodo from './components/AddTodo'
import Welcome from './components/Welcome';
import Logo  from './components/Logo';
import List from './components/Liste';

function App() {

  return (
    <div className='w-full overflow-x-hidden'>
      <div>
        <Welcome/>
      </div>
      <div>
        <Logo />
      </div>
      <div>
        <Tests />
      </div>
      <div>
        <AddTodo />
      </div>
      <div>
        <List/>
      </div>
    </div>
  )
}

export default App
