import { render } from "react-dom";
import { Routes, Route} from "react-router-dom";
import MainPage from '../pages/mainPage/mainPage.js'
import UserPage from '../pages/userPage/userPage.js'

export const useRoutes = () =>{
  return(
    <Routes>
      <Route path="/:userId" element={<UserPage/>}>
      </Route>
      <Route path="/" element={<MainPage/>}>
      </Route>
      {/* <Redirect to="notFound"/> */}
    </Routes>
  )
}