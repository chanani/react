import {useState} from "react"



function IterationComponentQ() {

  const arr = [
    { src: "/img/img1.png", title: "아이폰10", price: 1000 },
    { src: "/img/img2.png", title: "아이폰11", price: 2000 },
    { src: "/img/img3.png", title: "아이폰12", price: 3000 },
    { src: "/img/img4.png", title: "아이폰13", price: 4000 },
  ];

  const [list, setList] = useState(arr);
  

  const handleClick = (e) => {
    setList(e.target.src);
  }
  
  const newList = arr.map((item, index )=> <div style={{display:"inline-block"}} key={index}><img src={item.src} alt="이미지" onClick={handleClick}></img>
  <p >상품명 : {item.title}</p>
  <p>가격 : {item.price}</p>
  </div>)



  return (
    <div>
      <div>
        <img src={list}/>
      </div>
      {newList}
    </div>
  );
  
}

export default IterationComponentQ;
