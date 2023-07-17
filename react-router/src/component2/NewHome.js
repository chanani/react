import axios from "axios"
import { useEffect, useState } from "react"
import NewList from "./NewList";
import Category from "./Category";


function NewHome(){


  return(

    <div>
      뉴스홈
      <Category/>
      <NewList/>

    </div>


  )
}

export default NewHome