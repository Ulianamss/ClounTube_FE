import { render } from "react-dom";
import { Routes, Route} from "react-router-dom";
import MainPage from '../pages/mainPage/mainPage.js'
import UserPage from '../pages/userPage/userPage.js'

export const useRoutes = () =>{
  return(
    <Routes>
      <Route path="/userid" component={UserPage}>
      </Route>
      <Route path="/" component={MainPage}>
      </Route>
      {/* <Redirect to="notFound"/> */}
    </Routes>
  )
}