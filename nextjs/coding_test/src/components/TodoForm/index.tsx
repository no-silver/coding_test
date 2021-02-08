import React, {FC, useState} from 'react';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import {
  addTodo, removeTodo, Todo, updateTodo,
} from '../../lib/todo';
import styles from './index.module.css';
import { useStyles } from './styles';

export type P = {
  formType: string | null;
  todo?: Todo;
}

export const TodoForm: FC<P> = ({ formType, todo }) => {
  if (!(formType == 'add' || formType == 'edit')) {
    return <></>;
  } else {
    const {
      register,
      handleSubmit,
    } = useForm<Todo>();
    const r = useRouter();
    const c = useStyles();
    const [loading, setLoading] = useState(false);

    const onSubmit = (data: Todo) => {
      setLoading(true);

      if (formType == 'add') {
        const newTodo = addTodo(data.title, data.description);
        r.push(`/${newTodo.id}`);
      } else {
        updateTodo(String(todo.id), data.title, data.description);
        r.push('/');
      }
    };

    const d = () => {
      removeTodo(todo.id);
      r.push('/');
    };

    return (
      <div className={c.root}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <dl className={styles.dl}>
            <dt style={{ fontWeight: 'bold' }}>
              タイトル
            </dt>
            <dd className={c.dd}>
              <input name="title" defaultValue={todo?.title ?? ''} ref={register} />
            </dd>
          </dl>
          <dl className={styles.dl}>
            <dt style={{ fontWeight: 'bold' }}>
              説明文
            </dt>
            <dd className={c.dd}>
              <input name="description" defaultValue={todo?.description ?? ''} ref={register} />
            </dd>
          </dl>
          <div style={{ marginTop: '32px' }}>
            <Button type="button" variant="contained" color="primary" style={{ marginRight: '40px' }} disabled={loading}>
              {formType == 'add' ? (
                <>追加</>
              ) : (
                <>変更</>
              )}
            </Button>
            <Button variant="contained" href="/" style={{ marginRight: '40px' }}>
              戻る
            </Button>
            {formType == 'edit' && (
              <Button onClick={d} variant="contained" color="secondary">
                削除
              </Button>
            )}
          </div>
        </form>
      </div>
    );
  }
};
