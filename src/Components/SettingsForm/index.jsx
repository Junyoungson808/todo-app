import { Button, Card, createStyles, Grid, NumberInput, Switch, Text, TextInput } from "@mantine/core";
import { IconSettings } from "@tabler/icons";
import { useContext, useState } from "react";
import { SettingsContext } from '../../Context/Settings';
import { When } from 'react-if';

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

const SettingsForm = () => {
  const { classes } = useStyles();
  const { 
    pageItems, 
    setPageItems, 
    showCompleted, 
    setShowCompleted, 
    sort, 
    setSort, 
    saveLocally, 
  } = useContext(SettingsContext);
  
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    saveLocally({ showCompleted, pageItems, sort });
  }

  return (
    <>
      <h1 className={classes.h1}><IconSettings /> Manage Settings</h1>
      <Grid style={{ width: '80%', margin: 'auto' }} >
        <Grid.Col xs={12} sm={6}>
          <Card withBorder p="xs">
            <form onSubmit={handleSubmit}>
              <Text>Update Settings</Text>

              <Switch
                label="show completed todos"
                onChange={(event) => setShowCompleted(event.currentTarget.checked)}
                checked={showCompleted}
              />

              <NumberInput
                label="Items Per Page"
                onChange={(value) => setPageItems(value)}
                defaultValue={pageItems}
                placeholder={pageItems}
              />

              <TextInput
                label="Sort Keyword"
                onChange={(e) => setSort(e.target.value)}
                placeholder={sort}
              />

              <Button type="submit">Show New Settings</Button>
            </form>
          </Card>
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <When condition={show}>
            <Card withBorder p="xs">
              <Card.Section>
              <Text m='xl'>Updated Settings</Text>
              </Card.Section>
              <Text m="sm">{showCompleted ? 'Show' : 'Hide'} </Text>
              <Text m="sm">Items Per Page: {pageItems}</Text>
              <Text m="sm">Sort Keyword: {sort} </Text>
            </Card>
          </When>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default SettingsForm;