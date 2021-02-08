import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useRouter } from 'next/router';
import { getTodo, Todo } from '../../src/lib/todo';
import { TodoForm } from '../../src/components/TodoForm';
import Typography from "@material-ui/core/Typography";

const EditPage: NextPage = () => {
  const [todo, setTodo] = useState<Todo>();
  const r = useRouter();
  const id = r.query.id;

  useEffect(() => {
    const todo = getTodo(id);
    setTodo(todo);
  });

  return (
    <Container maxWidth="sm">
      <Box>
        <Typography variant="h4" component="h1">
          Todoの編集
        </Typography>
        <TodoForm formType="edit" todo={todo} />
      </Box>
    </Container>
  );
};

export default EditPage;
