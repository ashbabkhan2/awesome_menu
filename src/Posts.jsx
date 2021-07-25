import React, { useEffect, useState } from 'react';
import Card from './Card';
import Navbar from './component/Navbar';
import './posts.css';
const Posts = () =>{
    const [data,setdata] = useState([]);
    const[size,setsize]=useState(10);
    const url = 'https://api.instantwebtools.net/v1/passenger?page=1&size='+size;
    const fetch_api = async()=>{
        const response =await fetch(url);
        const data = await response.json();
        console.log(data.data)
        setdata(data.data)
    }
    const clicks = ()=>{
        var p = size+10;
        setsize(p);
        fetch_api();
    }

    useEffect(()=>{
       fetch_api();
    },[])
    if(data===[]){
        return(
           <div>
               <h2>Loading....</h2>
           </div>
        );
    } 
  
  return(
      <div>
          <Navbar />
          <div  className='posts'>
       {
           data.map((e)=>{
               return <Card value={e.name} value1={e.airline[0].country} image={e.airline[0].logo}/>
           })
       }
       </div>
         <div className='button11'>
       <button className='b1' onClick={clicks}>load more</button>
          </div>
       </div>
    );
    
}
export default Posts;