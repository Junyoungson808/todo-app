import React, { useEffect, useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) => {
  const [showCompleted, setShowCompleted] = useState(true);
  const [pageItems, setPageItems] = useState(3);
  const [sort, setSort] = useState('difficulty');

  const saveLocally = ({showCompleted, pageItems, sort}) => {
    localStorage.setItem('mufasa',JSON.stringify({showCompleted, pageItems, sort}))
  };

  const values = {
    showCompleted,
    pageItems,
    sort,
    setShowCompleted,
    setPageItems,
    setSort,
    saveLocally
  }

useEffect(() => {
  let storage = JSON.parse(localStorage.getItem('mufasa'));
  console.log('storage: ',storage);
  setShowCompleted(storage.showCompleted);
  setPageItems(storage.setPageItems ? storage.setPageItems : 3);
  setSort(storage.sort);
}, []);

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;