import {createContext, useEffect, useState} from 'react'
import axios from 'axios'


function App(){

  /* 
    npm install axios 설치
  */



  const [ data, setData ] = useState({});

    const handleClick = () => {

      // fetch의 반환 promise
      // axios의 반환 promise
      // 결론 문법이 똑같다
      axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
      .then( response => setData(response.data))
    }


    // https://raw.githubusercontent.com/yopy0817/data_example/master/by.json

    const [data2, setData2] = useState([]);

    useEffect(() => {
      axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
      .then( response => setData2(response.data))
      

    }, []);

    
    const result = data2.map(item => <option key={item.key}>{item.value}</option>)

      


  return(
    <div>
      <h3>엑시오스 사용하기</h3>

      <button onClick={handleClick}>데이터 가져오기</button>
    <p>

    {data.userId} <br />
    {data.userPw} <br />
    {data.userName} <br />

    </p>

    <select>
      {result}
    </select>

    </div>
  )
}

export default App