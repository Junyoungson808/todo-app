import React, { useContext } from "react";
import { SettingsContext } from "../../Context/Settings/Settings";

const List = ({ children }) => {
  const { list, toggleComplete } = useContext(SettingsContext);

  return (
    <>

      {list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}

    </>
  )
}

export default List;