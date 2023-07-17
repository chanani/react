
function NewArticle({item}){

  
  function dateTostring(data){
    let now = new Date(data);

    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();

    return `${year}-${month < 0 ? 0 + month :  month} - ${day < 10 ? 0 + day : day}`
  }


  return(
     <li >
          <a href={item.url}>
          <img src={item.urlToImage} alt={item.title} />
          <article>
            <p>기자 : {item.author}</p>
            <p>일자 : {dateTostring(item.publishedAt)}</p>
            <p>제목 : {item.title}</p>
            <p>설명 : {item.description}</p>
          </article>
          </a>
        </li> 
  )
}

export default NewArticle