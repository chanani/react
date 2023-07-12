import { useState } from "react"

function EventComponentQ(){


  const [foods, setFood] = useState({food : '메뉴를고르세요'});

  const handleChange = (e) =>{
    setFood({food : e.target.value});
  }

  

  return(
    
    <div>

    <p>셀렉트 태그가 체인지 될 때 선택한 결과르 아래에 출력</p>
    <select name="food" onChange={handleChange} value={foods.value}>
      <option value="햄버거">햄버거</option>
      <option value="피자">피자</option>
      <option value="치킨">치킨</option>
    </select>
    <br />
    <br />
    선택한 결과 : {foods.food}


    </div>
  )

}


export default EventComponentQ









