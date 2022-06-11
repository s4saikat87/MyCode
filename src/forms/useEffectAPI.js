import React , { useState, useEffect } from 'react'
import GithubUsers from './githubUsers';
import Loading from './loading';
import axios, { Axios } from 'axios';
const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
      //  try {
          //  const response = await fetch('https://api.github.com/users');
           //  setLoading(false);
          
           axios.get('https://api.github.com/users')
           .then((response)=>{
            setLoading(false);
            setUsers(response.data);
            let pageno=1;
            let recordNo=100;
            
            const data={pageno,recordNo};
            axios.post('https://jsonplaceholder.typicode.com/posts',data)  
            .then((response)=>{
              
                    console.log(response);
            }) 
            .catch((error)=>{
                console.log("my error is "+ error);
            }) 



          //  setUsers(await response.json());
           })
           .catch((error)=>{
            setLoading(false);
           console.log("my error is "+ error);
           })
            
     //   } catch (error) {
     //       setLoading(false);
     //       console.log("my error is "+ error);
      //  }
    }

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <GithubUsers users={users}/>
        </>
    )
}

export default UseEffectAPI
