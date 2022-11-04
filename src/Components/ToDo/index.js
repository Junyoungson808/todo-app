import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import List from '../List/List.jsx';
import { v4 as uuid } from 'uuid';
import { Button, Card, createStyles, Grid, Slider, Text, TextInput } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  formHeading: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
  },
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[1],
    width: '80%',
    margin: 'auto',
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.lg,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
  }
}));

const ToDo = () => {
  const { classes } = useStyles();

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem({ ...item }) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  return (
    <>
      <h1 className={classes.h1} data-testid="todo-header" >To Do List: {incomplete} items pending</h1>

      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={4}>
          <Card withBorder p='xs' >
            <Text className={classes.formHeading}>Add To Do Item</Text>

            <form onSubmit={handleSubmit}>

              <TextInput
                placeholder="Item Details"
                name="text"
                onChange={handleChange}
                label="To Do Item"
              />

              <TextInput
                placeholder="Assigned"
                name="assignee"
                onChange={handleChange}
                label="Assigned To"
              />

              <Text> Difficulty </Text>
              <Slider
                onChange={handleChange}
                defaultValue={defaultValues.difficulty}
                min={0}
                max={5}
                step={1}
                name="difficulty"
                type="range"
                mb='lg'
              />
              <Button type="submit">Add Item</Button>
            </form>

          </Card>
        </Grid.Col>
        <Grid.Col xs={12} sm={8}>
          <List
            list={list}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
          />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default ToDo;