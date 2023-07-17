import {Route, Routes} from "react-router-dom";
import NewHome from "./component2/NewHome";
import Header from './layout/Header';


function App() {
 
 
 return (

  <Routes >
    <Route element={<Header/>}>
      <Route path='/' element={<NewHome/>}/>
      <Route path='/:category' element={<NewHome/>}/>
    </Route>
  </Routes>


 )
}

export default App;