import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { Button, Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { getTodos, Todo } from '../src/lib/todo';
import { TodoList } from '../src/components/TodoList';

const TodoListPage: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  return (
    <Container maxWidth="sm">
      <Box>
        <Typography variant="h4" component="h1">
          Todo一覧
        </Typography>
        <TodoList todos={todos} />
        <Box style={{ textAlign: 'center' }}>
          <Button variant="contained" color="primary" href="/add">
            Todoを追加する
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default TodoListPage;
