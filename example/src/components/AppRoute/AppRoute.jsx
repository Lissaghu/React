import { Routes, Route } from 'react-router-dom'
import UserPage from '../Content/UserPage/UserPage'
import NotFoundPage from '../Content/NotFoundPage/NotFoundPage'
import AddNewUserPage from '../Content/AddNewUserPage/AddNewUserPage'
import TasksPage from '../Content/TasksPage/TasksPage'

const AppRoute = (props) => {
  return (
    <>
      <Routes>
        <Route path='/userPage' element={<UserPage />} />
        <Route path='/newUser' element={<AddNewUserPage />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default AppRoute