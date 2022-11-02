import { Card, Pagination, Badge, Button, createStyles, Space } from "@mantine/core";
import { useContext, useState } from "react";
import { SettingsContext } from "../../Context/Settings";
import { When } from 'react-if';


const useStyles = createStyles((theme) => ({
  card: {
    padding: theme.spacing.sm,
    gap: '20px',
  },
}));

const List = ({ list, toggleComplete, deleteItem }) => {

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
        <Card className={classes.card} key={item.id} withBorder >
          <div className="cardHeader">
            <Badge color={item.complete ? 'green' : 'red'} onClick={() => toggleComplete(item.id)}>
              {item.complete ? "complete" : "pending"}
            </Badge>
            <Space w={30}/>
            <small>
              {item.assignee}
            </small>
            <div className="deleteButton">
              <Button radius="xs" size="xs" onClick={() => deleteItem(item.id)}>Delete</Button>
            </div>
          </div>
          <p>{item.text}</p>

          <p className="cardFooter" ><small>Difficulty: {item.difficulty}</small></p>
        </Card>
      ))}

      <When condition={listToRender.length > 0}>
        <Pagination page={page} onChange={setPage} total={pageCount} />
      </When>
    </>
  )
}

export default List;