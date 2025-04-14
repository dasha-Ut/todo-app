import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';

function TodosActions({
  completedTodosExist,
  resetTodoHandler,
  deleteCompletedTodoHandler,
}) {
  return (
    <div className={styles.todoActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodoHandler}>
        <RiRefreshLine />
      </Button>

      <Button
        title="Clear Completed Todos"
        disabled={!completedTodosExist}
        onClick={deleteCompletedTodoHandler}
      >
        <RiDeleteBin2Line title="Clear Completed Todos" />
      </Button>
    </div>
  );
}

export default TodosActions;
