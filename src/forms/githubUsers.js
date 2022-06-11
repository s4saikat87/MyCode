import React from 'react'
import  { useState,useEffect} from 'react'
const GithubUsers = ({users}) => {
    const [filterUsers, setFilterUsers] = useState(users);



    const searchUser = (e) => {
        
// console.log(e.target.value)
           
    const filterUsersSet = users.filter((user)=>{
    return user.login.toLowerCase().includes(e.target.value.toLowerCase());
   
   
   })
   setFilterUsers(filterUsersSet);  
    };



    return (
        <div >
            <div className='text-center'><h2>List of GitHub Users</h2>
            <div className='row'>
            <div className='col-sm-1 col-md-4 col-lg-4'></div>
                <div className='col-sm-8 col-md-4 col-lg-4'>
                <input className='search-box form-control'    type='search'  placeholder='Search users'     onChange={searchUser} />
                </div>
            </div>
            
            </div>
            
         
            <div className="container-fluid">
                <div className="row text-center">
                   
                    
                {

          filterUsers.map((curElem) => {
                        
                            const { avatar_url, id, login, type } = curElem;
                        return (
                              <div className="col-12 col-md-4 mt-5" key={id}>
                      <div className="card p-2">
                                <div className="d-flex align-items-center">
                                        <div className="image"> <img src={ avatar_url } className="rounded" width="155" /> </div>
                                    <div className="ml-3 w-100">
                                            <h4 className="mb-0 mt-0 textLeft text-dark">{login} </h4>
                                            { <span className="text-left text-dark">{type }</span> }
                                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                <div className="d-flex flex-column">
                                                    <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                        </div>
                                      
                                    </div>
                             </div>
                          </div>
                    </div>
                        )
                })        

                }
                    
                </div>
            </div>
        </div>
    )
}

export default GithubUsers
