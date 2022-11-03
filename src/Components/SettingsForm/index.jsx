import { Card, createStyles, Grid, NumberInput, Switch, Text, TextInput } from "@mantine/core";
import { IconSettings } from "@tabler/icons";
import { useContext } from "react";
import { SettingsContext } from '../../Context/Settings';

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
  const { pageItems, setPageItems, showCompleted, setShowCompleted, sort, setSort, } = useContext(SettingsContext);
  const { classes } = useStyles();

  return (
    <>
      <h1 className={classes.h1}><IconSettings /> Manage Settings</h1>
      <Grid style={{ width: '80%', margin: 'auto' }} >
        <Grid.Col xs={12} sm={6}>
          <Card withBorder p="xs">
            <Text>Update Settings</Text>

            <Switch 
            label="show completed todos" 
            checked={showCompleted} onChange={(event) => setShowCompleted(event.currentTarget.checked)} />

            <NumberInput onChange={(value) => setPageItems(value)} defaultValue={pageItems} placeholder={pageItems} label="Items Per Page" />

            <TextInput placeholder={sort} onChange={(e) => setSort(e.target.value)} label="Sort Keyword" />

          </Card>
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <Grid.Col xs={12} sm={6}>
            <Card withBorder p="xs">
              <Text>result here</Text>
            </Card>
          </Grid.Col>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default SettingsForm;