import Menu from './components/Menu';
import Dashboard from './components/Dashboard';
import './App.css';
import Taskprovider from './context/Taskprovider';

function App() {
  return (
    <Taskprovider>
      <Menu />
      <Dashboard />
    </Taskprovider>
  );
}

export default App;
