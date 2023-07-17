import ColorContext from "../context/ContextAPI"


function ColorComponent(){

  /* const colorHandler = (value) =>{
    return <div>컬러 컴포넌트 value : {value.color}</div>
  } */


  return(
      /* consumer에서는 컨텍스트 API의 사용, 값을 전달받을 함수를 하나 선언하고, 첫번째 매개변수로 받습니다. */
    <ColorContext.Consumer>
      
      {
        (value) => (<div>컬러 컴포넌트 value : {value.color}</div>)
      }
      {/* {colorHandler} */}
    </ColorContext.Consumer>

  )
}

export default ColorComponent