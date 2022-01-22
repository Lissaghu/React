import { Routes, Route, Redirect } from 'react-router-dom'
import FirstPageContent from '../Content/FirstPageContent/FirstPageContent'
import NotFoundPage from '../Content/NotFoundPage/NotFoundPage'
import SecondPageContent from '../Content/SecondPageContent/SecondPageContent'
import ThirdPageContent from '../Content/ThirdPageContent/ThirdPageContent'

const AppRoute = (props) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<FirstPageContent />} />
        <Route path='/secondPage' element={<SecondPageContent />} />
        <Route path='/thirdPage' element={<ThirdPageContent />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default AppRoute