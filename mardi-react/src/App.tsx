import './App.css';
import Tests from './components/Tests';
import AddTodo from './components/AddTodo';
import Welcome from './components/Welcome';
import Logo from './components/Logo';
import List from './components/Liste';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/addTodo" element={<AddTodo />} />
          <Route path="/list" element={<List />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/tests" element={<Tests />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
