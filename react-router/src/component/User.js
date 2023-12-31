import { useLocation, useSearchParams } from "react-router-dom";



function User() {

  // 퀴리스트링 값을 받는 방법1
  const location = useLocation();
  console.log(location);

  // 쿼리스트링 값을 받는 방법2
  // 첫번쨰인덱스 - set,get을 가진 객체
  // 두번쨰인덱스 - 쿼리스트링을 직접 변경할 수 있는 함수

  const [obj, setObj] = useSearchParams();
  
  let id = obj.get("id"); // request.getParameter("키") 와 같음
  let name = obj.get("name");

  const handleClick = () =>  {
    setObj({id : '변경', name : '변경'}) // 이후에 렌더링이 일어난다.
  }


  return (
    <div>
      <h3>유저페이지</h3>

      쿼리스트링 id : {id} <br />
      쿼리스트링 name : {name} <br />

    <button onClick={handleClick}>쿼리스트링 제어하기</button>
    </div>
  );
}

export default User