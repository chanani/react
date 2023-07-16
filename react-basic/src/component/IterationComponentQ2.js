import { useRef, useState } from "react";


  const IterationComponentQ2 = () => {
      //1 - select는 컴포넌트반복으로 option태그를 생성합니다.
      const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];
  
      const newOption = select.map(item => <option key={item}>{item}</option>);


      //2 - 아래 데이터는 state로 관리하고 화면에 li태그로 반복해주세요 .
      const data = [
          {id: 1, type: 'Java', teacher: '이순신'},
          {id: 2, type: 'Java', teacher: '홍길자'},
          {id: 3, type: 'Javascript', teacher: '홍길동'},
          {id: 4, type: 'Oracle', teacher: '이순신'},
          {id: 5, type: 'Mysql', teacher: '이순신'},
          {id: 6, type: 'CSS', teacher: '박찬호'},
          {id: 7, type: 'HTML', teacher: 'coding404'},
      ];
      const[list, setList] = useState(data);
      
      const newData = list.map(item => <li key={item.id}>{item.type}-{item.teacher}</li>); 

      
      //3 - 셀렉트박스가 체인지되면 이벤트객체를 활용해서 선택된 값만 필터링해주세요.
        const handleChange = (e) =>  {
          const result = data.filter(item => {
            return item.type === e.target.value;
          });
          
          setList(result);
        }

        

      //4 - 검색기능
  
      const inputRef = useRef(null);

        const handleClick = (e) => {
          const result = data.filter(item => {
            return item.type.toLowerCase() === inputRef.current.value ||
            item.teacher === inputRef.current.value
          });
         setList(result);
         inputRef.current.value = "";
        }

      return (
          <div>
        <hr/>
              <h3>실습</h3>
              Search: <input type="text"ref={inputRef} />
              {/* Search: <input type="text"onChange= {e => setSearch(e.target.value)} /> */}

              <button onClick={handleClick} >검색</button>
              <br/>
              
        과목찾기:
              <select onChange={handleChange}>

              {newOption}

              </select>

              <ul>
              
                {newData}

              </ul>
          </div>
      )
  }
  
  export default IterationComponentQ2;
