import React from 'react'
import styles from './App.module.scss'
import Header from './components/Header/Header'
import AppRoute from './components/AppRoute/AppRoute'
import 'rsuite/dist/rsuite.min.css'


function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <AppRoute />
    </div>
  )
}

export default App
