import './App.css';
import AddItem from './components/Modify/Modify';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <div className="app">
      <Todo/>
      <AddItem/>
    </div>
  );
}

export default App;
