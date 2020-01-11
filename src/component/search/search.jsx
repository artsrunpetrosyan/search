import React,{useContext} from 'react';
import Context from '../context/contex';
const url ='https://it-blog-posts.herokuapp.com/api/posts'

function Search() {
    const context = useContext(Context);
 
  const fetchData = (event) => {
      const str = event.target.value;
      const filter = JSON.stringify({where:{title: {like: str}}})
  
    fetch(
        `${url}?filter=${filter}`  
    ).then(response => response.json()).then((data) =>{
        context.setPost(data);
        console.log(data)
         
    }
       
    )

  }
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={fetchData} />
                </form>
            </nav>
        </div>
    )

}

export default Search;
