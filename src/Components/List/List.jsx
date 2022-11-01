import { Card, Pagination, Badge, Button } from "@mantine/core";
import { useContext, useState } from "react";
import { SettingsContext } from "../../Context/Settings";
import { When } from 'react-if';
import { IconTrash } from '@tabler/icons';

const List = ({ list, toggleComplete, deleteItem }) => {
  
  const { pageItems, showCompleted } = useContext(SettingsContext);
  const [page, setPage] = useState(1);
  // const [value, toggle] = useToggle(['green', 'red'])

  // pagination
  const listToRender = showCompleted ? list : list.filter(item => !item.complete)
  const listStart = pageItems * (page - 1);
  const listEnd = listStart + pageItems;
  const pageCount = Math.ceil(listToRender.length / pageItems);
  const displayList = listToRender.slice(listStart, listEnd);


  return (
    <>

      {displayList.map(item => (
        <Card key={item.id} withBorder >
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <Badge color={item.complete ? 'green' : 'red'} onClick={() => toggleComplete(item.id)}>
            {item.complete ? "complete" : "pending" }
          </Badge>
          <Button icon={<IconTrash size={10}/>} onClick={() => deleteItem(item.id)}>Delete</Button> 
          
        </Card>
      ))}

      <When condition={listToRender.length > 0}>
        <Pagination page={page} onChange={setPage} total={pageCount} />
      </When>
    </>
  )
}

export default List;