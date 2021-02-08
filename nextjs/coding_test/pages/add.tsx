import { NextPage } from 'next';
import React from 'react';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import { TodoForm } from '../src/components/TodoForm';

const AddTodoPage: NextPage = () => (
  <Container maxWidth="sm">
    <Box>
      <Typography variant="h4" component="h1">
        新規追加
      </Typography>
      <TodoForm formType="add" />
    </Box>
  </Container>
);

export default AddTodoPage;
