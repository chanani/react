import { Fragment } from "react";

function App() {

  const name = '홍길동';
  const age = 20;

  return (
    <>
    <Fragment>
        <div className="App">

        <ul>
          <li>1. JSX의 규칙 주석은 option + shift + a {/* 이렇게 적습니다. */}</li>
          <li>2. JSX에서는 반드시 하나의 JSX형태를 ()로 리턴해야합니다.</li>
          <li>3. div태그를 사용하실 싫다면 fragment(import해야됨) 태그 또는 없는 모형 <></>을 사용할 수 있습니다. </li>
          <li>4. 함수안에서 만들어진 변수는 중괄호 참조를 합니다. {name}입니다. {age}세입니다.</li>
          <li>특수문자를 사용하고 싶을 경우 중괄호 안에 ''따움표 안에 특수문자 입력하면됩니다.{'{}'}</li>
          <li>5. JSX에서 if문을 사용하고 싶다면, if문 대신 3항 연산자를 씁니다.</li>
          <li>6. 화면에서 보여주고 싶은게 없는 경우에는 null을 반환시킵니다.</li>
          <li>7. undefined를 반환하는 상황을 만들면 안됩니다.</li>
          <li style={{color : 'red', backgroundColor : "black", width : "600px", fontSize : "16px"}}>8. DOM요소(태그)에 스타일을 직접 넣을때는 반드시 객체형으로 묶고 카멜표기법을 사용합니다.</li>
          <li>9. class대신 className속성을 사용합니다.</li>
          <li>10. HTML5의 문법을 정확하게 지킵니다. (홀로사용되는 태그는 반드시 닫는 태그를 적습니다.)</li>
        </ul>

          {name === '홍길동' ? "홍길동입니다." : "홍길동이 아닙니다."}
          {name === '홍길동' ? <p>홍길동입니다.</p> : <p>홍길동이 아닙니다.</p>}
          {age !== 20 ? <p>20세 입니다.</p> : null}
          <input/>
          <img alt="사진이 없음" src="#" />


        </div>
        </Fragment>
    </>
  );
}

export default App;
