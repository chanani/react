import React from "react";

// 클래스형에서 props와 state
class StateComponent2 extends React.Component {
  // 클래스형 컴포넌트가 생성될 떄 생성자로 프롭스 전달

  constructor(props) {
    super(props);
    // state 생성
    this.state = {
      name: "홍길동",
      age: props.age,
    };
  }

  handleState = () => {
    this.setState({name : '이순신', age : 30});
  }


  render() {
    return (
      <div>
        <div>클래스형 컴포넌트</div>
        스테이트 값 : {this.state.name}<br/>
        스테이트 값 : {this.state.age}

        <button onClick={this.handleState}>스테이트 체인지</button>
      </div>

      

    );
  }
}

export default StateComponent2;
