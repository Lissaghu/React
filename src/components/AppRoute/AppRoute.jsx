import { Routes, Route } from 'react-router-dom'

import NotFound from '../Pages/NotFound/NotFound'
import Tasks from '../Pages/Tasks/Tasks'
import UsersContainer from '../Pages/Users/UsersContainer'

const AppRoute = (props) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<UsersContainer />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoute