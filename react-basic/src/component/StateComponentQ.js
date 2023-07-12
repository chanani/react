import { useState } from "react";

function StateComponentQ()  {

    const [count, setCount] = useState(0);


  return(


    <div>
      카운트 : {count}
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
      <button onClick={() => setCount(0)}>초기화</button>

      
      </div>
    

  )



}




export default StateComponentQ


