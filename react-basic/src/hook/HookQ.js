import { useEffect, useRef } from "react";




function HookQ()  {

  const inputId = useRef(null);
  const inputPw = useRef(null);

  const handleClick = () => {
    if(inputPw.current.value && inputId.current.value !== ""){
      alert(`${inputId.current.value}님의 비밀번호 ${inputPw.current.value}`)
      inputId.current.value = '';
      inputPw.current.value = '';
      inputId.current.focus();
    } else if (inputPw.current.value !== "" && inputId.current.value  === "") {
      inputId.current.focus();
    } else if(inputPw.current.value === "" && inputId.current.value  !== ""){
      inputPw.current.focus();
    }
    
  }

  useEffect( () => {
    console.log("실행");
    inputId.current.focus();

  }, [])


  return(
    <div>
      
      <input type="text" placeholder="아이디" ref={inputId}/>
        <br />
      <input type="text" placeholder="비밀번호" ref={inputPw}/>
      <br />
      <button onClick={handleClick}>로그인</button>


    </div>
  )
}

export default HookQ