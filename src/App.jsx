import React from 'react';
import styles from './App.module.scss'
import AppRoute from './components/AppRoute/AppRoute';
import HeaderContainer from './components/Header/HeaderContainer';


function App() {
  return (
    <div className={styles.wrapper}>
      <HeaderContainer />
      <AppRoute />
    </div>
  );
}

export default App;
