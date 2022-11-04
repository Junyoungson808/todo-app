import { Card, Pagination, Badge, createStyles, Text, Group, CloseButton } from "@mantine/core";
import { useContext, useState } from "react";
import { SettingsContext } from "../../Context/Settings";
import { When, Else, If, Then } from 'react-if';
import { AuthContext } from "../../Context/Auth";
import Auth from "../Auth";

const useStyles = createStyles((theme) => ({
  Badge: {
    textTransform: 'capitalize',
    fontSize: theme.fontSizes.xs,
    margin: '3px',
  },
}));

const List = ({ list, toggleComplete, deleteItem }) => {
  const { can } = useContext(AuthContext);
  const { pageItems, showCompleted } = useContext(SettingsContext);
  const [page, setPage] = useState(1);
  const { classes } = useStyles();

  // pagination
  const listToRender = showCompleted ? list : list.filter(item => !item.complete)
  const listStart = pageItems * (page - 1);
  const listEnd = listStart + pageItems;
  const pageCount = Math.ceil(listToRender.length / pageItems);
  const displayList = listToRender.slice(listStart, listEnd);

  return (
    <>
      {displayList.map(item => (
        <Card key={item.id} withBorder shadow="md" pb="xs" mb="sm">
          <Card.Section withBorder>
            <Group position="apart">
              <Group position="left">
                <If condition={can('update')}>
                  <Then>
                    <Badge
                      onClick={() => toggleComplete(item.id)}
                      className={classes.Badge}
                      color={item.complete ? 'green' : 'red'}
                      variant="filled"
                    >
                      {item.complete ? "complete" : "pending"}
                    </Badge>
                  </Then>
                  <Else>
                    <Badge
                      className={classes.Badge}
                      color={item.complete ? 'green' : 'red'}
                      variant="filled"
                    >
                      {item.complete ? "complete" : "pending"}
                    </Badge>
                  </Else>
                </If>
                <Text padding="sm"> {item.assignee} </Text>
              </Group>
              <Auth capability="delete">
                <CloseButton title="Delete Item" onClick={() => deleteItem(item.id)} />
              </Auth>
            </Group>
          </Card.Section>
          <Text align="left" >{item.text}</Text>
          <Text align="right" ><small>Difficulty: {item.difficulty}</small></Text>
        </Card>
      ))}

      <When condition={listToRender.length > 0}>
        <Pagination page={page} onChange={setPage} total={pageCount} />
      </When>
    </>
  )
}

export default List;