import { Routes, Route } from 'react-router-dom'

import NotFoundPage from '../Content/NotFoundPage/NotFoundPage'
import TasksPage from '../Content/TasksPage/TasksPage'
import { NewUserPageContainer } from '../Content/NewUserPage/NewUserPageContainer'
import UserPageContainer from '../Content/UserPage/UserPageContainer'

const AppRoute = (props) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserPageContainer />} />
        <Route path='/newUser' element={<NewUserPageContainer />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default AppRoute