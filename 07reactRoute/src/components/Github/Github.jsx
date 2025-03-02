import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/kuldeeplodi')
    //         .then(response => response.json())
    //         .then(data => setData(data));
    // }, [data]);
    const data=useLoaderData();
    console.log(data.follower)
  return (
    <div>
      github followers:{data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const gitInfo=async()=>{
    const response=await fetch('https://api.github.com/users/kuldeeplodi');
    const data=await response.json();
    return data;
} 
