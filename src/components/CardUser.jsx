import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const CardUser = ({}) => {

    const [user, setUser] = useState()
    const [change, setChange] = useState(true)


    useEffect(() => {
        const url = 'https://randomuser.me/api/'
        axios.get(url)
            .then(res => setUser(res.data.results[0]))
            .catch(error => console.log(error))
    }, [change])

    const changeUser = () => {
        setChange(!change)
    }


    return (
        <div className='CardUser'>
            <div className='user-image'>
                <img src={`${user?.picture.large}`} alt="user-picture" />
            </div>
            <div className='user-info'>
                <p> <span>Name:</span> {`${user?.name.first} ${user?.name.last} `}</p>
                <p> <span>Age:</span> {user?.dob.age} </p>
                <p> <span>Gender: </span> {user?.gender} </p>
                <p> <span>Cellphone: </span> {user?.cell} </p>
            </div>

            <div className='button-change'>
                <button onClick={changeUser}>
                    <ion-icon name="refresh-outline"></ion-icon>
                </button>

            </div>
        </div>
    )
}

export default CardUser
