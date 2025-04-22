import './App.css'
import Tests from './components/Tests';
import Todo  from './components/Todo';
import Welcome from './components/Welcome';
import Logo  from './components/Logo';

function App() {

  return (
    <div className="w-full max-w-md">
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
        <Todo />
      </div>
    </div>
  )
}

export default App
