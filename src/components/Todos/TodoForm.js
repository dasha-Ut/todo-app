import { useState } from 'react';
import Button from '../UI/Button';
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState({ text: '' });

  const addNewTodo = (event) => {
    setNewTodo({ text: event.target.value });
  };

  const onSubmitHandler = (event) => {
    // on form sbmt - by default is transition to new page. Need to prevent
    event.preventDefault();
    addTodo(newTodo.text);
    setNewTodo({ ...newTodo, text: '' });
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          type="text"
          value={newTodo.text}
          onChange={(event) => addNewTodo(event)}
        />
        <Button title="Submit">Submit</Button>
      </form>
    </div>
  );
}

export default TodoForm;
