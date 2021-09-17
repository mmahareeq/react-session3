import React, {useState,useEffect} from 'react'
import Load from './Loading'
import Cardone from './oneCard'
import axios from 'axios';
export default function Cards() {
    const [data ,setDate] = useState([]);
    const fetchData = async(url)=>{
        const re = await axios.get(url)
        const D = re.data;
        setDate(D);
    }
    useEffect(()=>{
         fetchData(`https://jsonplaceholder.typicode.com/posts`);  
          },[])
    console.log(data);
    return (

        <div className="card">
            {!data.length ? <Load/> : data.map(item=><Cardone Data = {item}/>)}
        </div>
    )
}
