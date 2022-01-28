import { Routes, Route } from 'react-router-dom'
import UserPage from '../Content/UserPage/UserPage'
import NotFoundPage from '../Content/NotFoundPage/NotFoundPage'
import TasksPage from '../Content/TasksPage/TasksPage'
import { NewUserPageContainer } from '../Content/NewUserPage/NewUserPageContainer'

const AppRoute = (props) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserPage />} />
        <Route path='/newUser' element={<NewUserPageContainer />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default AppRoute