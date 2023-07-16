import { useParams } from "react-router-dom"

function BoardContent(){

  const {num} = useParams();
  console.log(num)
  return(

      <div>
        <h3>boardcontent페이지</h3>
        {num}입니당
      </div>

    )

}


export default BoardContent