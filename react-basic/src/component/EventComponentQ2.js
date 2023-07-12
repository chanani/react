import { useState } from "react";




function EventComponentQ2(){

  const [data, setData] = useState({save : '',
                                    result : ''})

                
  const handleChange = (e) => {
    setData({save : e.target.value, result : data.result});
  }

  const handleClick = (e) => {
   setData({result : data.save, save : ''});
 }


  return (

    <div>

      <input type="text" onChange={handleChange} name="save" value={data.save}/>
      <button onClick={handleClick} name="result">추가하기</button>
      <br />
      결과 : {data.result}


    </div>
  )

}


export default EventComponentQ2;