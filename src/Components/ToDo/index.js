import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';
import AddForm from '../AddForm/AddForm';
import List from '../List/List';


const ToDo = () => {

  const { incomplete } = useContext(SettingsContext);

  return (
    <>
      <header data-testid="todo-header">
        <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      </header>
      <AddForm />
      <List />
    </>
  );
};

export default ToDo;
