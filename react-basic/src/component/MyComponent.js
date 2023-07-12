import { Fragment } from "react";
import PropTypes from 'prop-types';

function MyComponent( {name, age, addr, email} ){
  // 하위 컴포넌트의 첫번쨰 매개변수에는 props가 전달됩니다.
  // const {name, age, addr} = x;
   
  return(
    <Fragment>
    <div>
      함수형 컴포넌트<br/>
      props : {name} <br/>
      props : {age} <br/>
      props : {addr} <br/>
      props이메일 : {email} <br/>
      </div>
    </Fragment>
  )
}

// props 값이 넘어오지 않았을 때 기본값의 선언
MyComponent.defaultProps = {
  email : 'aaa@naver.com',
  age : 0
}

//props값의 타입검증 
MyComponent.propTypes = {
  name: PropTypes.string,
  age : PropTypes.number,
  addr : PropTypes.string.isRequired
}


export default MyComponent