import React, { useState, useEffect } from 'react'


const UseEffectAPI2 = () => {

    const [users, setUsers] = useState([]);
    const [titles, setTitles] = useState('');

    const getUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
            //  setLoading(false);
            setUsers(await response.json());
        } catch (error) {
            // setLoading(false);
            console.log("my error is " + error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);


    return (
        <>
            <div >
               
                
                        {
                            users.map((currElem) => {
                                return (
                                    <div key={currElem.id}>
                                        <div className='row' >

                                            <div className='col-sm-10 col-md-4 mt5'  >


                                                <div className='card p2'>

                                                    <input type="text" defaultValue={currElem.title} name={currElem.id} onChange={(e) => { setTitles(e.target.value) }} />
                                                </div>

                                            </div>

                                            <div className='col-sm-10 col-md-4 mt5'>


                                                <div className='card p2'>

                                                    <span className='textLeft'>{currElem.userId}</span>
                                                </div>

                                            </div>

                                            <div className='col-sm-10 col-md-4 mt5' >


                                                <div className='card p2'>

                                                    <span className='textLeft'>{currElem.id}</span>
                                                </div>

                                            </div>
                                        </div>



                                    </div>


                                )




                            })

                        }
                       
                      

            </div>
        </>
    )
}

export default UseEffectAPI2