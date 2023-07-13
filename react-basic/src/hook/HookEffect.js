import { useEffect, useState } from "react"

function HookEffect(){

  const [name, setName]  = useState('');
  const [age, setAge]  = useState(0);

  
  // 생명주기 훅
  // useEffect(() => {
  //   console.log("랜더링완료 : " + name)
  // });

  console.log(1);

  // 첫번째 마운트 이후에만 실행됩니다.
  /* useEffect(() => {
    console.log("첫번째 마운트 이후에만 실행")
  }, []) */

  // 특정 값이 업데이트 될때 실행됩니다.
  useEffect(() => {
    console.log("name 없데이트 시에 실행됩니다.")

    return() => {
      console.log('unmount될 때 실행됩니다.')
      console.log(`인풋의 값이 바뀌기 직전 값 : ${name}`) // state가 ab로 변경할 때 a가 출력
    }

  }, [name, age])

  console.log(2);
  return (

    <div>
      <input type="text" onChange={e => setName(e.target.value)} value={name}/> <br />
      <input type="number" onChange={e => setAge(e.target.value)} value={age}/> <br />

      이름 : {name} <br />
      나이 : {age}
    </div>
  )
}


export default HookEffect