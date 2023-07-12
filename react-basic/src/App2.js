import { Fragment } from "react"
import MyComponent from "./component/MyComponent"
import MyComponent2 from "./component/MyComponent2"
import MyComponent3 from "./component/MyComponent3"



function App() {
  return(
    <Fragment>
      <div>나의 새로운 컴포넌트</div>

      <MyComponent name={'홍길동'} age={20} addr={'서울시'} email={'chanhan@naver.com'} />     
      <MyComponent name={'이순신'} age={30} addr={'경기도'}/> 


      {/* 클래스형 컴포넌트 */}
      <MyComponent2 name={'신사임당'} age={40}/>

      <MyComponent3 title={'제목'} content={'내용'} />
      
      {/* 함수형 컴포넌트 MyComponent3을 생성합니다.
        props는 title, content, writer를 전달합니다.
        writer의 기본값은 'admin'으로 선언해주세요.
      */}

    </Fragment>
    
  )
}

export default App

