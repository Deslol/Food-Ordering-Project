import './App.css';

import React, { useState, useContext } from 'react';

import NavigationBar from './Components/UI/NavigationBar/NavigationBar.jsx';

import Intro from './Components/UI/Intro/Intro.jsx';

import Menu from './Components/UI/Menu/Menu';

import Modal from './Components/Reusable components/Modal/Modal';
import DumContext from './Components/context/dummy-context';

/* 
What's reusable? 

-Button
-Card

*/

function App() {
  const [modalActive, setModalActive] = useState(false);

  const { meal } = useContext(DumContext);

  const toggleModal = () => {
    setModalActive(!modalActive);
  };

  return (
    <div className='App'>
      <NavigationBar onBasketClick={toggleModal} />
      {modalActive && <Modal onClose={toggleModal} />}
      <Intro />
      <Menu />
    </div>
  );
}

export default App;
