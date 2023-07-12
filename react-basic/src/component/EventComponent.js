import { useState } from "react";

function EventComponent() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");

  const handleChange = (e) => {
    setName(e.target.value); // 사용자의 입력 값
    // 마지막으로 input에 value 속성에 리액트의 state를 적습니다.
  };

  const handleKeyUp = (e) => {
    // 엔터를 쳤을 떄 동작함
    if(e.key === 'Enter'){
      console.log('엔터 누름');
      handleClick();
    }
  }

  const handleClick = () => {
      alert(`${name}님의 할일목록 ${topic}`);
      setName(''); // 초기화
      setTopic(''); // 초기화
  }

  return (
    <div>
      <h3>리액트의 이벤트 핸들링(인풋태그의 change)</h3>
      <input type="text" onChange={handleChange} value={name} />
      <br />
      <br />
      변경된 값 : {name}
      <hr />
      <h3>리엑트 이벤트(key up)</h3>
      <input type="text" onChange={(e) => setTopic(e.target.value) }  
                         onKeyUp={handleKeyUp}
                         value={topic}/>
      <br />
      <br />
      변경된 값 : {topic}
      <hr />
      <h3>리액트 이벤트(click)</h3>
      <button onClick={handleClick}>클릭me</button>
      <hr />



    </div>
  );
}

export default EventComponent;
