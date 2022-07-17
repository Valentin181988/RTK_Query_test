import './App.css';
import { Todo } from './components/todo';
import { CreateTodo } from './components/createTodo';

function App() {
  return (
    <>
      <CreateTodo />
      <Todo />
    </>
  );
}

export default App;
