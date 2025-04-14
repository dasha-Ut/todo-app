import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo, toggleTodoHandler }) {
  return (
    <>
      {todos.length ? (
        <div className={styles.todoListContainer}>
          {todos.map((el) => (
            <Todo
              key={el.id}
              todo={el}
              toggleTodoHandler={toggleTodoHandler}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      ) : (
        <h3>Todos list is empty</h3>
      )}
    </>
  );
}

export default TodoList;
