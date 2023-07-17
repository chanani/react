import axios from "axios"
import { useEffect, useState } from "react"
import NewArticle from "./NewArticle";
import { useParams } from "react-router-dom";
import styled from './NavesList.module.css'

function NewList(){
  // 2. 로딩처리
  const [loading, setLoading] = useState(false);

  // 3. 쿼리파라미터 값 처리.
  const {category} = useParams();
  const query = category === undefined ? '' : '&category=' + category;


  // 1. 데이터 처리
  const [data, setData] = useState([]);

  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=09a219d22027405290fd01165f729eb5`;
    (async () => {
      let {data : {articles}} = await axios.get(url);
      setData(articles);
      setLoading(true); // 데이터가 도착하면 true
    })();

  },[query])

  if(!loading) {
    return <div>데이터를 불러오는 중 입니다.</div>
  }
  
  return(
    <div>
      
      <ul className={styled.wrap}>
        {data.map((item, index) => <NewArticle item={item} key={index}/> )}
      </ul>



    </div>
  )
}

export default NewList