import { Link, NavLink, Outlet } from "react-router-dom"

function Board(){
  return(


    <div>
      <h3></h3>

      <ul>
        {/* <li><Link to="/board/1">1번글</Link></li>
        <li><Link to="/board/2">2번글</Link></li>
        <li><Link to="/board/3">3번글</Link></li> */}
        
        <li><NavLink to="/board/1" style={({isActive}) => {return isActive ? {color : "red", backgroundColor: "blue"} : undefined}}>1번글</NavLink></li>
        <li><NavLink to="/board/2" style={({isActive}) => {return isActive ? {color : "red", backgroundColor: "blue"} : undefined}}>2번글</NavLink></li>
        <li><NavLink to="/board/3" style={({isActive}) => {return isActive ? {color : "red", backgroundColor: "blue"} : undefined}}>3번글</NavLink></li>
          
      </ul>
      <Outlet/>

      
    </div>
    
  )

  
}


export default Board