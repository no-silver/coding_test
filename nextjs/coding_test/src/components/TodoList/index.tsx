import { FC } from 'react';
import { Button } from '@material-ui/core';
import { Todo } from '../../lib/todo';
import { useStyles } from './styles';
import styles from './index.module.css';

export type TodoListItemProps = {
  todo: Todo;
}

export const TodoListItem: FC<TodoListItemProps> = ({ todo }) => {
  if (!todo.id) {
    return <></>;
  }

  const classes = useStyles();

  return (
    <tr>
      <td className={`${classes.text} ${classes.center} ${styles.th}`}>{todo.id}</td>
      <td className={`${styles.text} ${classes.center} ${styles.th}`}>{todo.title}</td>
      <td className={classes.th}>
        <Button variant="contained" href={`/${todo.id}`} style={{ marginRight: '16px' }}>
          詳細
        </Button>
        <Button variant="contained" color="primary" href={`/${todo.id}/edit`}>
          編集
        </Button>
      </td>
    </tr>
  );
};

type TodoListProps = {
  todos?: Todo[];
}

export const TodoList: FC<TodoListProps> = ({ todos }) => {
  if (!todos) return <></>;

  return (
    <table style={{ margin: '40px auto' }}>
      <tbody>
        <tr>
          <th className={styles.th}>ID</th>
          <th className={styles.th}>タイトル</th>
          <th className={styles.th}>アクション</th>
        </tr>
        {todos.map((todo) => <TodoListItem todo={todo} />)}
      </tbody>
    </table>
  );
};
