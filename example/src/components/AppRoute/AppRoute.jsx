import { Routes, Route } from 'react-router-dom'
import NotFound from '../../pages/404'
import Tasks from '../../pages/Tasks'
import NewUser from "../../pages/NewUser"

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/new-user' element={<NewUser />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoute
