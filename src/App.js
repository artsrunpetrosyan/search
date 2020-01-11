import React,{useState} from 'react';
import Search from './component/search/search';
import List from './component/list/list';
import './App.css';
import Context from '../src/component/context/contex'



function App() {
  const [data,setData ] = useState([]);
  const setPost =(searchData) =>{
    setData(searchData)
  }
  return (
    <div >
      <Context.Provider value={{data,setPost}} >
        <Search/>
        <List/> 
      </Context.Provider>
    </div>
  );
}

export default App;
