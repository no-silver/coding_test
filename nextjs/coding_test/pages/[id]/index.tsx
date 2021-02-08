import { NextPage } from 'next';
import React, { useEffect, useMemo, useState } from 'react';
import {Button, Container} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useRouter } from 'next/router';
import { getTodo, Todo } from '../../src/lib/todo';
import Typography from "@material-ui/core/Typography";

const TodoDetailPage: NextPage = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const router = useRouter();

  const id = useMemo(() => {
    if (!router.query.id) {
      return undefined;
    }

    const idNumber = Number(router.query.id);
    if (Number.isNaN(id)) {
      return undefined;
    }

    return idNumber;
  }, [router.query.id]);

  useEffect(() => {
    setTodo(getTodo(id));
  }, [id]);

  if (!todo) {
    return <></>;
  }

  return (
    <Container maxWidth="sm">
      <Box>
        <Typography variant="h4" component="h1">
          Todoの詳細
        </Typography>
        <div style={{ margin: '40px auto' }}>
          <dl>
            <dt>
              ID
            </dt>
            <dd>
              {todo.id}
            </dd>
          </dl>
          <dl>
            <dt>
              タイトル
            </dt>
            <dd>
              {todo.title}
            </dd>
          </dl>
          <dl>
            <dt>
              説明文
            </dt>
            <dd>
              {todo.description}
            </dd>
          </dl>
        </div>
        <Button variant="contained" href="/">
          戻る
        </Button>
      </Box>
    </Container>
  );
};

export default TodoDetailPage;
