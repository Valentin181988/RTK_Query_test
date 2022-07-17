import './App.css';
import { Todo } from './components/todo';
import { CreateContact } from './components/createContact';

function App() {
  return (
    <>
      <CreateContact />
      <Todo />
    </>
  );
}

export default App;
